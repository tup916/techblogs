// Every post can belong to a "blog series" (set `series: 'slug'` in its frontmatter).
// A series title is SERIES_PREFIX + the series name below. To change the repeated
// beginning of every title, just change SERIES_PREFIX (e.g. "Let's Talk About").
// To add a new series, add an entry below, then use its slug in your posts.

export const SERIES_PREFIX = 'Notes on';

export type SeriesType = 'project' | 'practice' | 'reading';

export interface Series {
	title: string;
	name: string;
	emoji: string;
	blurb: string;
	type: SeriesType;
}

export const TYPES: Record<SeriesType, { label: string; emoji: string; tint: string; border: string }> =
	{
		project: { label: 'Projects', emoji: '🛠️', tint: '#eaeeff', border: '#c5cdff' },
		practice: {
			label: 'Opinions on Engineering Practices',
			emoji: '💡',
			tint: '#fff3dc',
			border: '#f5d9a0',
		},
		reading: { label: 'Books & blogs I’m reading', emoji: '📚', tint: '#e5f6ec', border: '#b4e2c6' },
	};

export const TYPE_ORDER: SeriesType[] = ['project', 'practice', 'reading'];

function make(name: string, emoji: string, blurb: string, type: SeriesType): Series {
	return { name, emoji, blurb, type, title: `${SERIES_PREFIX} ${name}` };
}

export const SERIES: Record<string, Series> = {
	rag: make(
		'Building a RAG',
		'🤖',
		'Building a retrieval-augmented generation app from scratch, and everything I learn along the way.',
		'project',
	),
	'pr-reviews': make(
		'PR Review Practices',
		'🔍',
		'Stop Delaying PR Merges Over Things That Don’t Matter',
		'practice',
	),
	'reading-notes': make(
		'What I’m Reading',
		'📖',
		'Honest takes and critiques of the books and blog posts I’m reading.',
		'reading',
	),
};

// Books I'm reading right now. They show (without a link) at the top of the reading list.
// Once I've written the review, remove the entry here and add a post to the reading series.
export const CURRENTLY_READING: { title: string; author: string; technical: boolean }[] = [
	{
		title: 'Staff Engineer: Leadership Beyond the Management Track',
		author: 'Will Larson',
		technical: true,
	},
];
