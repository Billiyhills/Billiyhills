<script lang="ts">
	import '../styles/globals.css';
	import '../styles/resetter.css';

	const { children } = $props();
</script>

<svelte:head>
	<title>🌄 Billiyhills</title>
</svelte:head>

<main>
	{@render children()}
</main>

<style>
	main {
		min-height: 100vh;
		background: black;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2.5rem;
		font-family: 'Patrick Hand', cursive;
	}
</style>
