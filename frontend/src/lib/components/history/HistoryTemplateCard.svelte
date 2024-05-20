<script>
	import Icon from '$lib/components/common/Icon.svelte';

	export let title;
	export let exercises;
	export let date;
	export let time;
	export let prs;
</script>

<div class="mb-4 border-2 border-neutral-300 shadow-xl py-2 px-3 rounded-lg">
	<h2 class="text-lg font-semibold">{title}</h2>
	<p class="text-neutral-500 text-xs">{date.toLocaleDateString()}</p>
	<div class="flex my-2 items-center">
		<p class="flex items-center mr-10"><Icon name="clock" class="mr-2" /> {time}</p>
		<p class="flex items-center"><Icon name="trophy" class="mr-2" /> {prs}</p>
	</div>
	<h2 class="font-semibold">Exercise</h2>
	<ul>
		{#each exercises as exercise}
			<li>{exercise}</li>
		{/each}
	</ul>
</div>
