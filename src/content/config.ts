import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({image}) => z.object({
		title: z.string(),
		subtitle: z.string().optional(),
		description: z.string(),
		// Transform string to Date object
		published: z.coerce.date(),
		updated: z.coerce.date().optional(),
		heroImage: image().optional(),
	}),
});

const publications = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({image}) => z.object({
		title: z.string(),
		subtitle: z.string().optional(),
		type: z.string(),
		description: z.string(),
		// Transform string to Date object
		published: z.coerce.date(),
		updated: z.coerce.date().optional(),
		heroImage: image().optional(),
	}),
});

export const collections = { posts: posts, publications: publications };
