## Why

目前個人網站只有 Stitch 生成的靜態 HTML 範例，需要轉為 Svelte + Tailwind CSS 的完整專案架構，以支持元件化開發、路由管理、dark mode 切換，並部署到 GitHub Pages (`jsbao0428.github.io`)。

## What Changes

- 建立 SvelteKit 專案，使用 static adapter 產生靜態網站
- 整合 Tailwind CSS v4，沿用 Stitch 範例的設計系統（primary `#0d59f2`、Inter 字體、深色/淺色主題）
- 實作 4 個頁面：首頁（Hero + 專案展示）、關於我（履歷/經歷）、文章列表、文章詳情
- 共用導覽列、Footer 元件，支持 dark mode 切換
- 使用 Markdown 或靜態資料管理文章內容
- 設定 GitHub Actions 自動部署

## Capabilities

### New Capabilities
- `site-scaffold`: SvelteKit 專案初始化，Tailwind CSS 整合，靜態 adapter 設定
- `design-system`: 共用設計 tokens（色彩、字體、圓角）、共用元件（Navbar、Footer、ThemeToggle）
- `home-page`: 首頁 Hero section 與專案作品展示卡片
- `about-page`: 個人簡介、技能、工作經歷、學歷的展示頁面
- `blog-system`: 文章列表頁（含分類側邊欄）與文章詳情頁，支持 Markdown 內容

### Modified Capabilities

（無既有 capabilities 需修改）

## Impact

- 新增 SvelteKit 專案結構（`src/`、`svelte.config.js`、`vite.config.ts` 等）
- 新增 Tailwind CSS 設定
- 新增 GitHub Actions workflow 用於靜態網站部署
- 移除或保留原有 Stitch HTML 範例作為參考
