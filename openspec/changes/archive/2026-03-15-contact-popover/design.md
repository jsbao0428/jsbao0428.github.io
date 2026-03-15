## Context

About 頁面的「Contact Me」按鈕目前是無功能的 `<button>`。需要加入 popover 元件，讓訪客可以快速取得 Email、LinkedIn、GitHub 聯絡資訊。

## Goals / Non-Goals

**Goals:**
- 點擊「Contact Me」顯示 popover，列出三個聯絡管道
- Email 使用 `mailto:` 連結、LinkedIn 和 GitHub 開新分頁
- 點擊 popover 外部或再次點擊按鈕時關閉
- 聯絡資訊集中管理在 `profile.ts`

**Non-Goals:**
- 不做聯絡表單（靜態網站無後端）
- 不做動畫過場效果

## Decisions

1. **純 CSS/Svelte 實作 popover，不引入第三方 UI 庫**
   - 專案目前沒有 UI 元件庫，為一個 popover 引入整套庫不值得
   - 使用 Svelte 5 的 `$state` 控制開關，搭配 `svelte:window` 的 click 事件偵測外部點擊

2. **聯絡資訊存放在 `profile.ts` 的 `contacts` 陣列**
   - 與既有資料結構一致，每個項目包含 `icon`、`label`、`href`
   - icon 使用 Material Symbols Outlined（專案已有）

3. **Popover 定位在按鈕下方居中**
   - 使用 absolute positioning 相對於按鈕容器
   - 行動裝置上同樣適用

## Risks / Trade-offs

- **Popover 在小螢幕可能溢出** → 使用 `left: 50%; transform: translateX(-50%)` 置中，加上適當 max-width
