## Why

首頁目前只有 Hero 和 Selected Projects，缺少文章曝光。在首頁底部加上最近文章區塊，讓訪客能快速看到最新內容。

## What Changes

- 首頁底部（Projects 下方）新增「Recent Articles」區塊，顯示最新的 3 篇文章
- 複用 blog 列表頁的文章載入邏輯，排除 examples 資料夾

## Capabilities

### New Capabilities

（無）

### Modified Capabilities

- `home-page`: 新增 Recent Articles 區塊

## Impact

- `src/routes/+page.svelte` — 新增文章區塊
- `src/routes/+page.ts` — 載入文章資料
