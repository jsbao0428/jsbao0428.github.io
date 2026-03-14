## 1. Icon 字型 FOUT 修復

- [x] 1.1 在 `src/app.css` 新增 `.material-symbols-outlined` 預設隱藏樣式（`visibility: hidden`）
- [x] 1.2 在 `src/app.html` 新增 `document.fonts.ready` 偵測腳本，字型載入完成後移除隱藏
- [x] 1.3 驗證 `npm run build` 正常通過，確認頁面載入時 icon 不再閃爍文字
