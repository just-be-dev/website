import type { MarkdownModule } from '$lib/../mdsvex';

export async function load() {
	const projects = import.meta.glob<MarkdownModule>('/src/content/projects/*.md', { eager: true });

	const processedProjects = Object.entries(projects).map(([path, project]) => {
		const filename = path.split('/').pop()?.replace('.md', '') || '';
		// Strip the 4-digit numerical prefix (e.g., "0000_devtools-fm" -> "devtools-fm")
		const slug = filename.replace(/^\d{4}_/, '');
		return {
			slug,
			metadata: project.metadata || {},
		};
	});

	// Sort by title alphabetically
	processedProjects.sort((a, b) => {
		const titleA = a.metadata.title || '';
		const titleB = b.metadata.title || '';
		return titleA.localeCompare(titleB);
	});

	return {
		projects: processedProjects,
	};
}
