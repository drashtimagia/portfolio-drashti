'use client';

import { useEffect, useState } from 'react';

import ArticleCard from '@/components/ArticleCard';
import styles from '@/styles/ArticlesPage.module.css';
import { Article } from '@/types';

interface ArticlesListProps {
  initialArticles: Article[];
}

const REFRESH_INTERVAL_MS = 60_000;

const ArticlesList = ({ initialArticles }: ArticlesListProps) => {
  const [articles, setArticles] = useState(initialArticles);
  const [lastUpdated, setLastUpdated] = useState(() => new Date());

  useEffect(() => {
    setArticles(initialArticles);
    setLastUpdated(new Date());
  }, [initialArticles]);

  useEffect(() => {
    let isMounted = true;

    const refreshArticles = async () => {
      try {
        const res = await fetch('/api/medium', { cache: 'no-store' });

        if (!res.ok) {
          return;
        }

        const data = (await res.json()) as { articles?: Article[] };

        if (isMounted && Array.isArray(data.articles)) {
          setArticles(data.articles);
          setLastUpdated(new Date());
        }
      } catch {
        return;
      }
    };

    const intervalId = window.setInterval(refreshArticles, REFRESH_INTERVAL_MS);

    return () => {
      isMounted = false;
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <p className={styles.meta}>
        Auto-refreshes every minute. Medium only exposes public stats, so reads may stay unavailable.
        {' '}
        Last sync: {lastUpdated.toLocaleTimeString()}
      </p>

      <div className={styles.articlesList}>
        {articles.map((article, index) => (
          <ArticleCard key={article.id} article={article} index={index + 1} />
        ))}
      </div>
    </>
  );
};

export default ArticlesList;
