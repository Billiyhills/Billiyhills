<script lang="ts">
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();

	let selected_file = $state(data.md_files[0].file_name);
</script>

<aside>
	<h1>Billiyhills</h1>
	{#if data}
		{#each data.md_files as md_file}
			<ul>
				<li>{md_file.file_name}</li>
			</ul>
		{/each}
	{/if}
</aside>

<article>
	{@html data.md_files.find((file) => file.file_name === selected_file)?.content}
</article>
