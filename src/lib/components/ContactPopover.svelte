<script lang="ts">
	let { contacts, open = $bindable(false) } = $props();
	let copied = $state(false);

	function handleClickOutside(event: MouseEvent) {
		const target = event.target as HTMLElement;
		if (!target.closest('.contact-popover-container')) {
			open = false;
		}
	}

	async function copyToClipboard(value: string) {
		await navigator.clipboard.writeText(value);
		copied = true;
		setTimeout(() => (copied = false), 1500);
	}
</script>

<svelte:window onclick={handleClickOutside} />

{#if open}
	<div
		class="contact-popover-container absolute top-full left-0 mt-2 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 py-2 min-w-[220px] z-50"
	>
		{#each contacts as contact}
			{#if contact.copyValue}
				<div class="flex items-center gap-3 px-4 py-3 text-slate-700 dark:text-slate-300">
					<span class="material-symbols-outlined text-primary text-xl">{contact.icon}</span>
					<span class="text-sm font-medium flex-1">{contact.label}</span>
					<button
						onclick={() => copyToClipboard(contact.copyValue)}
						class="material-symbols-outlined text-lg text-slate-400 hover:text-primary transition-colors cursor-pointer"
						title="Copy"
					>
						{copied ? 'check' : 'content_copy'}
					</button>
				</div>
			{:else}
				<a
					href={contact.href}
					target={contact.external ? '_blank' : undefined}
					rel={contact.external ? 'noopener noreferrer' : undefined}
					class="flex items-center gap-3 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-slate-700 dark:text-slate-300"
				>
					<span class="material-symbols-outlined text-primary text-xl">{contact.icon}</span>
					<span class="text-sm font-medium">{contact.label}</span>
				</a>
			{/if}
		{/each}
	</div>
{/if}
