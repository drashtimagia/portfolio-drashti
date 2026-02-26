import type { Metadata } from 'next';

import Layout from '@/components/Layout';

import '@/styles/globals.css';
import '@/styles/themes.css';

export const metadata: Metadata = {
  title: {
    default: 'Drashti Darshit Magia',
    template: '%s',
  },
  description:
    'AI Engineer focused on distributed RAG, LLM reliability, ML infrastructure, and measurable production impact.',
  keywords: [
    'drashti darshit magia',
    'drashti',
    'magia',
    'ai engineer',
    'machine learning engineer',
    'san jose ai engineer',
    'drashti magia portfolio',
    'vscode-portfolio',
  ],
  openGraph: {
    title: 'Drashti Darshit Magia',
    description:
      'AI Engineer focused on distributed RAG, LLM reliability, ML infrastructure, and measurable production impact.',
    images: ['https://imgur.com/4zi5KkQ.png'],
    url: 'https://your-portfolio-url.com',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
