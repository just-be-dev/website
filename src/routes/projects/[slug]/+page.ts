import { error } from '@sveltejs/kit';
import type { MarkdownModule } from '$lib/../mdsvex';

export async function load({ params }) {
	try {
		// Get all projects and find the one matching the slug
		const projects = import.meta.glob<MarkdownModule>('/src/content/projects/*.md', { eager: true });

		const matchingProject = Object.entries(projects).find(([path]) => {
			const filename = path.split('/').pop()?.replace('.md', '') || '';
			const slug = filename.replace(/^\d{4}_/, '');
			return slug === params.slug;
		});

		if (!matchingProject) {
			throw error(404, `Project not found: ${params.slug}`);
		}

		const project = matchingProject[1];

		return {
			content: project.default,
			metadata: project.metadata,
		};
	} catch (e) {
		if (e && typeof e === 'object' && 'status' in e && e.status === 404) throw e;
		throw error(404, `Project not found: ${params.slug}`);
	}
}
