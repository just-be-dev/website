<script>
	import Link from '$lib/components/Link.svelte';

	let { title, description, tags = [], url, repo, status, children } = $props();
</script>

<article class="px-4 py-8">
	<header class="mb-8 border-b border-gray-700 pb-4">
		<h1 class="font-bold mb-2">{title}</h1>
		{#if description}
			<p class="text-gray-400 mb-4">{description}</p>
		{/if}

		<div class="flex flex-wrap items-center gap-4">
			{#if status}
				<span variant-={status === 'active' ? 'success' : 'default'} class="badge">
					{status}
				</span>
			{/if}
			{#if tags.length > 0}
				<div class="flex gap-2">
					{#each tags as tag}
						<span variant-="accent" class="badge">{tag}</span>
					{/each}
				</div>
			{/if}
		</div>

		{#if url || repo}
			<div class="flex gap-4 mt-4">
				{#if url}
					<a href={url} target="_blank" rel="noopener noreferrer" class="button" variant-="primary">
						Visit Project →
					</a>
				{/if}
				{#if repo}
					<a
						href={repo}
						target="_blank"
						rel="noopener noreferrer"
						class="button"
						variant-="secondary"
					>
						View Source
					</a>
				{/if}
			</div>
		{/if}
	</header>

	<div class="prose prose-invert max-w-none">
		{@render children?.()}
	</div>

	<footer class="mt-12 pt-8 border-t border-gray-700">
		<Link href="/projects">← Back to projects</Link>
	</footer>
</article>
