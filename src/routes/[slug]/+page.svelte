<script>
	let { data } = $props();
</script>

<svelte:head>
	{#if data.metadata?.title}
		<title>{data.metadata.title} - Just Be</title>
	{/if}
	{#if data.metadata?.description}
		<meta name="description" content={data.metadata.description} />
	{/if}
</svelte:head>

<div class="px-4 pt-4 pb-8">
	<data.content />
</div>
