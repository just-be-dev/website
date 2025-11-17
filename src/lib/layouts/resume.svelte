<script module>
	export { default as a } from '~/lib/components/Link.svelte';
</script>

<script lang="ts">
	let { title, children } = $props();
</script>

<article class="px-4 py-8">
	{#if title}
		<header class="mb-8 border-b border-gray-700 pb-4">
			<h1 class="font-bold">{title}</h1>
		</header>
	{/if}

	{@render children?.()}
</article>

<style>
	:global(h1, p, .date-component) {
		margin-bottom: 1lh;
	}
</style>
