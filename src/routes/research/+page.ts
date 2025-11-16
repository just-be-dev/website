export async function load() {
	const notes = import.meta.glob('/src/content/research/*.md', { eager: true });

	const processedNotes = Object.entries(notes).map(([path, note]) => {
		const slug = path.split('/').pop()?.replace('.md', '') || '';
		return {
			slug,
			metadata: (note as any).metadata || {},
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
