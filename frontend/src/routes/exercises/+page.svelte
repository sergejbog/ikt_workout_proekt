<script>
	// @ts-nocheck

	const exerciseData = {
		exercises: {
			A: [
				{
					name: 'Ab Rollout',
					description:
						'Kneel on the floor and place the ab roller on the floor in front of you. Slowly roll the ab roller forward, extending your body into a straight line. Pause, then slowly roll back to the starting position.',
					primaryMuscle: 'Abs',
					equipment: 'Ab Roller'
				},
				{
					name: 'Arnold Press',
					description:
						'Sit on a bench with back support and hold a dumbbell in each hand. Start with the dumbbells at shoulder height, palms facing you. Press the weights overhead while rotating your palms to face forward.',
					primaryMuscle: 'Shoulders',
					equipment: 'Dumbbell'
				}
			],
			B: [
				{
					name: 'Barbell Bench Press',
					description:
						'Lie on a flat bench and hold a barbell with a grip slightly wider than shoulder-width. Lower the bar to your chest, then press it back up to the starting position.',
					primaryMuscle: 'Chest',
					equipment: 'Barbell'
				},
				{
					name: 'Bulgarian Split Squat',
					description:
						'Stand a few feet in front of a bench. Place one foot on the bench behind you. Lower your body until your front thigh is parallel to the floor, then push back up to the starting position.',
					primaryMuscle: 'Legs',
					equipment: 'Bodyweight'
				}
			],
			C: [
				{
					name: 'Cable Crossover',
					description:
						'Stand between two cable machines with pulleys set high. Hold a handle in each hand with your arms out to your sides. Pull the handles down and together in front of your body, then slowly return to the starting position.',
					primaryMuscle: 'Chest',
					equipment: 'Cable Machine'
				},
				{
					name: 'Chin-Up',
					description:
						'Grab a pull-up bar with an underhand grip. Hang with your arms fully extended. Pull your body up until your chin is over the bar, then lower back to the starting position.',
					primaryMuscle: 'Back',
					equipment: 'Pull-Up Bar'
				}
			],
			D: [
				{
					name: 'Deadlift',
					description:
						'Stand with your feet hip-width apart and a barbell on the floor in front of you. Bend at your hips and knees to grab the bar with an overhand grip. Lift the bar by extending your hips and knees to stand up straight.',
					primaryMuscle: 'Back',
					equipment: 'Barbell'
				},
				{
					name: 'Dumbbell Flye',
					description:
						'Lie on a flat bench holding a dumbbell in each hand above your chest. Lower the weights out to the sides of your chest, then bring them back together at the top.',
					primaryMuscle: 'Chest',
					equipment: 'Dumbbell'
				}
			]
		}
	};
</script>

<section>
	<div class="flex justify-between items-center">
		<h2 class="text-xs text-neutral-500 tracking-wider font-semibold uppercase">Exercises</h2>
		<div class="h-full">
			<button class="px-2 rounded-lg">+</button>
		</div>
	</div>
	<div class="mt-4">
		{#each Object.keys(exerciseData.exercises) as key}
			<h2 class="text-xs text-neutral-500 font-semibold mt-4 mb-2">{key}</h2>
			<ul>
				{#each exerciseData.exercises[key] as exercise}
					<li class="mb-4 border-2 border-neutral-300 shadow-xl py-2 px-3 rounded-lg">
						<h3 class="text-lg font-semibold">{exercise.name}</h3>
						<p class="text-neutral-600 text-sm">
							<span class="font-semibold mr-2">Target: </span>{exercise.primaryMuscle}
						</p>
						<p class="text-neutral-600 text-sm mb-3">
							<span class="font-semibold mr-2">Equipment: </span>{exercise.equipment}
						</p>
						<p class="text-neutral-500 text-xs">{exercise.description}</p>
					</li>
				{/each}
			</ul>
		{/each}
	</div>
</section>
