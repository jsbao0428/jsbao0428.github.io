import type { PageLoad } from './$types';

const allModules = import.meta.glob('/src/content/articles/**/*.md', { eager: true });
const articleModules = Object.fromEntries(
	Object.entries(allModules).filter(([path]) => !path.includes('/examples/'))
);

function findBySlug(slug: string): any {
	for (const mod of Object.values(articleModules)) {
		if ((mod as any).metadata?.slug === slug) return mod;
	}
	return null;
}

export const load: PageLoad = async ({ params }) => {
	const post = findBySlug(params.slug);
	if (!post) throw new Error(`Article not found: ${params.slug}`);
	return {
		content: post.default,
		metadata: post.metadata
	};
};

export function entries() {
	return Object.values(articleModules).map((mod: any) => ({
		slug: mod.metadata.slug
	}));
}
