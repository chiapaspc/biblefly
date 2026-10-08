import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getAllPosts } from '../lib/posts';

export async function GET(context: APIContext) {
  const posts = await getAllPosts();

  return rss({
    title: 'BibleFly',
    description:
      'Lecturas bíblicas, devocionales y reflexiones de fe para acompañar tu tiempo con la Palabra.',
    site: context.site ?? 'https://biblefly.com',
    trailingSlash: true,
    customData: '<language>es-ES</language>',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
      categories: post.data.tags,
    })),
  });
}