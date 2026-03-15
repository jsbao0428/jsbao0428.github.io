import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const articleModules = import.meta.glob('/src/content/articles/**/*.md', { eager: true });

	const articles = Object.entries(articleModules)
		.filter(([path]) => !path.includes('/examples/'))
		.map(([, module]: [string, any]) => ({
			...module.metadata
		}))
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
		.slice(0, 3);

	return { articles };
};
