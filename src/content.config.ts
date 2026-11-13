import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			// Which series this post belongs to (a key in src/data/series.ts)
			series: z.string().optional(),
			// Position within the series (Part 1, Part 2, ...)
			part: z.number().optional(),
			// Book / blog review fields (used by posts in the reading series)
			author: z.string().optional(),
			rating: z.number().min(0).max(5).optional(),
			technical: z.boolean().optional(),
			// Optional emoji override for a single review (default: 💻 technical, 📖 otherwise)
			emoji: z.string().optional(),
		}),
});

export const collections = { blog };
