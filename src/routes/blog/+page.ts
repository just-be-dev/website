export async function load() {
	const posts = import.meta.glob('/src/content/blog/*.md', { eager: true });

	const processedPosts = Object.entries(posts).map(([path, post]) => {
		const slug = path.split('/').pop()?.replace('.md', '') || '';
		return {
			slug,
			metadata: (post as any).metadata || {},
		};
	});

	// Sort by date, newest first
	processedPosts.sort((a, b) => {
		const dateA = new Date(a.metadata.date || 0).getTime();
		const dateB = new Date(b.metadata.date || 0).getTime();
		return dateB - dateA;
	});

	return {
		posts: processedPosts,
	};
}
