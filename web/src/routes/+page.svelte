<script lang="ts">
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();

	let selected_file = $state(data.md_files[0].file_name);
</script>

<aside>
	<h1>🌄 Billiyhills</h1>
	{#if data}
		<div class="md_files">
			{#each data.md_files as md_file}
				<button
					onclick={() => (selected_file = md_file.file_name)}
					class:active={selected_file === md_file.file_name}
				>
					{md_file.file_name}
				</button>
			{/each}
		</div>
	{/if}
</aside>

<article>
	{@html data.md_files.find((file) => file.file_name === selected_file)?.content}
</article>

<style>
	.md_files {
		display: flex;
		flex-direction: column;

		button {
			background: transparent;
			outline: none;
			border: none;
			color: inherit;
			cursor: pointer;
			text-align: left;
			opacity: 75%;

			&.active {
				opacity: 100%;
				font-weight: bold;
			}
		}
	}
</style>
