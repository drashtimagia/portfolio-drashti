import { NextResponse } from 'next/server';

import { getMediumArticles } from '@/lib/medium';

export const dynamic = 'force-dynamic';
export const revalidate = 60;

export async function GET() {
  const articles = await getMediumArticles();

  return NextResponse.json({ articles });
}
