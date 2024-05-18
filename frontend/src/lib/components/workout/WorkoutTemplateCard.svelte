<script>
	export let title;
	export let exercises;
</script>

<div class="mb-4 border-2 border-neutral-300 shadow-xl py-2 px-3 rounded-lg">
	<h2 class="text-lg font-semibold mb-1">{title}</h2>
	<ul>
		{#each exercises as exercise}
			<li>{exercise}</li>
		{/each}
	</ul>
</div>
