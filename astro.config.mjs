// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://nova4you.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/401') && !page.includes('/404') && !page.includes('/thank-you'),
    }),
  ],
  build: {
    format: 'directory',
  },
});
