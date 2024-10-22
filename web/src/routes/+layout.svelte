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
		padding: 1rem;
		min-height: 100vh;
		background: black;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2.5rem;
		font-family: 'Patrick Hand', cursive;

		@media (max-width: 768px) {
			align-items: start;
			flex-direction: column;
		}
	}
</style>
