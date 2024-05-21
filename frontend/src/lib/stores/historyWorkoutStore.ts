import type { HistoryWorkout } from '$lib/types/interfaces/HistoryWorkout';
import { writable } from 'svelte/store';

const historyWorkoutDummyData: HistoryWorkout[] = [];

function createHistoryWorkoutStore() {
	const { subscribe, set, update } = writable<HistoryWorkout[]>(historyWorkoutDummyData);

	function add(workout: HistoryWorkout) {
		update((workouts) => {
			return [workout, ...workouts];
		});
	}

	return {
		subscribe,
		set,
		add,
		update
	};
}

export const historyWorkoutStore = createHistoryWorkoutStore();
export const hoursMinutesSeconds = writable<string>('0h 0m 0s');
