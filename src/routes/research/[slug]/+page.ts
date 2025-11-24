import { error } from '@sveltejs/kit';
import type { MarkdownModule } from '$lib/../mdsvex';

export async function load({ params }) {
	try {
		// Get all research notes and find the one matching the slug
		const notes = import.meta.glob<MarkdownModule>('/src/content/research/*.md', { eager: true });

		const matchingNote = Object.entries(notes).find(([path]) => {
			const filename = path.split('/').pop()?.replace('.md', '') || '';
			const slug = filename.replace(/^\d{4}_/, '');
			return slug === params.slug;
		});

		if (!matchingNote) {
			throw error(404, `Research note not found: ${params.slug}`);
		}

		const note = matchingNote[1];

		return {
			content: note.default,
			metadata: note.metadata,
		};
	} catch (e) {
		if (e && typeof e === 'object' && 'status' in e && e.status === 404) throw e;
		throw error(404, `Research note not found: ${params.slug}`);
	}
}
