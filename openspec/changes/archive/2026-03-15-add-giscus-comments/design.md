## Context

網站使用 SvelteKit + adapter-static 產生靜態頁面，部署於 GitHub Pages。Blog 文章頁面（`/blog/[slug]`）已實作完成，但缺少留言功能。網站有 dark/light mode 切換機制，透過 `document.documentElement.classList` 的 `dark` class 控制。

## Goals / Non-Goals

**Goals:**
- 在每篇 blog 文章底部嵌入 Giscus 留言 widget
- 留言主題自動跟隨網站 dark/light mode 切換
- 零後端依賴，完全客戶端渲染

**Non-Goals:**
- 非 GitHub 使用者的留言支援（不在此次範圍）
- 留言管理後台（直接在 GitHub Discussions 管理）
- 留言通知系統

## Decisions

### 1. 留言系統選擇：Giscus

**選擇**：Giscus（基於 GitHub Discussions）

**替代方案**：
- Utterances：使用 GitHub Issues 而非 Discussions，功能較少（無 reactions、無 threaded replies）
- Disqus：免費版有廣告，JS bundle 大，隱私疑慮
- 自建後端（Cloudflare Workers + D1）：開發和維護成本高，對個人 portfolio 來說 overkill

**理由**：Giscus 免費、無廣告、支援 Markdown 和 reactions、資料存在自己的 GitHub repo、與技術受眾的使用習慣一致。

### 2. 元件設計：獨立 Svelte 元件

**選擇**：建立 `src/lib/components/Comment.svelte` 封裝 Giscus

**做法**：
- 使用 Svelte 5 的 `$effect` 動態載入 Giscus script
- 接收 props 決定 Discussion mapping（使用 `pathname` 模式，讓每篇文章自動對應一個 Discussion）
- 監聽網站主題變化，透過 `postMessage` 通知 Giscus iframe 切換主題

### 3. 主題同步機制

**選擇**：MutationObserver 監聽 `<html>` 的 class 變化

**做法**：
- 在 Comment 元件內使用 MutationObserver 監聽 `document.documentElement` 的 `class` attribute 變化
- 偵測到 `dark` class 切換時，透過 `postMessage` 發送 `{ giscus: { setConfig: { theme } } }` 給 Giscus iframe
- 這比修改 ThemeToggle 元件更好，因為不需要引入跨元件的耦合

### 4. Discussion mapping 策略

**選擇**：`mapping: "pathname"`

**理由**：每篇文章的 URL path（如 `/blog/my-article`）自動成為 Discussion 的標題，不需額外設定。如果文章的 slug 改了，Discussion 不會自動跟著，但這在 blog 場景中很少發生。

## Risks / Trade-offs

- **GitHub 帳號限制** → 非技術訪客可能沒有 GitHub 帳號，但目標受眾是技術圈，影響極小
- **第三方 script 載入** → Giscus script 從外部載入，可能影響頁面載入速度 → 使用 `loading="lazy"` 延遲載入，只有捲動到留言區才載入
- **GitHub Discussions 需手動啟用** → 部署前需在 repo 設定中啟用 Discussions 功能，並安裝 Giscus app
