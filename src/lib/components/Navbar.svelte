<script lang="ts">
	import ThemeToggle from './ThemeToggle.svelte';

	let menuOpen = $state(false);

	const links = [
		{ href: '/', label: 'Work' },
		{ href: '/about', label: 'About' },
		{ href: '/blog', label: 'Blog' }
	];
</script>

<header
	class="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md"
>
	<div class="max-w-[1280px] mx-auto flex items-center justify-between px-4 lg:px-10 py-4">
		<a href="/" class="flex items-center gap-4">
			<div class="text-primary flex items-center justify-center">
				<span class="material-symbols-outlined text-3xl">deployed_code</span>
			</div>
			<h2 class="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight">
				Portfolio
			</h2>
		</a>

		<div class="flex items-center gap-4">
			<nav class="hidden md:flex items-center gap-9">
				{#each links as link}
					<a
						href={link.href}
						class="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors"
					>
						{link.label}
					</a>
				{/each}
			</nav>
			<ThemeToggle />
			<button
				class="md:hidden flex items-center justify-center rounded-lg h-10 w-10 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer"
				onclick={() => (menuOpen = !menuOpen)}
				aria-label="Toggle menu"
			>
				<span class="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
			</button>
		</div>
	</div>

	{#if menuOpen}
		<nav class="md:hidden border-t border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark px-4 py-4">
			{#each links as link}
				<a
					href={link.href}
					class="block py-3 text-slate-700 dark:text-slate-300 hover:text-primary text-sm font-medium transition-colors"
					onclick={() => (menuOpen = false)}
				>
					{link.label}
				</a>
			{/each}
		</nav>
	{/if}
</header>
