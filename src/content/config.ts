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
		authors: z.string(),
		type: z.string(),
		publication: z.string().optional(),
		description: z.string(),
		// Transform string to Date object
		published: z.coerce.date(),
		updated: z.coerce.date().optional(),
		isPublished: z.boolean().default(true),
		draft: z.boolean().default(true),
		doi: z.string().optional(),
		heroImage: image().optional(),
		heroImageAlt: z.string().optional(),
		heroImageCaption: z.string().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { posts, publications };
