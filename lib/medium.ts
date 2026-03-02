import { Article } from '@/types';

const MEDIUM_FEED_URL = 'https://medium.com/feed/@drashtimagia';
const DEFAULT_IMAGE = '/themes/github-dark.png';

const ENTITY_MAP: Record<string, string> = {
  '&amp;': '&',
  '&quot;': '"',
  '&#39;': "'",
  '&lt;': '<',
  '&gt;': '>',
};

function getTag(source: string, tag: string) {
  const match = source.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`));
  return match?.[1]?.trim() ?? '';
}

function normalize(text: string) {
  return text
    .replace(/^<!\[CDATA\[/, '')
    .replace(/\]\]>$/, '')
    .replace(/&(amp|quot|#39|lt|gt);/g, (entity) => ENTITY_MAP[entity] ?? entity)
    .trim();
}

function stripHtml(html: string) {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractImage(html: string) {
  const imgMatch = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return imgMatch?.[1] ?? DEFAULT_IMAGE;
}

function extractMetric(html: string, patterns: RegExp[]) {
  for (const pattern of patterns) {
    const match = html.match(pattern);
    const rawValue = match?.[1];

    if (!rawValue) {
      continue;
    }

    const value = Number(rawValue.replace(/,/g, ''));

    if (Number.isFinite(value)) {
      return value;
    }
  }

  return null;
}

async function getStoryStats(url: string) {
  try {
    const res = await fetch(url, {
      headers: {
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return {
        page_views_count: null,
        public_reactions_count: null,
        comments_count: null,
      };
    }

    const html = await res.text();

    return {
      page_views_count: extractMetric(html, [
        /"reads":\s*([0-9,]+)/i,
        /"readCount":\s*([0-9,]+)/i,
        /"viewCount":\s*([0-9,]+)/i,
      ]),
      public_reactions_count: extractMetric(html, [
        /"clapCount":\s*([0-9,]+)/i,
        /"totalClapCount":\s*([0-9,]+)/i,
        /"voterCount":\s*([0-9,]+)/i,
      ]),
      comments_count: extractMetric(html, [
        /"postResponsesCount":\s*([0-9,]+)/i,
        /"responsesCount":\s*([0-9,]+)/i,
      ]),
    };
  } catch {
    return {
      page_views_count: null,
      public_reactions_count: null,
      comments_count: null,
    };
  }
}

export async function getMediumArticles(): Promise<Article[]> {
  const res = await fetch(MEDIUM_FEED_URL, {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    console.error(`Failed to fetch Medium feed: ${res.status} ${res.statusText}`);
    return [];
  }

  const xml = await res.text();
  const items = xml.match(/<item>([\s\S]*?)<\/item>/g) ?? [];

  return Promise.all(
    items.map(async (item, index) => {
      const title = normalize(getTag(item, 'title'));
      const url = normalize(getTag(item, 'link'));
      const guid = normalize(getTag(item, 'guid')) || url || `medium-${index}`;
      const content =
        normalize(getTag(item, 'content:encoded')) || normalize(getTag(item, 'description'));
      const description = stripHtml(content).slice(0, 180) || 'Read this article on Medium.';
      const stats = url
        ? await getStoryStats(url)
        : {
            page_views_count: null,
            public_reactions_count: null,
            comments_count: null,
          };

      return {
        id: guid,
        title,
        description,
        cover_image: extractImage(content),
        url,
        ...stats,
      };
    }),
  );
}
