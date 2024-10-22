<script lang="ts">
	import '../styles/resetter.css';

	const { children } = $props();
</script>

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
		gap: 50px;
	}
</style>
