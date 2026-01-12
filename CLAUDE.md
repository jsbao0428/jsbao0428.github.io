# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog/portfolio website built with Hugo static site generator using the [hugo-profile](https://github.com/gurusabarish/hugo-profile) theme.

## Common Commands

```bash
# Start development server with live reload
hugo server

# Build static site for production (output to public/)
rm -rf public/ && hugo

# Create new blog post
hugo new content content/blogs/my-post.md
```

## Architecture

- **hugo.yaml** - Main configuration file controlling site title, menu, theme settings, and all homepage sections (Hero, About, Experience, Education, Projects, Achievements, Contact)
- **content/** - Markdown content files
  - `content/blogs/` - Blog posts
  - `content/gallery.md` - Gallery page
- **static/** - Static assets (images, favicon)
- **themes/hugo-profile/** - Theme files (avoid modifying directly)
- **public/** - Generated output (gitignored, rebuilt on each `hugo` build)

## Key Configuration

Site sections can be toggled on/off via `params` in hugo.yaml:
- `params.hero.enable`, `params.about.enable`, `params.experience.enable`, etc.

Blog posts use front matter for metadata (title, date, draft status, tags).
