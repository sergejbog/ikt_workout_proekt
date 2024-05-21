<script>
	import Header from '$lib/components/layout/Header.svelte';
	import NavBar from '$lib/components/layout/NavBar.svelte';
</script>

<main class="pt-10 px-5 pb-20 relative">
	<Header />
	<slot />
</main>
<NavBar />
