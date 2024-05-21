<script lang="ts">
	import { currentWorkoutTemplatesStore } from '$lib/stores/currentWorkoutTemplatesStore.svelte.ts';
	import { hoursMinutesSeconds } from '$lib/stores/historyWorkoutStore';
	import { onMount } from 'svelte';

	console.log(currentWorkoutTemplatesStore.currentWorkoutTemplate);
	let hours = 0;
	let minutes = 0;
	let seconds = 0;
	let timer: number | undefined;
	let running = false;

	function startTimer() {
		if (!running) {
			running = true;
			timer = setInterval(() => {
				seconds++;
				if (seconds === 60) {
					seconds = 0;
					minutes++;
				}
				if (minutes === 60) {
					minutes = 0;
					hours++;
				}
				$hoursMinutesSeconds = `${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds
					.toString()
					.padStart(2, '0')}s`;
			}, 1000);
		}
	}

	function stopTimer() {
		if (running) {
			running = false;
			clearInterval(timer);
		}
	}

	function resetTimer() {
		stopTimer();
		hours = 0;
		minutes = 0;
		seconds = 0;
	}

	function logTime() {
		console.log(`Elapsed time: ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
	}

	onMount(() => {
		startTimer();
	});
</script>

<section>
	<h2 class="text-black text-xl font-bold">
		{currentWorkoutTemplatesStore.currentWorkoutTemplate?.title}
	</h2>
	<div class="timer text-neutral-500">
		<span>{hours.toString().padStart(2, '0')}:</span>
		<span>{minutes.toString().padStart(2, '0')}:</span>
		<span>{seconds.toString().padStart(2, '0')}</span>
	</div>
	{#each currentWorkoutTemplatesStore.currentWorkoutTemplate!.exercises as item, idx (idx)}
		<h3 class="text-lg font-semibold mt-4 text-secondary-lighter">{item.name}</h3>
		<table class="min-w-full bg-white">
			<thead>
				<tr>
					<th
						class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-center text-xs leading-4 font-extrabold text-black uppercase tracking-wider"
						>SET</th
					>
					<th
						class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-center text-xs leading-4 font-extrabold text-black uppercase tracking-wider"
						>KG</th
					>
					<th
						class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-center text-xs leading-4 font-extrabold text-black uppercase tracking-wider"
						>REPS</th
					>
					<th
						class="py-2 px-4 border-b border-gray-200 bg-gray-100 text-center text-xs leading-4 font-extrabold text-black uppercase tracking-wider"
					></th>
				</tr>
			</thead>
			<tbody class="bg-white">
				{#each { length: item.sets } as _, i}
					<tr class="border-b border-gray-200">
						<td class="py-2 px-4 whitespace-no-wrap text-center font-bold text-primary-lightest"
							>{i + 1}</td
						>
						<td class="py-2 px-4 whitespace-no-wrap text-center">
							<input
								type="number"
								class="w-16 bg-neutral-300 text-center text-black font-bold rounded-lg"
							/>
						</td>
						<td class="py-2 px-4 whitespace-no-wrap text-center">
							<input
								type="number"
								class="w-16 bg-neutral-300 text-center text-black font-bold rounded-lg"
								value="3"
							/>
						</td>
						<td class="py-2 px-4 whitespace-no-wrap text-center">
							<input type="checkbox" class="text-center text-white font-bold rounded-lg" />
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
		<button
			on:click={() => {
				item.sets++;
			}}
			class="mt-4 bg-transparent text-secondary-lighter uppercase font-bold rounded-lg w-full py-2"
			>Add set</button
		>
	{/each}
</section>

<style>
	/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>
