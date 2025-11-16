<script>
	import Link from '$lib/components/Link.svelte';
</script>

<div class="px-4 py-12">
	<p class="mb-6">
		I'm a Brooklyn based <span class="text-blue-400">software engineer</span>,
		<span class="text-blue-400">independent researcher</span>, and
		<span class="text-blue-400">podcaster</span>.
	</p>

	<p class="mb-6">
		I co-host <Link href="https://devtools.fm" target="_blank" rel="noopener noreferrer"
			>DevTools FM</Link
		>, a podcast exploring developer tools and the people who build them. I also organize <Link
			href="https://sideprojectsaturdays.com"
			target="_blank"
			rel="noopener noreferrer">Side Project Saturdays</Link
		>, a weekly meetup for makers and builders to work on their projects together.
	</p>

	<p class="mb-6">
		Recently, I spent time at the <Link
			href="https://www.recurse.com"
			target="_blank"
			rel="noopener noreferrer">Recurse Center</Link
		>, diving deep into programming languages, compilers, and exploring the fundamentals of
		computing.
	</p>

	<p class="mb-6">
		I believe technology should foster connection and wellbeing. My work focuses on building tools
		and experiences that bring people together and help them do their best work.
	</p>

	<div class="mt-12 pt-8 border-t border-gray-700">
		<h2 class="font-bold mb-4">Recent Activity</h2>
		<div class="grid gap-4">
			<a
				href="/blog"
				class="block p-4 border border-gray-700 hover:border-blue-400 transition-colors"
			>
				<h3 class="font-bold text-blue-400 mb-2">Blog Posts →</h3>
				<p class="text-gray-400">Thoughts on software, tools, and technology</p>
			</a>
			<a
				href="/projects"
				class="block p-4 border border-gray-700 hover:border-blue-400 transition-colors"
			>
				<h3 class="font-bold text-blue-400 mb-2">Projects →</h3>
				<p class="text-gray-400">Things I'm building and experimenting with</p>
			</a>
			<a
				href="/research"
				class="block p-4 border border-gray-700 hover:border-blue-400 transition-colors"
			>
				<h3 class="font-bold text-blue-400 mb-2">Research →</h3>
				<p class="text-gray-400">Notes and explorations in computing</p>
			</a>
		</div>
	</div>
</div>
