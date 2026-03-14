## ADDED Requirements

### Requirement: Hero Section
首頁 SHALL 包含 Hero section，展示個人品牌標語，格式參照 Stitch home_page 範例。

#### Scenario: Hero 區塊正確顯示
- **WHEN** 使用者造訪首頁 (`/`)
- **THEN** 顯示大標題文字，其中關鍵詞以 primary 色彩標示

### Requirement: 專案作品展示
首頁 SHALL 展示精選專案作品卡片，每張卡片包含封面圖、標題、類別標籤、描述、和「View Project」按鈕。

#### Scenario: 專案卡片排列
- **WHEN** 使用者瀏覽首頁的 Selected Projects 區塊
- **THEN** 專案卡片以交錯排列方式呈現（奇數左圖右文、偶數右圖左文），hover 時圖片放大

#### Scenario: 專案資料來源
- **WHEN** 網站 build 時
- **THEN** 專案資料從 `src/lib/data/` 中的靜態資料檔案讀取

### Requirement: 首頁 Responsive 設計
首頁 SHALL 在手機、平板、桌面裝置上正確顯示。

#### Scenario: 手機版卡片堆疊
- **WHEN** 視窗寬度 < 768px
- **THEN** 專案卡片以垂直堆疊方式排列，圖片在上、文字在下
