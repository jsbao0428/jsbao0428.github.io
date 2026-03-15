## Why

About 頁面的「Download Resume」按鈕目前沒有功能，點擊後沒有任何反應。需要讓使用者能實際下載履歷 PDF 檔案。

## What Changes

- 將 `Resume_DE.pdf` 複製到 `static/` 目錄，使其可作為靜態資源被存取
- 修改 About 頁面的「Download Resume」按鈕，改為 `<a>` 連結並加上 `download` 屬性，指向 `/Resume_DE.pdf`

## Capabilities

### New Capabilities

- `resume-download`: 讓 About 頁面的「Download Resume」按鈕可實際下載 PDF 履歷檔案

### Modified Capabilities

- `about-page`: 修改 Download Resume 按鈕的行為，從無功能的 button 改為可下載的連結

## Impact

- `static/Resume_DE.pdf` — 新增靜態檔案
- `src/routes/about/+page.svelte` — 修改按鈕元素
