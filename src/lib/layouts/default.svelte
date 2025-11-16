<script>
	let { title } = $props();
</script>

<article class="px-4 py-8">
	{#if title}
		<header class="mb-8 border-b border-gray-700 pb-4">
			<h1 class="font-bold">{title}</h1>
		</header>
	{/if}

	<div class="prose prose-invert max-w-none">
		<slot />
	</div>
</article>
