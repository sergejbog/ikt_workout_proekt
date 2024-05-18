<script>
	import Icon from '$lib/components/common/Icon.svelte';
	import { page } from '$app/stores';
	let path;

	$: path = $page.url.pathname;
</script>

<nav class="fixed bottom-0 h-20 flex justify-between items-center w-full bg-primary text-white">
	<a
		href="workout"
		class="flex w-1/4 h-full flex-col items-center justify-center text-white"
		class:active={path === '/workout' || path === '/workout/'}
	>
		<Icon name="add" width="1.7rem" height="1.7rem" /> Workout
	</a>
	<a
		href="history"
		class="flex w-1/4 h-full flex-col items-center justify-center text-white"
		class:active={path === '/history' || path === '/history/'}
	>
		<Icon name="history" width="1.7rem" height="1.7rem" /> History
	</a>
	<a
		href="exercises"
		class="flex w-1/4 h-full flex-col items-center justify-center text-white"
		class:active={path === '/exercises' || path === '/exercises/'}
	>
		<Icon name="exercise" width="1.7rem" height="1.7rem" /> Exercises
	</a>
	<a
		href="profile"
		class="flex w-1/4 h-full flex-col items-center justify-center text-white"
		class:active={path === '/profile' || path === '/profile/'}
	>
		<Icon name="user" width="1.7rem" height="1.7rem" /> Profile
	</a>
</nav>

<style>
	a.active {
		background-color: #ffffff17;
	}
</style>
