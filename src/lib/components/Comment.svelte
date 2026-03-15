<script lang="ts">
	let container: HTMLDivElement;

	function getTheme(): string {
		return document.documentElement.classList.contains('dark')
			? 'dark_tritanopia'
			: 'light_tritanopia';
	}

	$effect(() => {
		const script = document.createElement('script');
		script.src = 'https://giscus.app/client.js';
		script.setAttribute('data-repo', 'jsbao0428/jsbao0428.github.io');
		script.setAttribute('data-repo-id', 'R_kgDOQ3tXcQ');
		script.setAttribute('data-category', 'Announcements');
		script.setAttribute('data-category-id', 'DIC_kwDOQ3tXcc4C4XW0');
		script.setAttribute('data-mapping', 'pathname');
		script.setAttribute('data-strict', '0');
		script.setAttribute('data-reactions-enabled', '1');
		script.setAttribute('data-emit-metadata', '0');
		script.setAttribute('data-input-position', 'top');
		script.setAttribute('data-theme', getTheme());
		script.setAttribute('data-lang', 'zh-TW');
		script.setAttribute('data-loading', 'lazy');
		script.crossOrigin = 'anonymous';
		script.async = true;
		container.appendChild(script);

		// Watch for theme changes and sync with Giscus
		const observer = new MutationObserver(() => {
			const iframe = container.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
			if (iframe?.contentWindow) {
				iframe.contentWindow.postMessage(
					{ giscus: { setConfig: { theme: getTheme() } } },
					'https://giscus.app'
				);
			}
		});

		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class']
		});

		return () => observer.disconnect();
	});
</script>

<div class="giscus-wrapper" bind:this={container}></div>
