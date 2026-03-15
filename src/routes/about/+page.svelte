<script lang="ts">
	import StatCard from '$lib/components/StatCard.svelte';
	import TimelineItem from '$lib/components/TimelineItem.svelte';
	import ContactPopover from '$lib/components/ContactPopover.svelte';
	import { profile } from '$lib/data/profile';

	let contactOpen = $state(false);
</script>

<svelte:head>
	<title>About - {profile.name}</title>
</svelte:head>

<div class="flex flex-1 justify-center py-8 px-4 lg:px-40">
	<div class="flex flex-col max-w-[960px] flex-1">
		<!-- Profile Section -->
		<div class="flex flex-col @container mb-8">
			<div class="flex w-full flex-col gap-6 items-center">
				<div class="flex gap-6 flex-col items-center">
					<div
						class="bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32 ring-4 ring-primary/20 shadow-xl bg-slate-300 dark:bg-slate-700"
						style={profile.avatar ? `background-image: url('${profile.avatar}'); background-position: 75% 30%;` : ''}
						role="img"
						aria-label={profile.name}
					></div>
					<div class="flex flex-col items-center justify-center">
						<h1
							class="text-slate-900 dark:text-slate-100 text-3xl font-bold leading-tight tracking-tight text-center"
						>
							{profile.name}
						</h1>
						<p class="text-primary text-lg font-medium text-center">{profile.title}</p>
						<div class="flex items-center gap-2 mt-1 text-slate-500 dark:text-slate-400">
							<span class="material-symbols-outlined text-base">location_on</span>
							<span class="text-base font-normal leading-normal">{profile.location}</span>
						</div>
					</div>
				</div>
				<div class="flex gap-3 w-full max-w-[480px]">
					<div class="relative flex flex-1 contact-popover-container">
						<button
							onclick={() => (contactOpen = !contactOpen)}
							class="flex flex-1 items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-sm font-bold hover:opacity-90 transition-opacity cursor-pointer"
						>
							Contact Me
						</button>
						<ContactPopover contacts={profile.contacts} bind:open={contactOpen} />
					</div>
					<a
						href="/Resume_DE.pdf"
						download
						class="flex flex-1 items-center justify-center rounded-lg h-12 px-6 bg-primary/10 dark:bg-primary/20 text-primary text-sm font-bold border border-primary/30 hover:bg-primary/30 transition-colors cursor-pointer"
					>
						<span class="material-symbols-outlined mr-2">download</span>
						Download Resume
					</a>
				</div>
			</div>
		</div>

		<!-- Stats Grid -->
		<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
			{#each profile.stats as stat}
				<StatCard value={stat.value} label={stat.label} />
			{/each}
		</div>

		<!-- Expertise Section -->
		<div class="mb-10">
			<h2 class="text-slate-900 dark:text-slate-100 text-[22px] font-bold leading-tight tracking-tight mb-4">
				Expertise
			</h2>
			<div class="flex flex-wrap gap-2">
				{#each profile.skills as skill}
					<span
						class="px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium"
					>
						{skill}
					</span>
				{/each}
			</div>
		</div>

		<!-- Work Experience Section -->
		<div class="mb-10">
			<h2 class="text-slate-900 dark:text-slate-100 text-[22px] font-bold leading-tight tracking-tight mb-6">
				Work Experience
			</h2>
			<div class="space-y-0">
				{#each profile.experience as exp, i}
					<TimelineItem
						role={exp.role}
						company={exp.company}
						type={exp.type}
						location={exp.location}
						period={exp.period}
						description={exp.description}
						current={exp.current}
						last={i === profile.experience.length - 1}
					/>
				{/each}
			</div>
		</div>

		<!-- Highlights Section -->
		<div class="mb-10 pt-4 border-t border-slate-200 dark:border-slate-800">
			<h2 class="text-slate-900 dark:text-slate-100 text-[22px] font-bold leading-tight tracking-tight mb-6">
				Highlights
			</h2>
			<div class="flex flex-col gap-6">
				{#each profile.highlights as hl}
					<div class="flex justify-between items-start">
						<div>
							{#if hl.href}
								<a href={hl.href} target="_blank" rel="noopener noreferrer" class="text-slate-900 dark:text-slate-100 text-base font-bold hover:text-primary transition-colors">
									{hl.title}
									<span class="material-symbols-outlined align-middle" style="font-size: 14px;">open_in_new</span>
								</a>
							{:else}
								<p class="text-slate-900 dark:text-slate-100 text-base font-bold">{hl.title}</p>
							{/if}
							<p class="text-slate-500 dark:text-slate-400 text-sm">{hl.event}</p>
						</div>
						<p class="text-slate-500 dark:text-slate-400 text-sm">{hl.period}</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- Education Section -->
		<div class="mb-10 pt-4 border-t border-slate-200 dark:border-slate-800">
			<h2 class="text-slate-900 dark:text-slate-100 text-[22px] font-bold leading-tight tracking-tight mb-6">
				Education
			</h2>
			<div class="flex flex-col gap-6">
				{#each profile.education as edu}
					<div class="flex justify-between items-start">
						<div>
							<p class="text-slate-900 dark:text-slate-100 text-base font-bold">{edu.degree}</p>
							<p class="text-slate-500 dark:text-slate-400 text-sm">{edu.school}</p>
						</div>
						<p class="text-slate-500 dark:text-slate-400 text-sm">{edu.period}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
