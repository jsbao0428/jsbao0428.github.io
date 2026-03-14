## Why

頁面載入時，Material Symbols 圖示字型尚未載入完成，導致 icon（如 dark mode toggle 的 `light_mode`/`dark_mode`）會短暫顯示為純文字，造成視覺閃爍（FOUT - Flash of Unstyled Text）。

## What Changes

- 在 icon 字型載入完成前隱藏 `.material-symbols-outlined` 元素
- 字型載入後顯示 icon，避免文字閃爍

## Capabilities

### New Capabilities

（無新 capabilities）

### Modified Capabilities

- `design-system`: 新增 icon 字型載入的 FOUT 防護要求

## Impact

- `src/app.css` — 新增字型載入隱藏樣式
- `src/app.html` — 可能新增字型載入偵測邏輯
