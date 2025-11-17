<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Name from '$lib/components/Name.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { page } from '$app/stores';

	let { children } = $props();

	let showName = $derived($page.url.pathname !== '/');
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Just Be - Justin Bennett</title>
</svelte:head>

<div class="min-h-screen flex flex-col bg-gray-950 text-gray-100 pt-[1lh]">
	{#if showName}
		<Name />
	{/if}

	<Nav />

	<div class="max-w-4xl mx-auto w-full flex-1 flex flex-col">
		<main class="flex-1">
			{@render children()}
		</main>
	</div>
</div>
