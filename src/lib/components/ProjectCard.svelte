<script lang="ts">
	import type { Project } from '$lib/data/projects';

	let { project, reverse = false }: { project: Project; reverse?: boolean } = $props();
</script>

<div class="group @container">
	<div
		class="flex flex-col items-stretch justify-start rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800
		{reverse ? '@xl:flex-row-reverse' : '@xl:flex-row'} @xl:items-center"
	>
		<div
			class="w-full @xl:w-1/2 bg-center bg-no-repeat aspect-video bg-cover transition-transform duration-500 group-hover:scale-105"
			style="background-image: url('{project.image}');"
			role="img"
			aria-label={project.title}
		></div>
		<div class="flex w-full @xl:w-1/2 grow flex-col items-stretch justify-center gap-4 p-6 md:p-8">
			<div class="flex flex-col gap-1">
				<p class="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">
					{project.title}
				</p>
				<p class="text-primary text-sm font-semibold uppercase tracking-wider">
					{project.category}
				</p>
				<p class="text-slate-600 dark:text-slate-400 text-base font-normal leading-relaxed mt-2">
					{project.description}
				</p>
			</div>
			<div class="flex items-center mt-2">
				<button
					class="flex items-center justify-center gap-2 rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 cursor-pointer"
				>
					<span>View Project</span>
					<span class="material-symbols-outlined text-sm">arrow_forward</span>
				</button>
			</div>
		</div>
	</div>
</div>
