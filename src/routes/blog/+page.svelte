<script>
	let { data } = $props();
</script>

<div class="px-4 py-12">
	<header class="mb-12">
		<h1 class="font-bold mb-4">Blog</h1>
		<p class="text-gray-400">Thoughts on software, tools, and technology</p>
	</header>

	{#if data.posts.length > 0}
		<div class="space-y-6">
			{#each data.posts as post}
				<article class="border border-gray-700 p-6 hover:border-blue-400 transition-colors">
					<a href="/blog/{post.slug}" class="block">
						<h2 class="font-bold mb-2 text-blue-400 hover:underline">
							{post.metadata.title}
						</h2>

						{#if post.metadata.description}
							<p class="text-gray-400 mb-4">{post.metadata.description}</p>
						{/if}

						<div class="flex items-center gap-4 text-gray-500">
							{#if post.metadata.date}
								<time datetime={post.metadata.date}>
									{new Date(post.metadata.date).toLocaleDateString('en-US', {
										year: 'numeric',
										month: 'long',
										day: 'numeric',
									})}
								</time>
							{/if}

							{#if post.metadata.tags && post.metadata.tags.length > 0}
								<div class="flex gap-2">
									{#each post.metadata.tags as tag}
										<span variant-="accent" class="badge">{tag}</span>
									{/each}
								</div>
							{/if}
						</div>
					</a>
				</article>
			{/each}
		</div>
	{:else}
		<div class="text-center py-12 text-gray-500">
			<p>No blog posts yet. Check back soon!</p>
		</div>
	{/if}
</div>
