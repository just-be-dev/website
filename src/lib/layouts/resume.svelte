<script module>
	export { default as a } from '~/lib/components/Link.svelte';
</script>

<script lang="ts">
	let { children } = $props();
</script>

<article data-resume class="px-4 py-8">
	{@render children?.()}
</article>

<style>
	article[data-resume] :global(h1),
	article[data-resume] :global(.date-component),
	article[data-resume] :global(p) {
		margin-bottom: 1lh;
	}
</style>
