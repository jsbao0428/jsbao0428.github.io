## ADDED Requirements

### Requirement: Giscus 留言 widget 嵌入
系統 SHALL 在每篇 blog 文章詳情頁底部顯示 Giscus 留言 widget，位於文章內容與「Back to Blog」連結之間。

#### Scenario: 留言區渲染
- **WHEN** 使用者造訪 `/blog/[slug]` 頁面
- **THEN** 文章內容下方顯示 Giscus 留言 widget，訪客可透過 GitHub 帳號登入後留言

#### Scenario: 留言區延遲載入
- **WHEN** 頁面載入時
- **THEN** Giscus script 使用 `loading="lazy"` 延遲載入，減少初始頁面載入時間

### Requirement: 主題同步
留言 widget SHALL 自動跟隨網站的 dark/light mode 切換主題。

#### Scenario: 初始主題匹配
- **WHEN** Comment 元件掛載時
- **THEN** Giscus 主題根據當前網站主題設定（dark 或 light）

#### Scenario: 動態主題切換
- **WHEN** 使用者透過 ThemeToggle 切換 dark/light mode
- **THEN** Giscus widget 即時切換至對應主題，無需重新載入頁面

### Requirement: Discussion mapping
系統 SHALL 使用 URL pathname 作為 Discussion mapping 策略，每篇文章自動對應一個 GitHub Discussion。

#### Scenario: 文章與 Discussion 對應
- **WHEN** 使用者在 `/blog/my-article` 頁面留言
- **THEN** 留言儲存於 repo 的 GitHub Discussions 中，Discussion 標題為該頁面的 pathname
