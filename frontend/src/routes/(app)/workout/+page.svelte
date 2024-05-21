<script lang="ts">
	import { workoutTemplatesStore } from '$lib/stores/workoutTemplatesStore';
	import { currentWorkoutTemplatesStore } from '$lib/stores/currentWorkoutTemplatesStore.svelte.ts';
	import WorkoutTemplateCard from '$lib/components/workout/WorkoutTemplateCard.svelte';
	import type { WorkoutTemplate } from '$lib/types/interfaces/WorkoutTemplate';
	import { goto } from '$app/navigation';

	function startWorkout(templateSelected: WorkoutTemplate) {
		currentWorkoutTemplatesStore.setCurrentWorkoutTemplate(templateSelected);
		console.log(currentWorkoutTemplatesStore.currentWorkoutTemplate);
		goto('/start_workout');
	}
</script>

<section>
	<div class="flex justify-between items-center">
		<h2 class="text-xs text-neutral-500 tracking-wider font-semibold uppercase">My Templates</h2>
		<div class="h-full">
			<button class="px-2 rounded-lg">+</button>
		</div>
	</div>
	<div class="mt-4">
		{#each $workoutTemplatesStore as item, idx (idx)}
			<button
				class="cursor-pointer bg-transparent text-black w-full text-left"
				on:click={() => {
					startWorkout(item);
				}}
			>
				<WorkoutTemplateCard title={item.title} exercises={item.exercises} />
			</button>
		{/each}
	</div>
</section>
