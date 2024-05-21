import type { Exercise } from './Exercise';

export interface HistoryWorkout {
	title: string;
	exercises: Exercise[];
	date: Date;
	time: string;
	prs: number;
}
