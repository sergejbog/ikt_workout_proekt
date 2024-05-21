<script>
	import HistoryTemplateCard from '$lib/components/history/HistoryTemplateCard.svelte';
	import { historyWorkoutStore } from '$lib/stores/historyWorkoutStore';
</script>

<section>
	<div class="flex justify-between items-center mb-1">
		<h2 class="text-xs text-neutral-500 font-semibold">May 2024</h2>
		<p class="text-xs text-neutral-500 font-semibold">{$historyWorkoutStore.length} workouts</p>
	</div>
	<div>
		{#each $historyWorkoutStore as item, idx (idx)}
			<HistoryTemplateCard
				title={item.title}
				exercises={item.exercises}
				date={item.date}
				time={item.time}
				prs={item.prs}
			/>
		{/each}
	</div>
</section>
