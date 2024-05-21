<script>
	import profilePic from '$images/profile-pic.png';
	import BellIcon from '$images/icons/bell.png';
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';

	let chart;

	onMount(() => {
		// @ts-ignore
		const ctx = document.getElementById('myChart').getContext('2d');
		chart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ['4/15', '4/22', '4/29', '5/6', '5/13'],
				datasets: [
					{
						label: 'Workouts Per Week',
						data: [1, 5, 2, 3, 7],
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 159, 64, 0.2)',
							'rgba(255, 99, 132, 0.2)'
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)',
							'rgba(255, 99, 132, 1)'
						],
						borderWidth: 1
					}
				]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});
	});
</script>

<div class="container space-y-8">
	<div class="flex space-x-3">
		<div>
			<img src={profilePic} alt="profile pic" />
		</div>
		<div>
			<h2 class="font-bold text-xl">Stefani Wong</h2>
			<span class="text-md">High Intensity Workouts</span>
		</div>
	</div>

	<div
		class="flex justify-between
    "
	>
		<div
			class="flex flex-col items-center px-6 py-4 space-y-2 shadow-xl border-r-8 rounded-3xl w-28"
		>
			<span class="text-primary-lightest font-bold">180cm</span>
			<span class="text-gray-500">Height</span>
		</div>
		<div
			class="flex flex-col items-center px-6 py-4 space-y-2 shadow-xl border-r-8 rounded-3xl w-28"
		>
			<span class="text-primary-lightest font-bold">65kg</span>
			<span class="text-gray-500">Weight</span>
		</div>
		<div
			class="flex flex-col items-center px-6 py-4 space-y-2 shadow-xl border-r-8 rounded-3xl w-28"
		>
			<span class="text-primary-lightest font-bold">22y</span>
			<span class="text-gray-500">Age</span>
		</div>
	</div>

	<div>
		<h2 class="font-bold text-xl">Dashboard</h2>
		<div class="shadow-xl border-r-8 rounded-3xl">
			<canvas id="myChart"></canvas>
		</div>
	</div>

	<div>
		<h2 class="font-bold text-xl">Notifications</h2>
		<div class="flex justify-between shadow-xl border-r-8 rounded-3xl px-2 pb-4 pt-6 items-center">
			<div class="flex items-center align-middle">
				<img src={BellIcon} alt="bell-icon" class="h-10" />

				<span class="text-md pb-2">Send me notifications</span>
			</div>
			<div>
				<label class="inline-flex items-center cursor-pointer">
					<input type="checkbox" value="" class="sr-only peer" />
					<div
						class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-lighter"
					></div>
				</label>
			</div>
		</div>
	</div>
</div>
