## Why

個人網站的 blog 文章目前沒有留言功能，訪客無法與作者互動或提供回饋。需要一個零後端、免費、且與現有靜態架構相容的留言系統。選擇 Giscus（基於 GitHub Discussions）作為解決方案。

## What Changes

- 新增 `Comment.svelte` 元件，封裝 Giscus widget
- 在 blog 文章詳情頁（`/blog/[slug]`）底部嵌入留言區
- 留言系統主題自動跟隨網站 dark/light mode 切換
- 使用者透過 GitHub OAuth 登入後即可留言，留言儲存於 GitHub Discussions

## Capabilities

### New Capabilities
- `comment-system`: 基於 Giscus 的留言功能，嵌入於 blog 文章頁面，支援 Markdown、reactions、threaded replies，並同步網站主題

### Modified Capabilities
- `blog-system`: 文章詳情頁新增留言區塊，位於文章內容下方

## Impact

- 新增檔案：`src/lib/components/Comment.svelte`
- 修改檔案：`src/routes/blog/[slug]/+page.svelte`（嵌入 Comment 元件）
- 外部依賴：Giscus script（從 giscus.app 載入），需在 repo 啟用 GitHub Discussions
- 無後端、無新 npm 套件依賴
