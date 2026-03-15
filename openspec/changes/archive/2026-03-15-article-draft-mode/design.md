## Context

網站使用 `import.meta.glob` 在三個路由檔案中載入 `src/content/articles/**/*.md`，每個檔案都有一個 `.filter(([path]) => !path.includes('/examples/'))` 過濾 example 文章。目前沒有機制可以讓文章存在於 repo 中但不被公開顯示。

## Goals / Non-Goals

**Goals:**
- 讓作者可以透過 frontmatter `draft: true` 將文章標記為草稿
- 草稿文章不出現在首頁、blog 列表、blog 詳情頁
- 草稿文章不產生 prerender 靜態路由

**Non-Goals:**
- 不提供預覽草稿文章的機制（如 `?preview=true` query param）
- 不在 UI 上顯示「草稿」標籤或狀態
- 不做 CMS 或編輯後台

## Decisions

**在現有 filter chain 上加條件，而非建立獨立的載入工具函式**

三個檔案各自有略微不同的載入邏輯（首頁取前 3 篇、列表頁全部、詳情頁依 slug 查找）。直接在各自的 filter 中加上 `metadata.draft !== true` 條件最簡單，避免過度抽象。

替代方案：建立 `$lib/utils/articles.ts` 統一載入與過濾 — 雖然減少重複，但目前僅三處使用且邏輯各異，抽象的收益不大。

**`draft` 欄位預設為 `false`（未設定時視為非草稿）**

使用 `metadata.draft !== true` 而非 `metadata.draft === false`，讓現有沒有 `draft` 欄位的文章不受影響。

## Risks / Trade-offs

- [低風險] 草稿文章仍存在於 repo 和打包產物中，只是不被路由引用。若需完全排除可在 glob pattern 層級處理，但目前不需要。
