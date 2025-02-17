import { z, defineCollection, reference } from "astro:content";

const tags = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
  }),
});

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.date(),
    description: z.string().optional(),
    tags: z.array(reference("tags")).optional(),
    blogExclude: z.boolean().optional(),
    emoji: z.string().optional(),
  }),
});

const critterBadges = defineCollection({
  type: "data",
  schema: z.object({
    url: z.string(),
    image: z.string(),
    alt: z.string(),
  }),
});

const standardBadges = defineCollection({
  type: "data",
  schema: z.object({
    url: z.string().optional(),
    image: z.string(),
    alt: z.string(),
  }),
});

export const collections = {
  tags,
  posts,
  critterBadges,
  standardBadges,
};
