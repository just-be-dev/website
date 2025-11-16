<script>
	import Link from '$lib/components/Link.svelte';

	let { title, date, tags = [], description } = $props();
</script>

<article class="px-4 py-8">
	<header class="mb-8 border-b border-gray-700 pb-4">
		<h1 class="font-bold mb-2">{title}</h1>
		{#if description}
			<p class="text-gray-400 mb-2">{description}</p>
		{/if}
		<div class="flex items-center gap-4 text-gray-500">
			{#if date}
				<time datetime={date}
					>{new Date(date).toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'long',
						day: 'numeric',
					})}</time
				>
			{/if}
			{#if tags.length > 0}
				<div class="flex gap-2">
					{#each tags as tag}
						<span variant-="accent" class="badge">{tag}</span>
					{/each}
				</div>
			{/if}
		</div>
	</header>

	<div class="prose prose-invert max-w-none">
		<slot />
	</div>

	<footer class="mt-12 pt-8 border-t border-gray-700">
		<Link href="/blog">← Back to blog</Link>
	</footer>
</article>
