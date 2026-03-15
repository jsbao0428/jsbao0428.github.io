## MODIFIED Requirements

### Requirement: Homepage recent articles
首頁 SHALL 載入最新 3 篇文章顯示於 Recent Articles 區塊。載入時 SHALL 排除 `draft: true` 的文章。

#### Scenario: Draft article excluded from homepage
- **WHEN** 存在一篇 `draft: true` 的文章
- **THEN** 該文章 SHALL 不出現在首頁 Recent Articles 列表中

### Requirement: Blog list page
Blog 列表頁 SHALL 載入所有文章並依日期排序。載入時 SHALL 排除 `draft: true` 的文章。

#### Scenario: Draft article excluded from blog list
- **WHEN** 存在一篇 `draft: true` 的文章
- **THEN** 該文章 SHALL 不出現在 blog 列表頁中

### Requirement: Blog detail page
Blog 詳情頁 SHALL 依 slug 載入單篇文章。`draft: true` 的文章 SHALL 不可被載入。

#### Scenario: Draft article not accessible by slug
- **WHEN** 使用者嘗試存取 `draft: true` 文章的 slug 路由
- **THEN** 該路由 SHALL 不存在（不產生 prerender 路由）

### Requirement: Prerender entries
`entries()` 函式 SHALL 只回傳非草稿文章的 slug，確保草稿文章不產生靜態路由。

#### Scenario: Draft article excluded from prerender
- **WHEN** 執行 build 產生靜態路由
- **THEN** `draft: true` 的文章 SHALL 不包含在 `entries()` 回傳值中
