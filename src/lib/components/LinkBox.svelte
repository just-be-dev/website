<script>
	let { href, title, description } = $props();
</script>

<a {href} class="block transition-colors group" box-="square" shear-="top">
	<div class="header">
		<span variant-="background0 flex align-center">
			<span class="bg-0 invert ml-[1ch] px-[1ch] group-hover:font-bold"
				>{title}
				<span class="inline-block transition-all group-hover:pl-1 group-hover:-mr-1">-></span></span
			>
		</span>
	</div>
	<p class="p-[1ch]">{description}</p>
</a>
