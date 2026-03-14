<script lang="ts">
	let { data } = $props();
	let metadata = $derived(data.metadata);
</script>

<svelte:head>
	<title>{metadata.title}</title>
</svelte:head>

<div class="flex-1 px-4 md:px-10 py-8">
	<div class="max-w-[960px] mx-auto flex flex-col gap-6">
		<!-- Breadcrumb -->
		<div class="flex flex-wrap gap-2 text-sm">
			<a
				href="/"
				class="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">Home</a
			>
			<span class="text-slate-400">/</span>
			<a
				href="/blog"
				class="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">Blog</a
			>
			<span class="text-slate-400">/</span>
			<span class="text-primary font-medium">{metadata.category}</span>
		</div>

		<!-- Title & Author -->
		<div class="flex flex-col gap-4">
			<h1
				class="text-slate-900 dark:text-slate-100 text-4xl md:text-5xl font-black leading-tight tracking-tight"
			>
				{metadata.title}
			</h1>
			<div class="flex items-center gap-3">
				<div
					class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm"
				>
					{metadata.author
						.split(' ')
						.map((/** @type {string} */ n: string) => n[0])
						.join('')}
				</div>
				<div class="flex flex-col">
					<span class="text-slate-900 dark:text-slate-100 font-semibold text-sm"
						>{metadata.author}</span
					>
					<p class="text-slate-500 dark:text-slate-400 text-xs">
						Published on {new Date(metadata.date).toLocaleDateString('en-US', {
							month: 'short',
							day: 'numeric',
							year: 'numeric'
						})} &bull; {metadata.readTime}
					</p>
				</div>
			</div>
		</div>

		<!-- Cover Image -->
		{#if metadata.coverImage}
			<div class="w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
				<div
					class="w-full h-full bg-center bg-no-repeat bg-cover"
					style="background-image: url('{metadata.coverImage}');"
					role="img"
					aria-label={metadata.title}
				></div>
			</div>
		{/if}

		<!-- Tags -->
		{#if metadata.tags?.length}
			<div class="flex flex-wrap gap-2">
				{#each metadata.tags as tag}
					<span
						class="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
					>
						{tag}
					</span>
				{/each}
			</div>
		{/if}

		<!-- Article Content -->
		<article
			class="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed text-lg
			prose-headings:text-slate-900 dark:prose-headings:text-slate-100 prose-headings:font-bold
			prose-a:text-primary prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:p-6 prose-blockquote:rounded-r-lg"
		>
			{@render data.content()}
		</article>

		<!-- Back to Blog -->
		<div class="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
			<a
				href="/blog"
				class="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
			>
				<span class="material-symbols-outlined text-sm">arrow_back</span>
				Back to all articles
			</a>
		</div>
	</div>
</div>
