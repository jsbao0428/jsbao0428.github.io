<script lang="ts">
	let { value, label }: { value: string; label: string } = $props();
</script>

<div
	class="flex flex-col gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 p-6 items-center text-center shadow-sm"
>
	<p class="text-primary tracking-tight text-3xl font-bold leading-tight">{value}</p>
	<p class="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">
		{label}
	</p>
</div>
