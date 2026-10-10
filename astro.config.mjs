// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://biblefly.app',
  integrations: [sitemap(), pagefind({ indexConfig: { forceLanguage: 'es' } })],
  vite: {
    plugins: [tailwindcss()],
  },
});