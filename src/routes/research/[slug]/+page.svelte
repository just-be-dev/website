<script>
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.metadata.title} - Research - Just Be</title>
</svelte:head>

<data.content />
