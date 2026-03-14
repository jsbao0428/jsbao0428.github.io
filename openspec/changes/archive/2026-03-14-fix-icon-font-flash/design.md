## Context

Material Symbols Outlined 透過 Google Fonts CDN 載入。在字型下載完成前，瀏覽器會以預設字體渲染 icon 名稱文字（如 `light_mode`），造成 FOUT。

## Goals / Non-Goals

**Goals:**

- 消除 icon 字型載入期間的文字閃爍

**Non-Goals:**

- 不更換 icon 方案（不改用 SVG icon）
- 不做字型預載（preload 對 Google Fonts variable font 效果有限）

## Decisions

### 使用 CSS `font-display` + 隱藏策略

**選擇**: 在 `app.css` 中預設隱藏 `.material-symbols-outlined`，透過 `document.fonts.ready` 偵測字型載入完成後加上 class 顯示。

**理由**: 純 CSS/JS 方案，不需額外依賴。`document.fonts.ready` 是標準 API，所有現代瀏覽器支援。

**替代方案**: Google Fonts URL 加 `&display=block` 參數（但這只控制 `@font-face` 的 `font-display`，無法完全避免 layout shift）。

## Risks / Trade-offs

- **[Icon 短暫不可見]** → 比顯示亂碼文字更好的使用者體驗，且載入通常很快
- **[JS 未執行時 icon 不顯示]** → 使用 `<noscript>` CSS fallback 或極短的 CSS animation delay 作為安全網
