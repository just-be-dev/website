import { error } from '@sveltejs/kit';

export async function load({ params }) {
	// Exclude home.md from being accessible via this route
	if (params.slug === 'home') {
		throw error(404, 'Page not found');
	}

	try {
		const content = await import(`../../content/${params.slug}.md`);

		return {
			content: content.default,
			metadata: content.metadata,
		};
	} catch (e) {
		throw error(404, `Page not found: ${params.slug}`);
	}
}
