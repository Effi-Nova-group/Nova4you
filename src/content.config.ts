import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    headline: z.string(),
    dek: z.string(),
    description: z.string(),
    category: z.string(),
    categorySlug: z.string(),
    keywords: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    imageAlt: z.string(),
    readTime: z.string(),
    publishDate: z.date(),
    related: z.array(z.string()).length(2),
  }),
});

export const collections = { blog };
