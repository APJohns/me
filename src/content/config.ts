// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
// 2. Define your collection(s)
const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      company: z.string().optional(),
      techStack: z.array(z.string()),
      links: z.array(z.array(z.string())),
      thumbnail: image(),
      screenshot: image(),
      sortOrder: z.number(),
      draft: z.boolean().optional(),
    }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  projects: projectsCollection,
};
