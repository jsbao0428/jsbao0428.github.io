import type { PageLoad } from './$types';

interface ArticleMeta {
	title: string;
	slug: string;
	date: string;
	author: string;
	category: string;
	tags: string[];
	excerpt: string;
	coverImage: string;
	readTime: string;
}

export const load: PageLoad = async () => {
	const articleModules = import.meta.glob('/src/content/articles/**/*.md', { eager: true });

	const articles: ArticleMeta[] = Object.entries(articleModules)
		.filter(([path]) => !path.includes('/examples/'))
		.filter(([, module]: [string, any]) => (module as any).metadata?.draft !== true)
		.map(([, module]: [string, any]) => ({
			...module.metadata
		}));

	articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return { articles };
};
