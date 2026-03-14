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
	const articleModules = import.meta.glob('/src/content/articles/*.md', { eager: true });

	const articles: ArticleMeta[] = Object.entries(articleModules).map(
		([path, module]: [string, any]) => ({
			slug: path.split('/').pop()?.replace('.md', '') ?? '',
			...module.metadata
		})
	);

	articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return { articles };
};
