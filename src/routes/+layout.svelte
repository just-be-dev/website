<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Name from '$lib/components/Name.svelte';
	import Nav from '$lib/components/Nav.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Just Be - Justin Bennett</title>
</svelte:head>

<div class="min-h-screen flex flex-col bg-gray-950 text-gray-100 pt-[1lh]">
	<Name />
	<Nav />

	<div class="max-w-4xl mx-auto w-full flex-1 flex flex-col">
		<main class="flex-1">
			{@render children()}
		</main>
	</div>
</div>
