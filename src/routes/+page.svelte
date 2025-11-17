<script>
	import Content from '~/content/home.md';
	import LinkBox from '$lib/components/LinkBox.svelte';
</script>

<div class="px-4 pt-4 pb-8">
	<Content />

	<div class="mt-2">
		<h2 class="font-bold mb-4">Recent Activity</h2>
		<div class="grid gap-4">
			<LinkBox
				href="/blog"
				title="Blog Posts"
				description="Thoughts on software, tools, and technology"
			/>
			<LinkBox
				href="/projects"
				title="Projects"
				description="Things I'm building and experimenting with"
			/>
			<LinkBox
				href="/research"
				title="Research"
				description="Notes and explorations in computing"
			/>
		</div>
	</div>
</div>
