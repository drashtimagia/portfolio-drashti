import { Metadata } from 'next';
import ArticlesList from '@/components/ArticlesList';

import { getMediumArticles } from '@/lib/medium';
import styles from '@/styles/ArticlesPage.module.css';

export const metadata: Metadata = {
  title: 'Articles',
};

export const dynamic = 'force-dynamic';

export default async function ArticlesPage() {
  const articles = await getMediumArticles();

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

        <ArticlesList initialArticles={articles} />
      </div>
    </div>
  );
}
