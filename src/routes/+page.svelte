<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects } from '$lib/data/projects';

	let { data } = $props();
</script>

<svelte:head>
	<title>jsbao - Home</title>
</svelte:head>

<div class="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
	<div class="flex flex-col max-w-[960px] flex-1">
		<!-- Hero Section -->
		<section class="px-4 pb-8 pt-12 md:pt-16">
			<h1
				class="text-slate-900 dark:text-slate-100 tracking-tight text-3xl md:text-5xl font-bold leading-tight text-left max-w-2xl"
			>
				Hi, I'm Polo. A <span class="text-primary">Data Engineer</span> building scalable pipelines & AI systems.
			</h1>
		</section>

		<!-- Recent Articles -->
		{#if data.articles.length > 0}
			<div class="px-4 flex items-center justify-between pb-6 pt-4">
				<h3 class="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">
					Recent Articles
				</h3>
				<a class="text-primary text-sm font-semibold hover:opacity-80 transition-opacity no-underline" href="/blog">View All</a>
			</div>

			<div class="flex flex-col gap-8 px-4">
				{#each data.articles as article}
					<a href="/blog/{article.slug}" class="flex flex-col md:flex-row gap-6 group no-underline">
						<div class="w-full md:w-60 h-40 shrink-0 overflow-hidden rounded-xl">
							<div
								class="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
								style="background-image: url('{article.coverImage}');"
								role="img"
								aria-label={article.title}
							></div>
						</div>
						<div class="flex flex-col justify-center gap-2">
							<div class="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-primary">
								<span>{article.category}</span>
								<span class="w-1 h-1 rounded-full bg-slate-400"></span>
								<span class="text-slate-500">{article.readTime}</span>
							</div>
							<h4 class="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors leading-tight">
								{article.title}
							</h4>
							<p class="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 leading-relaxed">
								{article.excerpt}
							</p>
							<span class="text-xs text-slate-500">
								{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
							</span>
						</div>
					</a>
				{/each}
			</div>
		{/if}

		<!-- Selected Projects Header -->
		<div class="px-4 flex items-center justify-between pb-6 pt-16">
			<h3 class="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">
				Selected Projects
			</h3>
			<a class="text-primary text-sm font-semibold hover:opacity-80 transition-opacity no-underline" href="/work">View All</a>
		</div>

		<!-- Projects Grid -->
		<div class="flex flex-col gap-8 px-4">
			{#each projects as project, i}
				<ProjectCard {project} reverse={i % 2 !== 0} />
			{/each}
		</div>
	</div>
</div>
