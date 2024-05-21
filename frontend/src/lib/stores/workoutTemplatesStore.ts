import type { WorkoutTemplate } from '$lib/types/interfaces/WorkoutTemplate';
import { writable } from 'svelte/store';

const workoutTemplatesDummyData: WorkoutTemplate[] = [
	{
		title: 'Day 1 - Lower',
		exercises: [
			{
				name: 'Deadlift (Barbell)',
				sets: 5
			},
			{
				name: 'Squat (Barbell)',
				sets: 5
			},
			{
				name: 'Leg Press',
				sets: 5
			},
			{
				name: 'Leg Curl',
				sets: 5
			},
			{
				name: 'Calf Raise',
				sets: 5
			}
		]
	},
	{
		title: 'Day 2 - Upper',
		exercises: [
			{
				name: 'Bench Press (Barbell)',
				sets: 5
			},
			{
				name: 'Shoulder Press (Barbell)',
				sets: 5
			},
			{
				name: 'Pull Up',
				sets: 5
			},
			{
				name: 'Bent Over Row',
				sets: 5
			},
			{
				name: 'Tricep Extension',
				sets: 5
			}
		]
	},
	{
		title: 'Day 3 - Lower',
		exercises: [
			{
				name: 'Deadlift (Barbell)',
				sets: 2
			},
			{
				name: 'Squat (Barbell)',
				sets: 3
			},
			{
				name: 'Leg Press',
				sets: 3
			}
		]
	},
	{
		title: 'Day 4 - Upper',
		exercises: [
			{
				name: 'Bench Press (Barbell)',
				sets: 5
			},
			{
				name: 'Shoulder Press (Barbell)',
				sets: 5
			},
			{
				name: 'Pull Up',
				sets: 5
			},
			{
				name: 'Bent Over Row',
				sets: 5
			},
			{
				name: 'Tricep Extension',
				sets: 5
			}
		]
	}
];

function createWorkoutTemplateStore() {
	const { subscribe, set, update } = writable<WorkoutTemplate[]>(workoutTemplatesDummyData);

	return {
		subscribe,
		set,
		update
	};
}

export const workoutTemplatesStore = createWorkoutTemplateStore();
