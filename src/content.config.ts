import { glob } from 'astro/loaders';
import { defineCollection, z, type ImageFunction } from 'astro:content';

const sharedDetails = (image: ImageFunction) => ({
  title: z.string(),
  description: z.string(),
  company: z.string().optional(),
  techStack: z.array(z.string()),
  links: z.array(z.array(z.string())),
  thumbnail: image(),
  screenshot: image(),
  sortOrder: z.number(),
  draft: z.boolean().optional(),
});

const work = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      ...sharedDetails(image),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      ...sharedDetails(image),
    }),
});

//  Export a single `collections` object to register your collection(s)
//  This key should match your collection directory name in "src/content"
export const collections = { projects, work };
