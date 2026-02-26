import { Metadata } from 'next';
import ArticleCard from '@/components/ArticleCard';

import { Article } from '@/types';

import styles from '@/styles/ArticlesPage.module.css';

export const metadata: Metadata = {
  title: 'Articles',
};

export const revalidate = 300;

async function getArticles(): Promise<Article[]> {
  const res = await fetch('https://medium.com/feed/@drashtimagia');

  if (!res.ok) {
    console.error(`Failed to fetch articles: ${res.status} ${res.statusText}`);
    return [];
  }

  const xml = await res.text();
  const items = xml.match(/<item>([\s\S]*?)<\/item>/g) ?? [];

  const getTag = (source: string, tag: string) => {
    const match = source.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`));
    return match?.[1]?.trim() ?? '';
  };

  const normalize = (text: string) =>
    text
      .replace(/^<!\[CDATA\[/, '')
      .replace(/\]\]>$/, '')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .trim();

  const stripHtml = (html: string) =>
    html
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

  const extractImage = (html: string) => {
    const imgMatch = html.match(/<img[^>]+src=["']([^"']+)["']/i);
    return imgMatch?.[1] ?? '/themes/github-dark.png';
  };

  return items.slice(0, 6).map((item, index) => {
    const title = normalize(getTag(item, 'title'));
    const url = normalize(getTag(item, 'link'));
    const guid = normalize(getTag(item, 'guid')) || url || `medium-${index}`;
    const content = normalize(getTag(item, 'content:encoded')) || normalize(getTag(item, 'description'));
    const description = stripHtml(content).slice(0, 180) || 'Read this article on Medium.';

    return {
      id: guid,
      title,
      description,
      cover_image: extractImage(content),
      url,
      page_views_count: 0,
      public_reactions_count: 0,
      comments_count: 0,
    };
  });
}

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerMain}>            
            <div className={styles.headerContent}>
              <h1 className={styles.title}>My Articles</h1>
              <p className={styles.subtitle}>
                Medium drops where I turn ideas into fun, buildable insights across tech, systems, and creativity.
              </p>
            </div>
          </div>
        </header>

        <div className={styles.articlesList}>
          {articles.map((article, index) => (
            <ArticleCard 
              key={article.id} 
              article={article}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
