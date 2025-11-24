import type { MarkdownModule } from '$lib/../mdsvex';

export async function load({ url }) {
	const posts = import.meta.glob<MarkdownModule>('/src/content/blog/*.md', { eager: true });

	const processedPosts = Object.entries(posts).map(([path, post]) => {
		const filename = path.split('/').pop()?.replace('.md', '') || '';
		// Strip the 4-digit numerical prefix (e.g., "0000_apis-in-the-age-of-ai" -> "apis-in-the-age-of-ai")
		const slug = filename.replace(/^\d{4}_/, '');
		return {
			slug,
			metadata: post.metadata || {},
		};
	});

	// Sort by date, newest first
	processedPosts.sort((a, b) => {
		const dateA = new Date(a.metadata.date || 0).getTime();
		const dateB = new Date(b.metadata.date || 0).getTime();
		return dateB - dateA;
	});

	// Extract all unique tags with counts
	const tagCounts = new Map<string, number>();
	processedPosts.forEach((post) => {
		const tags = post.metadata.tags || [];
		tags.forEach((tag: string) => {
			tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
		});
	});

	// Get selected tag from URL
	const selectedTag = url.searchParams.get('tag');

	// Filter posts by tag if one is selected
	const filteredPosts = selectedTag
		? processedPosts.filter((post) => {
				const tags = post.metadata.tags || [];
				return tags.includes(selectedTag);
			})
		: processedPosts;

	return {
		posts: filteredPosts,
		tagCounts: Array.from(tagCounts.entries())
			.map(([tag, count]) => ({ tag, count }))
			.sort((a, b) => a.tag.localeCompare(b.tag)),
		selectedTag,
	};
}
