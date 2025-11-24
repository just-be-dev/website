<script lang="ts">
	import { page } from '$app/state';
	import { Tabs, Tab } from './tabs';
	import Email from './icons/Email.svelte';
	import GitHub from './icons/GitHub.svelte';
	import Bluesky from './icons/Bluesky.svelte';
	import Twitter from './icons/Twitter.svelte';
	import LinkedIn from './icons/LinkedIn.svelte';
</script>

<a
	href="#main-content"
	class="skip-link absolute left-[-9999px] focus:left-0 top-[1lh] bg-1 px-4 py-2 z-50"
>
	Skip to main content
</a>

<nav
	class="fixed top-0 left-0 right-0 flex items-center bg-1 z-10 h-lh justify-between lg:justify-start"
>
	<Tabs activeHref={page.url.pathname}>
		<Tab href="/" key="h" label="home" />
		<Tab href="/blog" key="b" label="blog" />
		<Tab href="/projects" key="p" label="projects" />
		<Tab href="/research" key="r" label="research" />
		<Tab href="/work" key="w" label="work" />
	</Tabs>

	<div class="flex items-center h-lh lg:fixed lg:left-1/2 lg:-translate-x-1/2 lg:z-20">
		<span class="text-fg-0 font-normal">
			<span class="font-bold">just</span><span class="font-normal text-fg-1 max-md:hidden">in</span>
			<span class="font-bold">be</span><span class="font-normal text-fg-1 max-md:hidden">nnett</span
			>
		</span>
	</div>

	<div class="flex *:h-lh lg:ml-auto">
		<a href="mailto:contact@just-be.dev" class="icon-link" title="Email" aria-label="Email">
			<Email />
		</a>
		<a
			href="https://github.com/just-be-dev"
			target="_blank"
			rel="noopener noreferrer"
			class="icon-link"
			title="GitHub"
			aria-label="GitHub"
		>
			<GitHub />
		</a>
		<a
			href="https://bsky.app/profile/just-be.dev"
			target="_blank"
			rel="noopener noreferrer"
			class="icon-link"
			title="Bluesky"
			aria-label="Bluesky"
		>
			<Bluesky />
		</a>
		<a
			href="https://twitter.com/just_be_dev"
			target="_blank"
			rel="noopener noreferrer"
			class="icon-link"
			title="Twitter"
			aria-label="Twitter"
		>
			<Twitter />
		</a>
		<a
			href="https://linkedin.com/in/jtbnnt"
			target="_blank"
			rel="noopener noreferrer"
			class="icon-link"
			title="LinkedIn"
			aria-label="LinkedIn"
		>
			<LinkedIn />
		</a>
	</div>
</nav>

<style>
	@reference "~/app.css";

	.icon-link {
		@apply px-2 flex items-center bg-1;
		transition: filter 0.2s;
	}

	.icon-link:hover,
	.icon-link:focus-visible {
		filter: invert(1);
		outline: none;
	}

	.skip-link {
		transition: filter 0.2s;
	}

	.skip-link:focus {
		filter: invert(1);
		outline: none;
	}
</style>
