## 1. 首頁 Draft 過濾

- [x] 1.1 在 `src/routes/+page.ts` 的文章載入中加上 `metadata.draft !== true` 過濾條件

## 2. Blog 列表頁 Draft 過濾

- [x] 2.1 在 `src/routes/blog/+page.ts` 的文章載入中加上 `metadata.draft !== true` 過濾條件

## 3. Blog 詳情頁 Draft 過濾

- [x] 3.1 在 `src/routes/blog/[slug]/+page.ts` 的 `articleModules` 過濾中加上 `metadata.draft !== true` 條件
- [x] 3.2 確保 `entries()` 函式同樣排除 draft 文章的 slug

## 4. 驗證

- [x] 4.1 執行 `npm run build` 確認建置成功
