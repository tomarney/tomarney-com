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
		draft: z.boolean().default(true),
		heroImage: image().optional(),
		heroImageAlt: z.string().optional(),
		heroImageCaption: z.string().optional(),
		previousPost: z.string().optional(),
		nextPost: z.string().optional(),
		tags: z.array(z.string()).optional(),
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
		draft: z.boolean().default(true),
		heroImage: image().optional(),
		heroImageAlt: z.string().optional(),
		heroImageCaption: z.string().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { posts, publications };
