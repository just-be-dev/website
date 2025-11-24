// Type declarations for mdsvex markdown files
import type { SvelteComponent } from 'svelte';

export interface MarkdownMetadata {
	title?: string;
	date?: string;
	lastUpdated?: string;
	description?: string;
	tags?: string[];
	topics?: string[];
	status?: string;
	url?: string;
	layout?: string;
	redirects?: string[];
	[key: string]: unknown;
}

export interface MarkdownModule {
	default: typeof SvelteComponent;
	metadata: MarkdownMetadata;
}

declare module '~/content/*.md' {
	const module: MarkdownModule;
	export default module.default;
	export const metadata: MarkdownMetadata;
}

declare module '/src/content/blog/*.md' {
	const module: MarkdownModule;
	export default module.default;
	export const metadata: MarkdownMetadata;
}

declare module '/src/content/projects/*.md' {
	const module: MarkdownModule;
	export default module.default;
	export const metadata: MarkdownMetadata;
}

declare module '/src/content/research/*.md' {
	const module: MarkdownModule;
	export default module.default;
	export const metadata: MarkdownMetadata;
}
