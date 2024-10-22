<script lang="ts">
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<h1>Billiyhills</h1>

{#if data}
	{#each data.md_files as md_file}
		<ul>
			<li>{md_file.file_name}</li>
			{@html md_file.content}
		</ul>
	{/each}
{/if}
