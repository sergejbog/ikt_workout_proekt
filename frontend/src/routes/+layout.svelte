<script>
	import Header from '$lib/components/layout/Header.svelte';
	import NavBar from '$lib/components/layout/NavBar.svelte';
	import '../app.css';
</script>

<main class="pt-10 px-5 pb-20">
	<Header />
	<slot />
</main>

<NavBar />
