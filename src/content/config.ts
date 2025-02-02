import { z, defineCollection, reference } from "astro:content";

const tags = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
  }),
});

const posts = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      image: image().optional(),
      date: z.date(),
      description: z.string().optional(),
      tags: z.array(reference("tags")).optional(),
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

const aboutBlurbs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    emoji: z.string().optional(),
  }),
});

export const collections = {
  tags,
  posts,
  critterBadges,
  standardBadges,
  aboutBlurbs,
};
