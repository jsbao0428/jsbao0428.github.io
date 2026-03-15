<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects } from '$lib/data/projects';
</script>

<svelte:head>
	<title>Work - jsbao</title>
</svelte:head>

<div class="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-8">
	<div class="flex flex-col max-w-[960px] flex-1">
		<div class="px-4 pb-8">
			<h1 class="text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
				Work
			</h1>
			<p class="text-slate-500 dark:text-slate-400 mt-2">
				Selected projects and things I've built.
			</p>
		</div>

		<div class="flex flex-col gap-8 px-4">
			{#each projects as project, i}
				<ProjectCard {project} reverse={i % 2 !== 0} />
			{/each}
		</div>
	</div>
</div>
