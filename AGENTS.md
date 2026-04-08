# Repository Guidelines

## Project Structure & Module Organization
This repository is a static SvelteKit portfolio and blog. App routes live in `src/routes`, shared UI components in `src/lib/components`, and typed content/data modules in `src/lib/data`. Markdown articles are stored under `src/content/articles/<topic>/` and are loaded with `mdsvex` via `import.meta.glob`. Static files such as avatars, PDFs, and verification HTML live in `static/`. Production output is generated into `build/`.

## Build, Test, and Development Commands
Use `npm install` to install dependencies. `npm run dev` starts the local Vite dev server for route and content work. `npm run build` creates the static site in `build/`; this is also the main validation step used by CI. `npm run preview` serves the production build locally for a final check before pushing. There is currently no separate `test` or `lint` script configured.

## Coding Style & Naming Conventions
Follow the existing TypeScript and Svelte style: tabs for indentation, single quotes, and semicolons. Keep route files in SvelteKit form such as `+page.svelte`, `+page.ts`, and `+layout.svelte`. Use PascalCase for components (`ProjectCard.svelte`), camelCase for variables/functions, and descriptive folder names for article topics (`src/content/articles/kafka/`). Keep content metadata stable, especially `slug`, because blog routing depends on it.

## Testing Guidelines
Before opening a PR, run `npm run build` and fix any type, content, or prerender errors. For UI or markdown-heavy changes, also run `npm run preview` and manually verify the affected pages, including blog index, article detail pages, and mobile layout. When adding new articles, confirm the slug resolves at `/blog/<slug>` and that draft filtering still behaves correctly.

## Commit & Pull Request Guidelines
Recent history uses short, imperative commit messages such as `Fix mobile horizontal overflow caused by long inline code` and `Add Google site verification file for SEO purposes`. Keep that pattern: start with a verb and describe the visible change. PRs should include a concise summary, note any content or route changes, link related issues when applicable, and attach screenshots for layout or styling updates.

## Deployment Notes
GitHub Actions deploys from `main` using [`.github/workflows/deploy.yml`](/Users/jsbao/jsbao0428.github.io/.github/workflows/deploy.yml). The workflow runs `npm ci` and `npm run build`, then publishes the `build/` directory to GitHub Pages.
