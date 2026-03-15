## Why

Contact popover 的 Email 項目目前使用 `mailto:` 連結，很多使用者沒有設定預設郵件客戶端，體驗很差。改成直接顯示完整 email 地址並提供一鍵複製功能，更實用。

## What Changes

- Email 項目改為顯示完整地址文字 + 複製按鈕
- 點擊後複製到剪貼簿，並顯示「Copied!」回饋
- 其他聯絡項目（LinkedIn、GitHub）維持不變

## Capabilities

### New Capabilities

（無）

### Modified Capabilities

- `contact-popover`: Email 項目從 mailto 連結改為顯示地址 + 一鍵複製

## Impact

- `src/lib/components/ContactPopover.svelte` — 修改 Email 項目的渲染邏輯
- `src/lib/data/profile.ts` — Email 項目標記為 copyable
