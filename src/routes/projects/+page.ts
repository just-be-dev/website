export async function load() {
	const projects = import.meta.glob('/src/content/projects/*.md', { eager: true });

	const processedProjects = Object.entries(projects).map(([path, project]) => {
		const slug = path.split('/').pop()?.replace('.md', '') || '';
		return {
			slug,
			metadata: (project as any).metadata || {},
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
