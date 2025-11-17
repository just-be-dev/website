import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: {
				blog: join(__dirname, './src/lib/layouts/blog.svelte'),
				project: join(__dirname, './src/lib/layouts/project.svelte'),
				research: join(__dirname, './src/lib/layouts/research.svelte'),
				resume: join(__dirname, './src/lib/layouts/resume.svelte'),
				_: join(__dirname, './src/lib/layouts/default.svelte'),
			},
			smartypants: {
				dashes: 'oldschool',
			},
		}),
	],
	kit: {
		adapter: adapter(),
		alias: {
			'~': 'src',
		},
	},
	extensions: ['.svelte', '.svx', '.md'],
};

export default config;
