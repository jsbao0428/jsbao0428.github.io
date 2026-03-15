## MODIFIED Requirements

### Requirement: 文章詳情頁
系統 SHALL 為每篇文章提供詳情頁面，包含標題、作者資訊、發布日期、封面圖、目錄 (TOC)、Markdown 內容，以及底部的留言區。

#### Scenario: 文章詳情渲染
- **WHEN** 使用者點擊文章的 Read More 連結
- **THEN** 導覽至 `/blog/[slug]` 顯示完整文章內容

#### Scenario: 目錄展開/收合
- **WHEN** 文章詳情頁載入
- **THEN** 顯示可展開/收合的 Table of Contents，列出文章的 h2 標題

#### Scenario: 留言區顯示
- **WHEN** 文章詳情頁載入
- **THEN** 文章內容下方、「Back to Blog」連結上方顯示 Giscus 留言 widget
