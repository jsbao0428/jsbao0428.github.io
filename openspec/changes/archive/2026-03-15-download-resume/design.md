## Context

About 頁面有一個「Download Resume」按鈕，目前是 `<button>` 元素且沒有綁定任何事件。履歷 PDF 檔案 (`Resume_DE.pdf`) 存在於專案根目錄但未放入 `static/` 目錄，因此無法作為靜態資源存取。

## Goals / Non-Goals

**Goals:**
- 讓「Download Resume」按鈕可以下載 PDF 履歷
- 使用瀏覽器原生下載行為（`<a>` + `download` 屬性）

**Non-Goals:**
- 不做線上履歷預覽功能
- 不做多語系履歷切換

## Decisions

1. **將 PDF 放入 `static/` 目錄**
   - SvelteKit 的 `static/` 目錄內容會直接部署至站點根路徑，最簡單直接
   - 替代方案：使用外部連結（如 Google Drive），但增加外部依賴且可能有存取限制

2. **使用 `<a>` 標籤取代 `<button>`**
   - 語義上更正確，瀏覽器原生支援 `download` 屬性
   - 替代方案：用 JavaScript 觸發下載，但對於靜態檔案來說過度複雜

## Risks / Trade-offs

- **檔案大小**：PDF 會被 git 追蹤，增加 repo 體積。目前檔案約 91KB，影響可忽略
- **更新流程**：更新履歷時需要手動替換 `static/` 中的檔案。可接受，因為更新頻率低
