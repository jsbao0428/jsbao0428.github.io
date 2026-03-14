<script lang="ts">
	let dark = $state(false);

	$effect(() => {
		dark = document.documentElement.classList.contains('dark');
	});

	function toggle() {
		dark = !dark;
		document.documentElement.classList.toggle('dark', dark);
		localStorage.setItem('theme', dark ? 'dark' : 'light');
	}
</script>

<button
	onclick={toggle}
	class="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors cursor-pointer"
	aria-label="Toggle theme"
>
	<span class="material-symbols-outlined">
		{dark ? 'dark_mode' : 'light_mode'}
	</span>
</button>
