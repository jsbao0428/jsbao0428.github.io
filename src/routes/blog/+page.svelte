<script lang="ts">
	let { data } = $props();

	const categories = [
		{ icon: 'article', label: 'All Articles', active: true },
		{ icon: 'code', label: 'Web Development', active: false },
		{ icon: 'database', label: 'Data Science', active: false },
		{ icon: 'palette', label: 'UI/UX Design', active: false },
		{ icon: 'shield', label: 'Cybersecurity', active: false }
	];

	const tags = ['React', 'Python', 'AI', 'DevOps', 'Figma', 'Security'];
</script>

<svelte:head>
	<title>Blog - Latest Articles</title>
</svelte:head>

<div class="max-w-[1280px] mx-auto w-full px-4 lg:px-10 py-8">
	<div class="flex flex-col lg:flex-row gap-8">
		<!-- Sidebar -->
		<aside class="w-full lg:w-64 shrink-0 space-y-8">
			<section>
				<div class="mb-4">
					<h3
						class="text-slate-900 dark:text-slate-100 text-sm font-bold uppercase tracking-wider"
					>
						Categories
					</h3>
					<p class="text-slate-500 dark:text-slate-400 text-xs">Explore by core topic</p>
				</div>
				<nav class="space-y-1">
					{#each categories as cat}
						<a
							href="/blog"
							class="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
							{cat.active
								? 'bg-primary text-white font-medium'
								: 'hover:bg-slate-200 dark:hover:bg-slate-800 group'}"
						>
							<span
								class="material-symbols-outlined text-xl {cat.active
									? ''
									: 'text-slate-500 dark:text-slate-400 group-hover:text-primary'}"
								>{cat.icon}</span
							>
							<span
								class="text-sm {cat.active ? '' : 'text-slate-700 dark:text-slate-300'}"
								>{cat.label}</span
							>
						</a>
					{/each}
				</nav>
			</section>

			<section>
				<h3
					class="text-slate-900 dark:text-slate-100 text-sm font-bold uppercase tracking-wider mb-4"
				>
					Trending Tags
				</h3>
				<div class="flex flex-wrap gap-2">
					{#each tags as tag}
						<span
							class="px-3 py-1 bg-slate-200 dark:bg-slate-800 rounded-full text-xs font-medium hover:bg-primary/20 hover:text-primary cursor-pointer transition-colors"
						>
							{tag}
						</span>
					{/each}
				</div>
			</section>
		</aside>

		<!-- Article Feed -->
		<div class="flex-1 space-y-12">
			<div class="border-b border-slate-200 dark:border-slate-800 pb-6">
				<h1
					class="text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight"
				>
					Latest Articles
				</h1>
				<p class="text-slate-500 dark:text-slate-400 mt-2">
					Discover the latest industry trends and deep dives.
				</p>
			</div>

			<div class="space-y-10">
				{#each data.articles as article}
					<article class="flex flex-col md:flex-row gap-6 group">
						<a href="/blog/{article.slug}" class="w-full md:w-72 h-48 shrink-0 overflow-hidden rounded-xl block">
							<div
								class="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
								style="background-image: url('{article.coverImage}');"
								role="img"
								aria-label={article.title}
							></div>
						</a>
						<div class="flex flex-col justify-center gap-3">
							<div
								class="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-primary"
							>
								<span>{article.category}</span>
								<span class="w-1 h-1 rounded-full bg-slate-400"></span>
								<span class="text-slate-500">{article.readTime}</span>
							</div>
							<a href="/blog/{article.slug}" class="no-underline">
								<h2
									class="text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors leading-tight"
								>
									{article.title}
								</h2>
							</a>
							<p
								class="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 leading-relaxed"
							>
								{article.excerpt}
							</p>
							<div class="flex items-center gap-4 mt-1">
								<span class="text-xs font-medium text-slate-700 dark:text-slate-300"
									>{article.author}</span
								>
								<span class="text-xs text-slate-500"
									>{new Date(article.date).toLocaleDateString('en-US', {
										month: 'short',
										day: 'numeric',
										year: 'numeric'
									})}</span
								>
								<a
									href="/blog/{article.slug}"
									class="ml-auto flex items-center gap-1 text-primary text-xs font-bold hover:opacity-80 transition-opacity no-underline"
								>
									Read More
									<span class="material-symbols-outlined text-sm">arrow_forward</span>
								</a>
							</div>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</div>
</div>
