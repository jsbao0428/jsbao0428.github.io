## 1. 前置設定

- [x] 1.1 在 GitHub repo 設定中啟用 Discussions 功能
- [x] 1.2 到 https://github.com/apps/giscus 安裝 Giscus GitHub App 至此 repo
- [x] 1.3 到 https://giscus.app 設定並取得 repo ID、category ID 等參數

## 2. Comment 元件開發

- [x] 2.1 建立 `src/lib/components/Comment.svelte`，使用 Svelte 5 語法
- [x] 2.2 實作 Giscus script 動態載入邏輯（`$effect` 中建立 script element）
- [x] 2.3 實作初始主題偵測（讀取 `document.documentElement.classList` 判斷 dark/light）
- [x] 2.4 實作 MutationObserver 監聯主題切換，透過 `postMessage` 通知 Giscus iframe 切換主題

## 3. 頁面整合

- [x] 3.1 在 `src/routes/blog/[slug]/+page.svelte` 引入並嵌入 Comment 元件，位於文章內容與「Back to Blog」連結之間
- [x] 3.2 加入適當的間距和分隔線樣式

## 4. 驗證

- [x] 4.1 `npm run build` 確認靜態建置成功
- [x] 4.2 `npm run preview` 本地預覽，確認 Comment 元件正確渲染
- [x] 4.3 測試 dark/light mode 切換時 Giscus 主題同步
