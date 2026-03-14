import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const post = await import(`../../../content/articles/${params.slug}.md`);
	return {
		content: post.default,
		metadata: post.metadata
	};
};

export function entries() {
	const modules = import.meta.glob('/src/content/articles/*.md');
	return Object.keys(modules).map((path) => ({
		slug: path.split('/').pop()!.replace('.md', '')
	}));
}
