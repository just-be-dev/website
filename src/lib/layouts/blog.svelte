<script module>
	export { default as a } from '~/lib/components/Link.svelte';
</script>

<script>
	import Link from '$lib/components/Link.svelte';

	let { title, date, tags = [], children } = $props();
</script>

<article class="px-4 py-8">
	<header class="mb-[1lh]">
		<h1 class="font-bold mb-0!">{title}</h1>
		{#if date}
			<time datetime={date} class="text-fg-2 inline-block"
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
	</header>

	<div class="max-w-none">
		{@render children?.()}
	</div>

	<footer class="mt-12 pt-8 border-t border-gray-700">
		<Link href="/blog">← Back to blog</Link>
	</footer>
</article>
