## MODIFIED Requirements

### Requirement: 首頁顯示最近文章
首頁 SHALL 在 Selected Projects 區塊下方顯示「Recent Articles」區塊，列出最新的 3 篇文章。

#### Scenario: 最近文章渲染
- **WHEN** 使用者造訪首頁
- **THEN** Projects 下方顯示最新 3 篇文章，每篇包含封面圖、分類、標題、摘要、日期

#### Scenario: View All 連結
- **WHEN** 使用者點擊 Recent Articles 區塊的「View All」連結
- **THEN** 導覽至 `/blog` 頁面

#### Scenario: 文章可點擊
- **WHEN** 使用者點擊文章標題或封面圖
- **THEN** 導覽至 `/blog/[slug]` 文章詳情頁
