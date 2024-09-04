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
	schema: () => z.object({
		type: z.enum(['Article', 'Talk', 'Dissertation']),
		status: z.enum(['In prep', 'Submitted', 'In review', 'Accepted', 'In press', 'Published']),
		publishedDate: z.coerce.date(),
		title: z.string(),
		authorList: z.array(z.string()),
		authorString: z.string(),
		description: z.string(),
		publication: z.string().optional(),
		bib: z.object({
			volume: z.coerce.string().optional(),
			issue: z.coerce.string().optional(),
			pages: z.coerce.string().optional(),
		}).optional(),
		doi: z.string().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { posts, publications };
