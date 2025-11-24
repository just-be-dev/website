<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	type Props = HTMLAnchorAttributes & {
		children: Snippet;
	};

	let { children, ...props }: Props = $props();
</script>

<a {...props} class="text-accent font-bold focus-visible:outline-none">
	{@render children()}
</a>

<style>
	@reference "~/app.css";

	a:hover,
	a:focus {
		@apply px-0.5 -mx-0.5 bg-0 invert;
	}
</style>
