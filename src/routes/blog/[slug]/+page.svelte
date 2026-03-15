<script lang="ts">
	import Comment from '$lib/components/Comment.svelte';

	let { data } = $props();
	let metadata = $derived(data.metadata);

	let headings: { id: string; text: string }[] = $state([]);
	let activeId = $state('');
	let copied = $state(false);

	$effect(() => {
		const article = document.querySelector('article');
		if (!article) return;

		const h2s = article.querySelectorAll('h2[id]');
		headings = Array.from(h2s).map((el) => ({
			id: el.id,
			text: el.textContent || ''
		}));

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						activeId = entry.target.id;
					}
				}
			},
			{ rootMargin: '-80px 0px -60% 0px' }
		);

		h2s.forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	});

	async function copyLink() {
		await navigator.clipboard.writeText(window.location.href);
		copied = true;
		setTimeout(() => (copied = false), 1500);
	}

	function shareTwitter() {
		const url = encodeURIComponent(window.location.href);
		const text = encodeURIComponent(metadata.title);
		window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
	}

	function shareLinkedIn() {
		const url = encodeURIComponent(window.location.href);
		window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
	}
</script>

<svelte:head>
	<title>{metadata.title}</title>
</svelte:head>

<div class="flex-1 py-8">
	<div class="max-w-[1280px] mx-auto px-4 lg:px-10 flex flex-col lg:flex-row gap-12">
		<!-- Main Content -->
		<div class="flex-1 min-w-0 flex flex-col gap-6">
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

			<!-- Comments -->
			<div class="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
				<Comment />
			</div>

			<!-- Back to Blog -->
			<div class="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
				<a
					href="/blog"
					class="inline-flex items-center gap-2 text-primary font-bold text-sm hover:opacity-80 transition-opacity no-underline"
				>
					<span class="material-symbols-outlined text-sm">arrow_back</span>
					Back to all articles
				</a>
			</div>
		</div>

		<!-- Sidebar -->
		<aside class="hidden lg:block w-64 shrink-0">
			<div class="sticky top-24 space-y-8">
				<!-- Table of Contents -->
				{#if headings.length > 0}
					<div class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
						<h4 class="font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-slate-100">
							<span class="material-symbols-outlined text-primary">bookmark</span>
							Table of Contents
						</h4>
						<ul class="space-y-2 text-sm font-medium text-slate-500 dark:text-slate-400">
							{#each headings as heading}
								<li>
									<a
										href="#{heading.id}"
										class="block py-1 transition-colors no-underline {activeId === heading.id
											? 'text-primary border-l-2 border-primary pl-3 -ml-[2px]'
											: 'hover:text-primary'}"
									>
										{heading.text}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/if}

				<!-- Share -->
				<div class="flex flex-col gap-4">
					<h4 class="font-bold text-sm uppercase tracking-widest text-slate-400">Share this post</h4>
					<div class="flex gap-2">
						<button
							onclick={shareTwitter}
							class="size-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
							title="Share on X"
						>
							<span class="material-symbols-outlined text-xl">post_add</span>
						</button>
						<button
							onclick={shareLinkedIn}
							class="size-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
							title="Share on LinkedIn"
						>
							<span class="material-symbols-outlined text-xl">share</span>
						</button>
						<button
							onclick={copyLink}
							class="size-10 rounded-full bg-slate-800 dark:bg-slate-700 text-white flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
							title="Copy link"
						>
							<span class="material-symbols-outlined text-xl">{copied ? 'check' : 'link'}</span>
						</button>
					</div>
				</div>
			</div>
		</aside>
	</div>
</div>
