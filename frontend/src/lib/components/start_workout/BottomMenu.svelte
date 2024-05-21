<script lang="ts">
	import type { HistoryWorkout } from '$lib/types/interfaces/HistoryWorkout';
	import Icon from '$lib/components/common/Icon.svelte';
	import { page } from '$app/stores';
	import { historyWorkoutStore, hoursMinutesSeconds } from '$lib/stores/historyWorkoutStore';
	import { currentWorkoutTemplatesStore } from '$lib/stores/currentWorkoutTemplatesStore.svelte';
	import { goto } from '$app/navigation';

	let path;

	$: path = $page.url.pathname;

	function finishWorkout() {
		let newHistoryWorkout: HistoryWorkout = {
			title: currentWorkoutTemplatesStore.currentWorkoutTemplate!.title,
			exercises: currentWorkoutTemplatesStore.currentWorkoutTemplate!.exercises,
			date: new Date(),
			time: $hoursMinutesSeconds,
			prs: 0
		};
		historyWorkoutStore.add(newHistoryWorkout);
		goto('/finish_workout');
	}
</script>

<nav
	class="fixed bottom-0 h-20 flex justify-center items-center bg-white border-t border-gray-400 w-full text-white"
>
	<button
		class="flex px-4 py-2 mr-4 text-center flex-col items-center justify-center text-white font-bold rounded-lg bg-primary"
		on:click={finishWorkout}
	>
		Finish Workout
	</button>
	<a
		class="flex px-4 py-2 text-center flex-col items-center justify-center text-white font-bold rounded-lg bg-highlight-darker"
		href="/workout"
	>
		Discard
	</a>
</nav>
