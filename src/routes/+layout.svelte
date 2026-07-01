<script>
	// Components
	import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';

	// Assets
	import favicon from '$lib/assets/favicon.svg';

	// CSS
	import '$lib/css/global.css';
	import '$lib/css/fonts.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="content">
	<Header></Header>
	<main>
		{@render children()}	
	</main>
	<Footer></Footer>
</div>
	

<style>
	.content {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
	}

	main {
		flex: 1;
	}
</style>