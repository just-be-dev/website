import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const note = await import(`../../../content/research/${params.slug}.md`);

		return {
			content: note.default,
			metadata: note.metadata,
		};
	} catch (e) {
		throw error(404, `Research note not found: ${params.slug}`);
	}
}
