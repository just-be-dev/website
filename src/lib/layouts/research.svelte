<script>
	import Link from '$lib/components/Link.svelte';

	let { title, date, topics = [], status = 'in-progress', lastUpdated } = $props();
</script>

<article class="px-4 py-8">
	<header class="mb-8 border-b border-gray-700 pb-4">
		<h1 class="font-bold mb-2">{title}</h1>

		<div class="flex items-center gap-4 text-gray-500 mb-2">
			{#if date}
				<time datetime={date}
					>Created: {new Date(date).toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'long',
						day: 'numeric',
					})}</time
				>
			{/if}
			{#if lastUpdated}
				<time datetime={lastUpdated}
					>Updated: {new Date(lastUpdated).toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'long',
						day: 'numeric',
					})}</time
				>
			{/if}
		</div>

		<div class="flex flex-wrap items-center gap-2">
			<span variant-={status === 'published' ? 'success' : 'default'} class="badge">
				{status}
			</span>
			{#if topics.length > 0}
				{#each topics as topic}
					<span variant-="accent" class="badge">{topic}</span>
				{/each}
			{/if}
		</div>
	</header>

	<div class="prose prose-invert max-w-none">
		<slot />
	</div>

	<footer class="mt-12 pt-8 border-t border-gray-700">
		<Link href="/research">← Back to research</Link>
	</footer>
</article>
