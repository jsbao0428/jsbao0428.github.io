## ADDED Requirements

### Requirement: Draft frontmatter field
文章的 YAML frontmatter SHALL 支援可選的 `draft` 布林欄位。未設定時預設為 `false`。

#### Scenario: Article with draft: true
- **WHEN** 文章 frontmatter 包含 `draft: true`
- **THEN** 該文章 SHALL 被所有公開頁面排除

#### Scenario: Article without draft field
- **WHEN** 文章 frontmatter 未包含 `draft` 欄位
- **THEN** 該文章 SHALL 正常顯示（視為非草稿）

#### Scenario: Article with draft: false
- **WHEN** 文章 frontmatter 包含 `draft: false`
- **THEN** 該文章 SHALL 正常顯示
