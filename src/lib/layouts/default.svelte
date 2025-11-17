<script module>
	export { default as a } from '~/lib/components/Link.svelte';
</script>

<script lang="ts">
	let { title, children } = $props();
</script>

<article class="py-8">
	{#if title}
		<header class="mb-8 border-b border-gray-700 pb-4">
			<h1 class="font-bold">{title}</h1>
		</header>
	{/if}

	<div class="flex flex-col max-w-none">
		{@render children?.()}
	</div>
</article>
