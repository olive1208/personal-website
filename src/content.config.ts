import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    // Lower numbers show first on the Projects page.
    order: z.number().default(100),
    // true = also show on the home page under "Selected projects".
    featured: z.boolean().default(false),
    tools: z.array(z.string()).default([]),
    github: z.string().url().optional(),
    live: z.string().url().optional(),
    // Optional short note shown under the title, for example "Class project".
    note: z.string().optional(),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    // Link to the original LinkedIn post, if there is one.
    linkedin: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, writing };
