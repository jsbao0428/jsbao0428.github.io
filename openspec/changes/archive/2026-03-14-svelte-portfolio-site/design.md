## Context

目前專案根目錄為 GitHub Pages repo (`jsbao0428.github.io`)，僅包含 Stitch 產生的 4 個靜態 HTML 範例頁面作為設計參考。需要將這些範例轉為 SvelteKit 架構的靜態網站，部署至 GitHub Pages。

Stitch 範例使用的設計系統：
- Primary: `#0d59f2`、背景 light: `#f5f6f8`、背景 dark: `#101622`
- 字體: Inter (sans-serif)
- 圖示: Material Symbols Outlined
- 支持 dark mode（CSS class 切換）

## Goals / Non-Goals

**Goals:**
- 使用 SvelteKit + Tailwind CSS v4 建立可維護的靜態個人網站
- 忠實還原 Stitch 範例的視覺設計與互動效果
- 支持 dark/light mode 切換並記住使用者偏好
- 使用 `@sveltejs/adapter-static` 產生靜態檔案，部署到 GitHub Pages
- 文章使用 Markdown 撰寫，透過 mdsvex 在 build time 編譯

**Non-Goals:**
- 不做 SSR 或 API routes
- 不整合 CMS 或後端資料庫
- 不做使用者登入/評論功能（文章評論區僅為展示用 UI）
- 不做國際化 (i18n)

## Decisions

### 1. SvelteKit + adapter-static
**選擇**: SvelteKit 搭配 `@sveltejs/adapter-static`
**理由**: SvelteKit 提供 file-based routing，配合 static adapter 可直接產出純靜態 HTML，完美適合 GitHub Pages。相比 pure Svelte + Vite，SvelteKit 提供更好的路由、layout 共用、和預渲染支持。
**替代方案**: Astro（學習曲線額外增加）、Next.js（React 生態系非用戶需求）

### 2. Tailwind CSS v4
**選擇**: Tailwind CSS v4（CSS-first 設定）
**理由**: 沿用 Stitch 範例的 Tailwind 設計語言，v4 使用 CSS-based configuration 更簡潔。透過 `@theme` 指令定義設計 tokens。
**替代方案**: Tailwind v3（較舊但更穩定）、UnoCSS（生態系較小）

### 3. 文章系統使用 mdsvex
**選擇**: mdsvex 處理 Markdown 文章
**理由**: mdsvex 允許在 Markdown 中嵌入 Svelte 元件，並原生整合 SvelteKit 路由。文章存放在 `src/content/articles/` 目錄，build time 編譯為靜態頁面。
**替代方案**: 手寫每篇文章為 Svelte 頁面（不可擴展）

### 4. 專案結構
```
src/
├── lib/
│   ├── components/     # 共用元件 (Navbar, Footer, ThemeToggle, ProjectCard...)
│   └── data/           # 靜態資料 (projects, skills, experience)
├── content/
│   └── articles/       # Markdown 文章
├── routes/
│   ├── +layout.svelte  # 共用 layout (Navbar + Footer)
│   ├── +page.svelte    # 首頁
│   ├── about/
│   │   └── +page.svelte
│   └── blog/
│       ├── +page.svelte        # 文章列表
│       └── [slug]/
│           └── +page.svelte    # 文章詳情
└── app.css             # Tailwind + 全域樣式
```

### 5. Dark Mode 實作
**選擇**: Tailwind `darkMode: 'class'` + localStorage 持久化
**理由**: 與 Stitch 範例一致的 class-based 切換方式，搭配 localStorage 記住偏好，初次載入時檢查 `prefers-color-scheme`。

## Risks / Trade-offs

- **[Stitch 範例使用外部圖片 URL]** → 初期使用 placeholder 圖片，之後替換為個人內容
- **[Tailwind CSS v4 較新]** → 若遇到相容問題可降回 v3，API 差異不大
- **[mdsvex 生態系]** → mdsvex 社群活躍，對 SvelteKit 支援良好，風險低
- **[GitHub Pages SPA routing]** → adapter-static 配合 `fallback: '404.html'` 處理 SPA 路由
