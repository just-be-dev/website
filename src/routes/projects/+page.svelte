<script>
	let { data } = $props();
</script>

<div class="px-4 py-12">
	<header class="mb-12">
		<h1 class="font-bold mb-4">Projects</h1>
		<p class="text-gray-400">Things I'm building and experimenting with</p>
	</header>

	{#if data.projects.length > 0}
		<div class="grid gap-6 md:grid-cols-2">
			{#each data.projects as project}
				<article class="border border-gray-700 p-6 hover:border-blue-400 transition-colors">
					<a href="/projects/{project.slug}" class="block">
						<div class="flex items-start justify-between mb-2">
							<h2 class="font-bold text-blue-400 hover:underline">
								{project.metadata.title}
							</h2>
							{#if project.metadata.status}
								<span
									variant-={project.metadata.status === 'active' ? 'success' : 'default'}
									class="badge"
								>
									{project.metadata.status}
								</span>
							{/if}
						</div>

						{#if project.metadata.description}
							<p class="text-gray-400 mb-4">{project.metadata.description}</p>
						{/if}

						{#if project.metadata.tags && project.metadata.tags.length > 0}
							<div class="flex flex-wrap gap-2">
								{#each project.metadata.tags as tag}
									<span variant-="accent" class="badge">{tag}</span>
								{/each}
							</div>
						{/if}
					</a>
				</article>
			{/each}
		</div>
	{:else}
		<div class="text-center py-12 text-gray-500">
			<p>No projects yet. Check back soon!</p>
		</div>
	{/if}
</div>
