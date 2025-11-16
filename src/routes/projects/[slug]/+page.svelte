<script>
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.metadata.title} - Projects - Just Be</title>
	{#if data.metadata.description}
		<meta name="description" content={data.metadata.description} />
	{/if}
</svelte:head>

<data.content />
