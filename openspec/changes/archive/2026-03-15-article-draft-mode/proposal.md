## Why

目前所有放在 `src/content/articles/` 的 Markdown 文章都會自動出現在網站上。作者需要一種方式來撰寫尚未完成的草稿文章，而不讓它們被公開顯示。

## What Changes

- 文章 frontmatter 新增可選的 `draft: true` 欄位
- 所有文章載入點（首頁、blog 列表頁、blog 詳情頁）過濾掉 `draft: true` 的文章
- Draft 文章不會產生 prerender 路由

## Capabilities

### New Capabilities
- `article-draft-mode`: 透過 frontmatter `draft: true` 標記草稿文章，使其不顯示在任何公開頁面上

### Modified Capabilities
- `blog-system`: 文章載入邏輯需新增 draft 過濾條件

## Impact

- `src/routes/+page.ts` — 首頁 recent articles 載入
- `src/routes/blog/+page.ts` — blog 列表頁載入
- `src/routes/blog/[slug]/+page.ts` — blog 詳情頁載入 + `entries()` prerender 產生
