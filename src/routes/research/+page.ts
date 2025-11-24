import type { MarkdownModule } from '$lib/../mdsvex';

export async function load() {
	const notes = import.meta.glob<MarkdownModule>('/src/content/research/*.md', {
		eager: true,
	});

	const processedNotes = Object.entries(notes).map(([path, note]) => {
		const filename = path.split('/').pop()?.replace('.md', '') || '';
		// Strip the 4-digit numerical prefix (e.g., "0000_parsing-techniques" -> "parsing-techniques")
		const slug = filename.replace(/^\d{4}_/, '');
		return {
			slug,
			metadata: note.metadata || {},
		};
	});

	// Sort by lastUpdated or date, newest first
	processedNotes.sort((a, b) => {
		const dateA = new Date(a.metadata.lastUpdated || a.metadata.date || 0).getTime();
		const dateB = new Date(b.metadata.lastUpdated || b.metadata.date || 0).getTime();
		return dateB - dateA;
	});

	return {
		notes: processedNotes,
	};
}
