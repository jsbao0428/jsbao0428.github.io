## ADDED Requirements

### Requirement: 文章列表頁
Blog 列表頁 SHALL 載入所有文章並依日期排序。載入時 SHALL 排除 `draft: true` 的文章。每篇包含封面圖、分類、標題、摘要、作者、日期。封面圖和標題 SHALL 可點擊進入文章詳情頁。

#### Scenario: 文章列表渲染
- **WHEN** 使用者造訪 `/blog` 頁面
- **THEN** 文章以列表形式展示，每篇有封面圖（左）和內容（右），hover 時圖片放大

#### Scenario: 文章資料來源
- **WHEN** 網站 build 時
- **THEN** 文章從 `src/content/articles/` 目錄中的 Markdown 檔案遞迴讀取（支援子資料夾），使用 mdsvex 編譯

#### Scenario: 點擊封面圖或標題進入文章
- **WHEN** 使用者點擊文章的封面圖或標題
- **THEN** 導覽至 `/blog/[slug]` 顯示完整文章內容

#### Scenario: Draft article excluded from blog list
- **WHEN** 存在一篇 `draft: true` 的文章
- **THEN** 該文章 SHALL 不出現在 blog 列表頁中

### Requirement: 分類篩選
文章列表頁 SHALL 在桌面版左側顯示分類導覽側邊欄，分類和標籤從文章 frontmatter 動態產生，點擊可篩選文章。

#### Scenario: Category 篩選
- **WHEN** 使用者點擊側邊欄的某個分類
- **THEN** 文章列表 SHALL 只顯示該分類的文章，分類按鈕高亮為 primary 色

#### Scenario: Tag 篩選
- **WHEN** 使用者點擊側邊欄的某個標籤
- **THEN** 文章列表 SHALL 只顯示含該標籤的文章，標籤高亮為 primary 色

#### Scenario: 取消篩選
- **WHEN** 使用者點擊已選中的標籤或點擊 "All Articles" 分類
- **THEN** 篩選條件清除，顯示所有文章

### Requirement: 文章詳情頁
系統 SHALL 為每篇文章提供詳情頁面，包含標題、作者資訊、發布日期、封面圖、Markdown 內容，以及底部的留言區。`draft: true` 的文章 SHALL 不可被載入。

#### Scenario: 文章詳情渲染
- **WHEN** 使用者進入 `/blog/[slug]` 頁面
- **THEN** 顯示完整文章內容，Markdown 使用 `@tailwindcss/typography` 的 prose class 渲染格式

#### Scenario: 留言區顯示
- **WHEN** 文章詳情頁載入
- **THEN** 文章內容下方、「Back to Blog」連結上方顯示 Giscus 留言 widget

#### Scenario: Draft article not accessible by slug
- **WHEN** 使用者嘗試存取 `draft: true` 文章的 slug 路由
- **THEN** 該路由 SHALL 不存在（不產生 prerender 路由）

### Requirement: 文章頁右側 Sidebar
文章詳情頁 SHALL 在桌面版右側顯示 sticky sidebar，包含 Table of Contents 和 Share 按鈕。

#### Scenario: TOC 自動生成
- **WHEN** 文章詳情頁載入
- **THEN** sidebar 從文章的 h2 標題（透過 rehype-slug 產生 id）自動生成目錄列表

#### Scenario: TOC 滾動追蹤
- **WHEN** 使用者滾動文章內容
- **THEN** 目錄中當前可見章節 SHALL 高亮（primary 色 + 左邊框）

#### Scenario: TOC 點擊跳轉
- **WHEN** 使用者點擊目錄項目
- **THEN** 頁面 SHALL smooth scroll 到對應標題，並預留 navbar 高度的 offset（scroll-mt-20），同時立即更新 active 狀態

#### Scenario: Share 按鈕
- **WHEN** 文章詳情頁載入
- **THEN** sidebar 底部顯示三個分享按鈕：Twitter（X）、LinkedIn、複製連結

#### Scenario: 複製連結回饋
- **WHEN** 使用者點擊複製連結按鈕
- **THEN** 當前頁面 URL 複製到剪貼簿，icon 變為 check 1.5 秒後恢復

### Requirement: 巢狀文章資料夾
系統 SHALL 支援 `src/content/articles/` 下的子資料夾組織文章，URL 路由以 frontmatter 的 slug 欄位為準。

#### Scenario: 子資料夾文章被正確載入
- **WHEN** 文章放在 `src/content/articles/examples/` 等子資料夾
- **THEN** 文章 SHALL 被遞迴掃描並正確顯示在列表和詳情頁

#### Scenario: Slug 來自 frontmatter
- **WHEN** 系統建構路由時
- **THEN** SHALL 使用 frontmatter 的 `slug` 欄位作為 URL path，而非檔名

### Requirement: Markdown 文章格式
每篇 Markdown 文章 SHALL 支持 frontmatter 定義 metadata：title、slug、date、author、category、tags、excerpt、coverImage、readTime。

#### Scenario: Frontmatter 正確解析
- **WHEN** 文章 Markdown 檔案包含 frontmatter
- **THEN** metadata 正確用於文章列表和詳情頁的顯示

### Requirement: Homepage recent articles
首頁 SHALL 載入最新 3 篇文章顯示於 Recent Articles 區塊。載入時 SHALL 排除 `draft: true` 的文章。

#### Scenario: Draft article excluded from homepage
- **WHEN** 存在一篇 `draft: true` 的文章
- **THEN** 該文章 SHALL 不出現在首頁 Recent Articles 列表中

### Requirement: Prerender entries
`entries()` 函式 SHALL 只回傳非草稿文章的 slug，確保草稿文章不產生靜態路由。

#### Scenario: Draft article excluded from prerender
- **WHEN** 執行 build 產生靜態路由
- **THEN** `draft: true` 的文章 SHALL 不包含在 `entries()` 回傳值中
