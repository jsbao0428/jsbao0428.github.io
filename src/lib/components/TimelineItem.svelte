<script lang="ts">
	let {
		role,
		company,
		type,
		location,
		period,
		description,
		current = false,
		last = false
	}: {
		role: string;
		company: string;
		type: string;
		location: string;
		period: string;
		description: string;
		current?: boolean;
		last?: boolean;
	} = $props();
</script>

<div class="grid grid-cols-[48px_1fr] gap-x-4">
	<div class="flex flex-col items-center gap-1">
		<div
			class="flex h-12 w-12 items-center justify-center rounded-full {current
				? 'bg-primary/10 dark:bg-primary/20 text-primary'
				: 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}"
		>
			<span class="material-symbols-outlined">work</span>
		</div>
		{#if !last}
			<div class="w-[2px] bg-slate-200 dark:bg-slate-800 grow"></div>
		{/if}
	</div>
	<div class="flex flex-1 flex-col {last ? 'pt-1' : 'pb-8 pt-1'}">
		<div class="flex justify-between items-start">
			<div>
				<p class="text-slate-900 dark:text-slate-100 text-lg font-bold">
					{role} at {company}
				</p>
				<p class="text-primary text-sm font-semibold mt-1">{type} &bull; {location}</p>
			</div>
			<p class="text-slate-500 dark:text-slate-400 text-sm font-medium">{period}</p>
		</div>
		<p class="text-slate-600 dark:text-slate-400 text-base mt-3 leading-relaxed">
			{description}
		</p>
	</div>
</div>
