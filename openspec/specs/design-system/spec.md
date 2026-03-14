## ADDED Requirements

### Requirement: 設計 Tokens 定義
系統 SHALL 定義以下設計 tokens，與 Stitch 範例保持一致：
- Primary: `#0d59f2`
- Background light: `#f5f6f8`
- Background dark: `#101622`
- 字體: Inter (sans-serif)
- 圓角: default `0.25rem`、lg `0.5rem`、xl `0.75rem`、full `9999px`

#### Scenario: 設計 tokens 在所有頁面生效
- **WHEN** 任意頁面使用 `bg-primary` 或 `font-display` 等 token class
- **THEN** 呈現對應的顏色和字體樣式

### Requirement: 共用導覽列元件
系統 SHALL 提供 `Navbar` 元件，包含：
- 左側 logo/品牌名稱
- 導覽連結（Work、About、Blog）
- Dark mode 切換按鈕
- 手機版 responsive 選單

#### Scenario: 導覽列在桌面版顯示所有連結
- **WHEN** 視窗寬度 >= 768px
- **THEN** 顯示水平排列的導覽連結

#### Scenario: 導覽列在手機版收合為選單
- **WHEN** 視窗寬度 < 768px
- **THEN** 導覽連結隱藏，顯示漢堡選單按鈕

### Requirement: 共用 Footer 元件
系統 SHALL 提供 `Footer` 元件，包含版權資訊和社群連結。

#### Scenario: Footer 在所有頁面顯示
- **WHEN** 使用者瀏覽任意頁面
- **THEN** 頁面底部顯示 Footer 元件

### Requirement: Dark Mode 切換
系統 SHALL 支持 dark/light mode 切換，使用 Tailwind `darkMode: 'class'` 機制。

#### Scenario: 切換主題
- **WHEN** 使用者點擊 theme toggle 按鈕
- **THEN** 頁面在 dark 和 light mode 之間切換，且偏好儲存在 localStorage

#### Scenario: 初次載入尊重系統偏好
- **WHEN** 使用者首次造訪網站且 localStorage 無偏好紀錄
- **THEN** 依據 `prefers-color-scheme` 媒體查詢決定初始主題

### Requirement: Icon 字型 FOUT 防護
系統 SHALL 在 Material Symbols 字型載入完成前隱藏 icon 元素，避免顯示原始文字。

#### Scenario: 字型載入前 icon 不顯示文字
- **WHEN** 頁面載入且 Material Symbols 字型尚未載入完成
- **THEN** `.material-symbols-outlined` 元素不可見（不顯示文字）

#### Scenario: 字型載入後 icon 正常顯示
- **WHEN** Material Symbols 字型載入完成
- **THEN** 所有 icon 元素正常顯示為圖示
