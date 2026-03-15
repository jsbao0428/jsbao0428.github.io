## Context

ContactPopover 已實作完成，Email 項目目前是 `mailto:` 連結。需要改為顯示完整 email 文字 + 複製按鈕。

## Goals / Non-Goals

**Goals:**
- Email 項目顯示完整地址，點擊複製到剪貼簿
- 顯示「Copied!」回饋，數秒後自動消失

**Non-Goals:**
- 不改動 LinkedIn / GitHub 項目

## Decisions

1. **在 `profile.ts` 的 contact 項目加上 `copyValue` 欄位**
   - 有 `copyValue` 的項目渲染為「顯示文字 + 複製按鈕」，沒有的維持原本的外部連結
   - 不改變既有資料結構，向後相容

2. **使用 `navigator.clipboard.writeText()` API**
   - 現代瀏覽器皆支援，不需 polyfill

3. **複製回饋用 `$state` 控制 icon 變化**
   - 複製成功後 icon 從 `content_copy` 變為 `check`，1.5 秒後恢復

## Risks / Trade-offs

- **Clipboard API 需要 HTTPS** → GitHub Pages 預設 HTTPS，無問題
