import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const project = await import(`../../../content/projects/${params.slug}.md`);

		return {
			content: project.default,
			metadata: project.metadata,
		};
	} catch (e) {
		throw error(404, `Project not found: ${params.slug}`);
	}
}
