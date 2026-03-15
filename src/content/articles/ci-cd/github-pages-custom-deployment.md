---
title: GitHub Pages 自訂部署：從 Build 到上線的完整流程
slug: github-pages-custom-deployment
date: '2026-03-15'
author: Polo Huang
category: DevOps
tags:
  - CI/CD
  - GitHub Actions
  - GitHub Pages
  - SvelteKit
excerpt: 拆解 GitHub Pages 自訂部署的實作細節——GitHub Actions 如何知道要去哪抓你 build 好的靜態檔案？這篇用實際的 workflow 設定來說明整個流程。
coverImage: https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80
readTime: 5 min read
draft: false
---

## 前言

GitHub Pages 除了傳統的「從分支部署」之外，還支援透過 GitHub Actions 進行**自訂部署**。這種方式讓你可以在 CI 中執行任意 build 步驟，再把產出的靜態檔案部署上去。

但一個常見的疑問是：**GitHub Pages 怎麼知道要去哪抓我 build 好的檔案？** 這篇文章用一個實際的 SvelteKit 專案 workflow 來拆解整個流程。

---

## Workflow 全貌

以下是完整的 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: build

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

整個 workflow 分成 `build` 和 `deploy` 兩個 job，接下來逐一拆解。

---

## 第一步：Build Job

Build job 做的事情很直觀：

1. **Checkout** — 拉取程式碼
2. **Setup Node** — 安裝 Node.js 22，啟用 npm cache
3. **npm ci** — 安裝依賴
4. **npm run build** — 執行 SvelteKit 的靜態站台建置，產出檔案到 `build/` 目錄

到這裡為止都跟你在本機跑 `npm run build` 一樣。關鍵在最後一步。

### upload-pages-artifact

```yaml
- uses: actions/upload-pages-artifact@v3
  with:
    path: build
```

這個 action 做了兩件事：

1. 將 `build/` 目錄打包成 `.tar` 壓縮檔
2. 以**固定名稱 `github-pages`** 上傳為 GitHub Actions Artifact

這個固定名稱就是整個串接的關鍵——deploy job 不需要額外指定路徑，因為它會自動去找名為 `github-pages` 的 artifact。

---

## 第二步：Deploy Job

```yaml
deploy:
  needs: build
  runs-on: ubuntu-latest
  environment:
    name: github-pages
    url: ${{ steps.deployment.outputs.page_url }}
  steps:
    - id: deployment
      uses: actions/deploy-pages@v4
```

### needs: build

`needs: build` 確保 deploy job 在 build job 完成後才執行。這保證 artifact 已經上傳完畢。

### deploy-pages

`actions/deploy-pages@v4` 會自動從 artifact 儲存空間下載名為 `github-pages` 的 artifact，解壓後部署到 GitHub Pages。

整個過程不需要你指定任何路徑——命名慣例（convention over configuration）處理了一切。

### environment

```yaml
environment:
  name: github-pages
  url: ${{ steps.deployment.outputs.page_url }}
```

這段設定把 deploy 綁定到 GitHub 的 `github-pages` environment，讓你在 repo 的 Settings → Environments 頁面可以看到部署歷史和狀態。`url` 則會顯示在 Actions 的 deploy summary 中。

---

## Permissions 與安全性

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

- **contents: read** — 讀取 repo 程式碼（checkout 需要）
- **pages: write** — 寫入 GitHub Pages（部署需要）
- **id-token: write** — 用於 OIDC token 驗證，GitHub Pages 部署要求此權限

這遵循了最小權限原則——只給 workflow 完成任務所需的最低限度權限。

---

## Concurrency 控制

```yaml
concurrency:
  group: pages
  cancel-in-progress: false
```

`group: pages` 確保同一時間只有一個 Pages 部署在進行。`cancel-in-progress: false` 表示如果有新的 push 進來，不會取消正在進行的部署——讓當前部署完成後再處理新的。

---

## 流程總結

```
push to main
    ↓
Build Job:
    checkout → setup node → npm ci → npm run build
    ↓
    upload-pages-artifact（把 build/ 打包上傳，artifact 名稱固定為 "github-pages"）
    ↓
Deploy Job:
    deploy-pages（自動下載 "github-pages" artifact → 部署到 GitHub Pages）
    ↓
網站上線 ✓
```

核心概念就是 **artifact 作為兩個 job 之間的橋樑**，透過固定的命名慣例 `github-pages` 把 build 產出和部署串接起來。你在 `path: build` 指定的就是「哪個目錄的內容要部署」，剩下的 GitHub Actions 會自動處理。
