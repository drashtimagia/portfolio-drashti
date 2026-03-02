'use client';

import { useEffect, useState } from 'react';

import ArticleCard from '@/components/ArticleCard';
import styles from '@/styles/ArticlesPage.module.css';
import { Article } from '@/types';

interface ArticlesListProps {
  initialArticles: Article[];
}

const REFRESH_INTERVAL_MS = 60_000;
const READS_STORAGE_KEY = 'medium-synthetic-reads';

function getInitialReadCount(article: Article, index: number) {
  const seed = Array.from(`${article.id}-${index}`).reduce(
    (total, char) => total + char.charCodeAt(0),
    0,
  );

  return 900 + (seed % 601);
}

function getReadIncrement(article: Article, index: number) {
  const seed = Array.from(`${index}-${article.title}`).reduce(
    (total, char) => total + char.charCodeAt(0),
    0,
  );

  return 15 + (seed % 36);
}

function mergeSyntheticReads(
  articles: Article[],
  previousReads: Record<string, number>,
  bumpReads: boolean,
) {
  const nextReads: Record<string, number> = {};

  const nextArticles = articles.map((article, index) => {
    const currentReadCount = previousReads[article.id] ?? getInitialReadCount(article, index);
    const nextReadCount = bumpReads
      ? Math.min(2500, currentReadCount + getReadIncrement(article, index))
      : currentReadCount;

    nextReads[article.id] = nextReadCount;

    return {
      ...article,
      page_views_count: nextReadCount,
    };
  });

  return {
    articles: nextArticles,
    reads: nextReads,
  };
}

const ArticlesList = ({ initialArticles }: ArticlesListProps) => {
  const [readsById, setReadsById] = useState<Record<string, number>>(() => {
    if (typeof window === 'undefined') {
      return {};
    }

    try {
      const storedReads = window.localStorage.getItem(READS_STORAGE_KEY);
      return storedReads ? (JSON.parse(storedReads) as Record<string, number>) : {};
    } catch {
      return {};
    }
  });
  const [articles, setArticles] = useState(() =>
    mergeSyntheticReads(initialArticles, readsById, false).articles,
  );

  useEffect(() => {
    setReadsById((currentReads) => {
      const merged = mergeSyntheticReads(initialArticles, currentReads, false);
      setArticles(merged.articles);
      return { ...currentReads, ...merged.reads };
    });
  }, [initialArticles]);

  useEffect(() => {
    try {
      window.localStorage.setItem(READS_STORAGE_KEY, JSON.stringify(readsById));
    } catch {
      return;
    }
  }, [readsById]);

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
          setReadsById((currentReads) => {
            const merged = mergeSyntheticReads(data.articles ?? [], currentReads, true);
            setArticles(merged.articles);
            return merged.reads;
          });
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
    <div className={styles.articlesList}>
      {articles.map((article, index) => (
        <ArticleCard key={article.id} article={article} index={index + 1} />
      ))}
    </div>
  );
};

export default ArticlesList;
