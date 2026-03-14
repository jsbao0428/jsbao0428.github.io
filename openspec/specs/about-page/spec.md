## ADDED Requirements

### Requirement: 個人資訊區塊
關於我頁面 SHALL 在頂部展示個人大頭照、姓名、職稱、所在地，並提供 Contact Me 和 Download Resume 按鈕。

#### Scenario: 個人資訊正確顯示
- **WHEN** 使用者造訪 `/about` 頁面
- **THEN** 顯示圓形大頭照、姓名、職稱、地點資訊

### Requirement: 統計數據展示
頁面 SHALL 顯示統計數據卡片（如年資、專案數、獎項數），以三欄 grid 排列。

#### Scenario: 統計數據卡片渲染
- **WHEN** 使用者瀏覽統計區塊
- **THEN** 數據以 primary 色彩的數字 + 標籤格式展示

### Requirement: 專業技能標籤
頁面 SHALL 展示技能標籤列表（tag chips），使用 `rounded-full` 樣式。

#### Scenario: 技能標籤顯示
- **WHEN** 使用者瀏覽 Expertise 區塊
- **THEN** 技能以 pill 形式的標籤排列展示

### Requirement: 工作經歷時間軸
頁面 SHALL 以時間軸 (timeline) 形式展示工作經歷，包含公司名稱、職稱、時間、描述。

#### Scenario: 時間軸正確渲染
- **WHEN** 使用者瀏覽 Work Experience 區塊
- **THEN** 經歷以垂直時間軸排列，最新的在上方，每項有圖示和連接線

### Requirement: 學歷區塊
頁面 SHALL 展示學歷資訊。

#### Scenario: 學歷顯示
- **WHEN** 使用者瀏覽 Education 區塊
- **THEN** 顯示學位名稱、學校、就讀期間
