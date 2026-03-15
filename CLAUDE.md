# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev Commands

```bash
npm run dev       # Start dev server
npm run build     # Build static site to build/
npm run preview   # Preview production build locally
```

## Architecture

SvelteKit static portfolio site deployed to GitHub Pages (`jsbao0428.github.io`).

**Stack:** SvelteKit 2 + Svelte 5 (runes) + Tailwind CSS v4 + mdsvex + adapter-static

**Key config:**
- `svelte.config.js` — adapter-static (output: `build/`, fallback: `404.html`), mdsvex preprocessor for `.md` extension
- `vite.config.ts` — `@tailwindcss/vite` plugin
- `src/app.css` — Tailwind v4 design tokens via `@theme` + custom dark variant
- `src/routes/+layout.ts` — `prerender = true` (all routes statically generated)

## Design System

Tailwind v4 CSS-first config in `src/app.css`. Primary: `#0d59f2`, fonts: Inter via Google Fonts CDN, icons: Material Symbols Outlined.

Dark mode uses `darkMode: 'class'` — toggled on `<html>` element, persisted to localStorage, with FOUC prevention script in `src/app.html`.

FOUC prevention: `src/app.html` contains inline `<style>` to hide Material Symbols icons (`visibility: hidden`) until fonts are loaded (`.fonts-loaded` class added via `document.fonts.ready`).

## Blog System

Articles are Markdown files in `src/content/articles/` with YAML frontmatter (title, slug, date, author, category, tags, excerpt, coverImage, readTime, draft).

- **Draft mode**: Set `draft: true` in frontmatter to hide an article from all pages (homepage, blog list, blog detail, prerender). Omitting `draft` or setting `draft: false` means the article is published.
- **List page** (`src/routes/blog/+page.ts`): loads all articles via `import.meta.glob()`, filters out examples and drafts, sorts by date
- **Detail page** (`src/routes/blog/[slug]/+page.ts`): dynamic import by slug, `entries()` function generates static routes for prerendering (excludes drafts)
- mdsvex compiles `.md` → Svelte components; metadata available as `module.metadata`, content as `module.default`

## Svelte 5 Conventions

This project uses Svelte 5 runes throughout:
- `$props()` for component props (not `export let`)
- `$state()` for reactive state
- `$derived()` for computed values
- `$effect()` for side effects
- `{@render children()}` for slot content (not `<slot />`)

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) auto-deploys on push to `main`: checkout → Node 22 → npm ci → build → deploy-pages.

## OpenSpec

Feature specifications live in `openspec/specs/`. Archived changes in `openspec/changes/archive/`. Schema: `spec-driven`.
