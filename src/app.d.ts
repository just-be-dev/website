// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

// Declare .md files as Svelte components (processed by mdsvex)
declare module '*.md' {
	import type { SvelteComponent } from 'svelte';
	export default class extends SvelteComponent {}
}

export {};
