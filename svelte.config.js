import adapter from '@sveltejs/adapter-static';
import { mdsvex, escapeSvelte } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import { createHighlighter } from 'shiki';

const highlighter = await createHighlighter({
	themes: ['github-dark', 'github-light'],
	langs: [
		'javascript',
		'typescript',
		'python',
		'java',
		'sql',
		'bash',
		'shell',
		'yaml',
		'json',
		'html',
		'css',
		'svelte',
		'markdown',
		'dockerfile',
		'xml',
		'go',
		'rust',
		'c',
		'cpp'
	]
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		mdsvex({
			extensions: ['.md'],
			rehypePlugins: [rehypeSlug],
			highlight: {
				highlighter: async (code, lang) => {
					const html = escapeSvelte(
						highlighter.codeToHtml(code, {
							lang: lang || 'text',
							themes: { light: 'github-light', dark: 'github-dark' }
						})
					);
					return `{@html \`${html}\`}`;
				}
			}
		})
	],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			strict: false
		})
	}
};

export default config;
