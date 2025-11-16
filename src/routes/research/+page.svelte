<script>
	let { data } = $props();
</script>

<div class="px-4 py-12">
	<header class="mb-12">
		<h1 class="font-bold mb-4">Research</h1>
		<p class="text-gray-400">Notes and explorations in computing</p>
	</header>

	{#if data.notes.length > 0}
		<div class="space-y-4">
			{#each data.notes as note}
				<article class="border border-gray-700 p-6 hover:border-blue-400 transition-colors">
					<a href="/research/{note.slug}" class="block">
						<div class="flex items-start justify-between mb-2">
							<h2 class="font-bold text-blue-400 hover:underline">
								{note.metadata.title}
							</h2>
							{#if note.metadata.status}
								<span
									variant-={note.metadata.status === 'published' ? 'success' : 'default'}
									class="badge"
								>
									{note.metadata.status}
								</span>
							{/if}
						</div>

						<div class="flex items-center gap-4 text-gray-500 mb-3">
							{#if note.metadata.lastUpdated}
								<time datetime={note.metadata.lastUpdated}>
									Updated: {new Date(note.metadata.lastUpdated).toLocaleDateString('en-US', {
										year: 'numeric',
										month: 'short',
										day: 'numeric',
									})}
								</time>
							{:else if note.metadata.date}
								<time datetime={note.metadata.date}>
									{new Date(note.metadata.date).toLocaleDateString('en-US', {
										year: 'numeric',
										month: 'short',
										day: 'numeric',
									})}
								</time>
							{/if}
						</div>

						{#if note.metadata.topics && note.metadata.topics.length > 0}
							<div class="flex flex-wrap gap-2">
								{#each note.metadata.topics as topic}
									<span variant-="accent" class="badge">{topic}</span>
								{/each}
							</div>
						{/if}
					</a>
				</article>
			{/each}
		</div>
	{:else}
		<div class="text-center py-12 text-gray-500">
			<p>No research notes yet. Check back soon!</p>
		</div>
	{/if}
</div>
