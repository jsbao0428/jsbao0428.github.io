## ADDED Requirements

### Requirement: Icon 字型 FOUT 防護
系統 SHALL 在 Material Symbols 字型載入完成前隱藏 icon 元素，避免顯示原始文字。

#### Scenario: 字型載入前 icon 不顯示文字
- **WHEN** 頁面載入且 Material Symbols 字型尚未載入完成
- **THEN** `.material-symbols-outlined` 元素不可見（不顯示文字）

#### Scenario: 字型載入後 icon 正常顯示
- **WHEN** Material Symbols 字型載入完成
- **THEN** 所有 icon 元素正常顯示為圖示
