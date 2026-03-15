## ADDED Requirements

### Requirement: SvelteKit 專案初始化
專案 SHALL 使用 SvelteKit 框架，配合 `@sveltejs/adapter-static` 產生純靜態網站。

#### Scenario: 專案可成功 build 為靜態檔案
- **WHEN** 執行 `npm run build`
- **THEN** 在 `build/` 目錄產生完整的靜態 HTML/CSS/JS 檔案

#### Scenario: 開發伺服器正常啟動
- **WHEN** 執行 `npm run dev`
- **THEN** 本地開發伺服器啟動並可在瀏覽器中預覽網站

### Requirement: Tailwind CSS 整合
專案 SHALL 整合 Tailwind CSS v4，透過 CSS-first 設定方式定義設計 tokens。

#### Scenario: Tailwind utility classes 正常運作
- **WHEN** 在 Svelte 元件中使用 Tailwind utility classes（如 `bg-primary`、`text-slate-900`）
- **THEN** 對應的樣式正確套用在頁面上

### Requirement: GitHub Pages 部署設定
專案 SHALL 包含 GitHub Actions workflow，自動將 `main` 分支的變更部署到 GitHub Pages。

#### Scenario: Push 到 main 觸發自動部署
- **WHEN** 程式碼推送到 `main` 分支
- **THEN** GitHub Actions 自動執行 build 並部署至 GitHub Pages

### Requirement: 靜態路由預渲染
專案 SHALL 設定 `prerender = true`，所有頁面在 build time 預渲染為靜態 HTML。

#### Scenario: 所有路由產生對應 HTML
- **WHEN** 執行 build
- **THEN** 每個路由（`/`、`/about`、`/blog`、`/blog/[slug]`）都產生獨立的 HTML 檔案

### Requirement: 錯誤頁面
系統 SHALL 提供客製化錯誤頁面（`+error.svelte`），顯示友善的錯誤訊息和返回首頁按鈕。

#### Scenario: 404 頁面顯示
- **WHEN** 使用者造訪不存在的頁面
- **THEN** 顯示 "Page Not Found" 訊息、說明文字、和 "Back to Home" 按鈕

### Requirement: 導覽列
系統 SHALL 在頂部顯示 sticky 導覽列，包含 Logo、導覽連結（Home、Blog、Work、About）和主題切換按鈕。

#### Scenario: 導覽連結正確
- **WHEN** 頁面載入
- **THEN** 導覽列顯示 Home（`/`）、Blog（`/blog`）、Work（`/work`）、About（`/about`）四個連結
