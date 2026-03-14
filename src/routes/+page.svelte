<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects } from '$lib/data/projects';
</script>

<svelte:head>
	<title>Portfolio - Home</title>
</svelte:head>

<div class="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
	<div class="flex flex-col max-w-[960px] flex-1">
		<!-- Hero Section -->
		<section class="px-4 pb-8 pt-12 md:pt-16">
			<h1
				class="text-slate-900 dark:text-slate-100 tracking-tight text-3xl md:text-5xl font-bold leading-tight text-left max-w-2xl"
			>
				Hi, I'm Alex. A <span class="text-primary">Digital Designer</span> crafting minimal experiences.
			</h1>
		</section>

		<!-- Selected Projects Header -->
		<div class="px-4 flex items-center justify-between pb-6 pt-4">
			<h3 class="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">
				Selected Projects
			</h3>
			<a class="text-primary text-sm font-semibold hover:underline" href="/blog">View All</a>
		</div>

		<!-- Projects Grid -->
		<div class="flex flex-col gap-8 px-4">
			{#each projects as project, i}
				<ProjectCard {project} reverse={i % 2 !== 0} />
			{/each}
		</div>
	</div>
</div>
