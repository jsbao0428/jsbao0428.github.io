## Why

About 頁面的「Contact Me」按鈕目前沒有功能。需要提供訪客一個快速取得聯絡管道的方式，包含 Email、LinkedIn、GitHub。

## What Changes

- 在 `profile.ts` 新增聯絡資訊資料（email、LinkedIn、GitHub 連結）
- 建立 `ContactPopover` 元件：點擊「Contact Me」按鈕後彈出 popover，列出各聯絡管道
- 修改 About 頁面，將「Contact Me」按鈕整合 popover 功能

## Capabilities

### New Capabilities

- `contact-popover`: 點擊「Contact Me」按鈕後顯示 popover，列出 Email / LinkedIn / GitHub 聯絡方式，每個項目可一鍵開啟

### Modified Capabilities

- `about-page`: 「Contact Me」按鈕從無功能改為觸發 contact popover

## Impact

- `src/lib/data/profile.ts` — 新增 contact 欄位
- `src/lib/components/ContactPopover.svelte` — 新增元件
- `src/routes/about/+page.svelte` — 整合 popover
