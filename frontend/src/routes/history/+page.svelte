<script>
	import HistoryTemplateCard from '$lib/components/history/HistoryTemplateCard.svelte';

	let historyTemplates = [
		{
			title: 'Day 1 - Lower',
			exercises: [
				'5 x Deadlift (Barbell)',
				'5 x Squat (Barbell)',
				'5 x Leg Press',
				'5 x Leg Curl',
				'5 x Calf Raise'
			],
			date: new Date(),
			time: '1h 30m',
			prs: 2
		},
		{
			title: 'Day 2 - Upper',
			exercises: [
				'5 x Bench Press (Barbell)',
				'5 x Shoulder Press (Barbell)',
				'5 x Pull Up',
				'5 x Bent Over Row',
				'5 x Tricep Extension'
			],
			date: new Date(),
			time: '1h 38m',
			prs: 3
		},
		{
			title: 'Day 3 - Lower',
			exercises: [
				'5 x Deadlift (Barbell)',
				'5 x Squat (Barbell)',
				'5 x Leg Press',
				'5 x Leg Curl',
				'5 x Calf Raise'
			],
			date: new Date(),
			time: '1h 41m',
			prs: 1
		},
		{
			title: 'Day 4 - Upper',
			exercises: [
				'5 x Bench Press (Barbell)',
				'5 x Shoulder Press (Barbell)',
				'5 x Pull Up',
				'5 x Bent Over Row',
				'5 x Tricep Extension'
			],
			date: new Date(),
			time: '0h 59m',
			prs: 0
		}
	];
</script>

<section>
	<div class="flex justify-between items-center mb-1">
		<h2 class="text-xs text-neutral-500 font-semibold">June 2022</h2>
		<p class="text-xs text-neutral-500 font-semibold">4 workouts</p>
	</div>
	<div>
		{#each historyTemplates as item, idx (idx)}
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
