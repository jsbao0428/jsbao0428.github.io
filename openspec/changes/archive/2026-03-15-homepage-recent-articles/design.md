## Context

首頁目前由 `+page.svelte` 渲染，資料來自 `projects.ts`。需要額外載入文章資料。

## Goals / Non-Goals

**Goals:**
- 在 Projects 下方顯示最新 3 篇文章（封面圖、分類、標題、摘要、日期）
- 附「View All」連結到 `/blog`

**Non-Goals:**
- 不做分頁或無限滾動
- 不做分類篩選

## Decisions

1. **在 `+page.ts` 載入文章資料**
   - 複用 blog 列表頁的 glob + 排除 examples 邏輯
   - 取前 3 篇（按日期排序）

2. **直接在首頁渲染文章卡片**
   - 使用簡化版的文章卡片（水平排列：封面圖 + 標題/摘要）
   - 與現有 blog 列表頁風格一致

## Risks / Trade-offs

- 首頁多載入文章資料，但只有 3 篇且 eager import，影響可忽略
