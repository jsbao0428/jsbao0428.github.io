<script lang="ts">
	let { data } = $props();

	let activeCategory = $state('All Articles');
	let activeTag = $state('');

	const categoryIcons: Record<string, string> = {
		'Web Development': 'code',
		'UI/UX Design': 'palette',
		'Cybersecurity': 'shield',
		'Data Science': 'database'
	};

	let categories = $derived(() => {
		const cats = [...new Set(data.articles.map((a: any) => a.category))];
		return [
			{ icon: 'article', label: 'All Articles' },
			...cats.map((c: string) => ({ icon: categoryIcons[c] || 'folder', label: c }))
		];
	});

	let allTags = $derived(() => {
		const tagSet = new Set<string>();
		data.articles.forEach((a: any) => a.tags?.forEach((t: string) => tagSet.add(t)));
		return [...tagSet];
	});

	let filteredArticles = $derived(() => {
		let result = data.articles;
		if (activeCategory !== 'All Articles') {
			result = result.filter((a: any) => a.category === activeCategory);
		}
		if (activeTag) {
			result = result.filter((a: any) => a.tags?.includes(activeTag));
		}
		return result;
	});

	function toggleTag(tag: string) {
		if (activeTag === tag) {
			activeTag = '';
		} else {
			activeTag = tag;
		}
	}

	function selectCategory(label: string) {
		activeCategory = label;
		activeTag = '';
	}
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
					{#each categories() as cat}
						<button
							onclick={() => selectCategory(cat.label)}
							class="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors w-full text-left cursor-pointer
							{activeCategory === cat.label
								? 'bg-primary text-white font-medium'
								: 'hover:bg-slate-200 dark:hover:bg-slate-800 group'}"
						>
							<span
								class="material-symbols-outlined text-xl {activeCategory === cat.label
									? ''
									: 'text-slate-500 dark:text-slate-400 group-hover:text-primary'}"
								>{cat.icon}</span
							>
							<span
								class="text-sm {activeCategory === cat.label ? '' : 'text-slate-700 dark:text-slate-300'}"
								>{cat.label}</span
							>
						</button>
					{/each}
				</nav>
			</section>

			<section>
				<h3
					class="text-slate-900 dark:text-slate-100 text-sm font-bold uppercase tracking-wider mb-4"
				>
					Tags
				</h3>
				<div class="flex flex-wrap gap-2">
					{#each allTags() as tag}
						<button
							onclick={() => toggleTag(tag)}
							class="px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-colors
							{activeTag === tag
								? 'bg-primary text-white'
								: 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary/20 hover:text-primary'}"
						>
							{tag}
						</button>
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
					{activeCategory === 'All Articles' ? 'Latest Articles' : activeCategory}
				</h1>
				<p class="text-slate-500 dark:text-slate-400 mt-2">
					{activeCategory === 'All Articles'
						? 'Discover the latest industry trends and deep dives.'
						: `${filteredArticles().length} article${filteredArticles().length !== 1 ? 's' : ''} in ${activeCategory}`}
				</p>
			</div>

			<div class="space-y-10">
				{#each filteredArticles() as article}
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
