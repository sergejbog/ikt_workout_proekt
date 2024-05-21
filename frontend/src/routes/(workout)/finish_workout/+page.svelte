<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	async function wait2SAndGoToWorkout() {
		await new Promise((resolve) => setTimeout(resolve, 2000));
		goto('/workout');
	}
	onMount(() => {
		wait2SAndGoToWorkout();
	});
</script>

<section class="w-screen h-screen relative">
	<div class="h-full flex items-center justify-center w-full">
		<h2 class="text-2xl font-bold text-black">Workout Done</h2>
	</div>
</section>
