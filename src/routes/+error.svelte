<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="flex flex-1 items-center justify-center px-4 py-20">
	<div class="flex flex-col items-center gap-6 text-center">
		<h1 class="text-3xl font-bold text-slate-900 dark:text-slate-100">
			{page.status === 404 ? 'Page Not Found' : 'Something Went Wrong'}
		</h1>
		<p class="text-slate-500 dark:text-slate-400 max-w-md">
			{page.status === 404
				? "The page you're looking for doesn't exist or has been moved."
				: page.error?.message || 'An unexpected error occurred.'}
		</p>
		<a
			href="/"
			class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-opacity no-underline"
		>
			<span class="material-symbols-outlined text-sm">arrow_back</span>
			Back to Home
		</a>
	</div>
</div>
