import type { WorkoutTemplate } from '$lib/types/interfaces/WorkoutTemplate';

function createCurrentWorkoutTemplatesStore() {
	let currentWorkoutTemplate: WorkoutTemplate | null = $state(null);

	function setCurrentWorkoutTemplate(workoutTemplate: WorkoutTemplate) {
		currentWorkoutTemplate = workoutTemplate;
	}

	function isCurrentWorkoutTemplateSet() {
		return currentWorkoutTemplate !== null;
	}

	return {
		get currentWorkoutTemplate() {
			return currentWorkoutTemplate;
		},
		setCurrentWorkoutTemplate,
		isCurrentWorkoutTemplateSet
	};
}

export const currentWorkoutTemplatesStore = createCurrentWorkoutTemplatesStore();
