import type { Exercise } from './Exercise';

export interface WorkoutTemplate {
	title: string;
	exercises: Exercise[];
}
