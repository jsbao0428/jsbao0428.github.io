## 1. 專案初始化與設定

- [x] 1.1 使用 `npx sv create` 建立 SvelteKit 專案（TypeScript、Tailwind CSS v4）
- [x] 1.2 安裝 `@sveltejs/adapter-static`，設定 `svelte.config.js` 使用 static adapter
- [x] 1.3 設定 Tailwind CSS v4 設計 tokens（primary、background、font、borderRadius）
- [x] 1.4 安裝並設定 mdsvex 支援 Markdown 文章
- [x] 1.5 建立 `src/routes/+layout.ts` 設定 `prerender = true`
- [x] 1.6 建立 GitHub Actions workflow 自動部署到 GitHub Pages

## 2. 設計系統 — 共用元件

- [x] 2.1 建立 `Navbar` 元件（logo、導覽連結、dark mode toggle、手機版漢堡選單）
- [x] 2.2 建立 `Footer` 元件（版權資訊、社群連結）
- [x] 2.3 建立 `ThemeToggle` 元件（dark/light 切換 + localStorage 持久化 + prefers-color-scheme 偵測）
- [x] 2.4 建立 `+layout.svelte` 整合 Navbar 和 Footer

## 3. 首頁

- [x] 3.1 建立專案資料檔案 `src/lib/data/projects.ts`（專案名稱、描述、分類、封面圖）
- [x] 3.2 建立 `ProjectCard` 元件（封面圖、標題、類別、描述、View Project 按鈕、hover 效果）
- [x] 3.3 實作首頁 `src/routes/+page.svelte`（Hero section + Selected Projects grid）

## 4. 關於我頁面

- [x] 4.1 建立個人資料檔案 `src/lib/data/profile.ts`（個人資訊、技能、經歷、學歷）
- [x] 4.2 建立 `StatCard` 元件（統計數據卡片）
- [x] 4.3 建立 `TimelineItem` 元件（工作經歷時間軸項目）
- [x] 4.4 實作關於我頁面 `src/routes/about/+page.svelte`（個人檔案、統計、技能、經歷、學歷）

## 5. Blog 系統

- [x] 5.1 建立範例 Markdown 文章（含 frontmatter：title、slug、date、author、category、tags、excerpt、coverImage）
- [x] 5.2 建立文章資料載入工具（使用 Vite glob import 讀取 Markdown 檔案）
- [x] 5.3 實作文章列表頁 `src/routes/blog/+page.svelte`（含分類側邊欄和文章列表）
- [x] 5.4 實作文章詳情頁 `src/routes/blog/[slug]/+page.svelte`（標題、作者、TOC、Markdown 內容）

## 6. 收尾與部署

- [x] 6.1 確認所有頁面 responsive 設計正確（手機、平板、桌面）
- [x] 6.2 確認 dark/light mode 在所有頁面正常運作
- [x] 6.3 執行 `npm run build` 確認靜態產出正確
- [x] 6.4 測試 GitHub Pages 部署流程
