<script>
	import { page } from '$app/stores';
	let path;

	$: path = $page.url.pathname;
</script>

<h1 class="text-4xl font-semibold capitalize mb-4">{path.split('/').join('')}</h1>
