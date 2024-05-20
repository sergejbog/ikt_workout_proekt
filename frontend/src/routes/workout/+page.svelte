<script>
	import WorkoutTemplateCard from './../../lib/components/workout/WorkoutTemplateCard.svelte';

	let workoutTemplates = [
		{
			title: 'Day 1 - Lower',
			exercises: [
				'5 x Deadlift (Barbell)',
				'5 x Squat (Barbell)',
				'5 x Leg Press',
				'5 x Leg Curl',
				'5 x Calf Raise'
			]
		},
		{
			title: 'Day 2 - Upper',
			exercises: [
				'5 x Bench Press (Barbell)',
				'5 x Shoulder Press (Barbell)',
				'5 x Pull Up',
				'5 x Bent Over Row',
				'5 x Tricep Extension'
			]
		},
		{
			title: 'Day 3 - Lower',
			exercises: [
				'5 x Deadlift (Barbell)',
				'5 x Squat (Barbell)',
				'5 x Leg Press',
				'5 x Leg Curl',
				'5 x Calf Raise'
			]
		},
		{
			title: 'Day 4 - Upper',
			exercises: [
				'5 x Bench Press (Barbell)',
				'5 x Shoulder Press (Barbell)',
				'5 x Pull Up',
				'5 x Bent Over Row',
				'5 x Tricep Extension'
			]
		}
	];
</script>

<section>
	<div class="flex justify-between items-center">
		<h2 class="text-xs text-neutral-500 tracking-wider font-semibold uppercase">My Templates</h2>
		<div class="h-full">
			<button class="px-2 rounded-lg">+</button>
		</div>
	</div>
	<div class="mt-4">
		{#each workoutTemplates as item, idx (idx)}
			<WorkoutTemplateCard title={item.title} exercises={item.exercises} />
		{/each}
	</div>
</section>
