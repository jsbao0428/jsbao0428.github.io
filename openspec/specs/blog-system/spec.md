## ADDED Requirements

### Requirement: 文章列表頁
Blog 列表頁 SHALL 展示所有文章，每篇包含封面圖、分類、標題、摘要、作者、日期。

#### Scenario: 文章列表渲染
- **WHEN** 使用者造訪 `/blog` 頁面
- **THEN** 文章以列表形式展示，每篇有封面圖（左）和內容（右），hover 時圖片放大

#### Scenario: 文章資料來源
- **WHEN** 網站 build 時
- **THEN** 文章從 `src/content/articles/` 目錄中的 Markdown 檔案讀取，使用 mdsvex 編譯

### Requirement: 分類側邊欄
文章列表頁 SHALL 在桌面版左側顯示分類導覽側邊欄，包含分類選單和熱門標籤。

#### Scenario: 側邊欄在桌面版顯示
- **WHEN** 視窗寬度 >= 1024px
- **THEN** 左側顯示分類側邊欄（Categories、Trending Tags）

#### Scenario: 側邊欄在手機版隱藏
- **WHEN** 視窗寬度 < 1024px
- **THEN** 側邊欄隱藏或收合至頂部

### Requirement: 文章詳情頁
系統 SHALL 為每篇文章提供詳情頁面，包含標題、作者資訊、發布日期、封面圖、目錄 (TOC)、Markdown 內容。

#### Scenario: 文章詳情渲染
- **WHEN** 使用者點擊文章的 Read More 連結
- **THEN** 導覽至 `/blog/[slug]` 顯示完整文章內容

#### Scenario: 目錄展開/收合
- **WHEN** 文章詳情頁載入
- **THEN** 顯示可展開/收合的 Table of Contents，列出文章的 h2 標題

### Requirement: Markdown 文章格式
每篇 Markdown 文章 SHALL 支持 frontmatter 定義 metadata：title、slug、date、author、category、tags、excerpt、coverImage。

#### Scenario: Frontmatter 正確解析
- **WHEN** 文章 Markdown 檔案包含 frontmatter
- **THEN** metadata 正確用於文章列表和詳情頁的顯示
