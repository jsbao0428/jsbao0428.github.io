---
date: 2026-01-07
tags:
  - ai
  - coding
  - claude-code
  - cursor
  - cli-agent
  - tools
  - comparison
created: 2026-01-07T12:00:00
---

## 前言

2024-2025 年，AI 編程工具百花齊放。從對話式 AI 到 IDE 整合，再到 CLI Agent，開發者有了前所未有的選擇。這篇文章整理我在評估各類工具後，最終選擇 Claude Code 的思考過程。

---

## 工具分類

在比較之前，先理清這些工具的本質差異：

| 類型 | 工具 | 特性 |
|------|------|------|
| **對話式 AI** | ChatGPT, Gemini, Grok | 通用對話介面，需複製貼上程式碼 |
| **IDE 整合** | Cursor | 編輯器內嵌，GUI 導向 |
| **CLI Agent** | Claude Code, Gemini CLI, Codex | 終端機操作，agentic 工作流 |

---

## 比較面向

### 1. 工作流整合度

| 工具 | 檔案操作 | Shell 執行 | Git 整合 |
|------|----------|------------|----------|
| ChatGPT/Gemini/Grok | ❌ | ❌ | ❌ |
| Cursor | ✅ 透過 IDE | ✅ | ✅ |
| Claude Code | ✅ 直接 | ✅ 完整 | ✅ 原生 |
| Gemini CLI | ✅ 直接 | ✅ 完整 | ✅ 原生 |
| Codex | ✅ 直接 | ✅ 完整 | ✅ 原生 |

**觀察**：CLI Agent 類工具能無縫融入現有終端機工作流，不需要切換視窗或改變習慣。

---

### 2. Context 能力

| 工具 | Codebase 索引 | 跨檔案理解 | Context 長度 |
|------|---------------|------------|--------------|
| ChatGPT | ❌ | ⚠️ 手動提供 | 128K |
| Gemini | ❌ | ⚠️ 手動提供 | 1M+ |
| Cursor | ✅ 自動 | ✅ | 依模型 |
| Claude Code | ✅ 自動 | ✅ | 200K |
| Gemini CLI | ✅ 自動 | ✅ | 1M+ |
| Codex | ✅ 自動 | ✅ | 依模型 |

**觀察**：對話式 AI 需要手動提供 context，而 IDE/CLI 工具能自動理解整個專案結構。

---

### 3. Agentic 程度

這是我最看重的面向——工具能否「自主完成任務」而非只是「回答問題」。

| 工具 | 多步驟規劃 | 錯誤自動修復 | 自主探索 |
|------|------------|--------------|----------|
| ChatGPT/Gemini/Grok | ❌ | ❌ | ❌ |
| Cursor | ✅ Agent Mode | ✅ | ✅ |
| Claude Code | ✅ | ✅ | ✅ |
| Gemini CLI | ✅ | ✅ | ✅ |
| Codex | ✅ | ✅ | ✅ |

**Cursor 模式說明**：

- **Ask Mode**：純問答，不修改檔案
- **Plan Mode**：規劃任務步驟
- **Agent Mode**：自主執行多步驟任務

**Claude Code 差異化優勢**：

- Terminal-native，不依賴 IDE 環境
- 可透過 MCP 整合外部服務（資料庫、API、瀏覽器等）
- Skill + Hook 實現高度客製化工作流
- 更深度的 codebase 探索能力（自動決定讀取策略）

---

### 4. 適用場景

| 場景 | 推薦工具 |
|------|----------|
| 快速問答、學習 | ChatGPT, Gemini |
| 日常編輯、小修改 | Cursor, IDE 整合工具 |
| 複雜重構、新功能開發 | **CLI Agent**, Cursor |
| 需要深度 codebase 理解 | **CLI Agent**, Cursor |
| 自動化工作流 (Skill, Hook) | **CLI Agent** |
| 多服務整合 (MCP) | **CLI Agent**, Cursor |

> **CLI Agent** 包含：Claude Code, Gemini CLI, Codex 等終端機 AI 工具

---

## 為什麼我有了 Cursor 還要使用 CLI Agent

Cursor Agent Mode 已經很強了，為什麼還需要 CLI Agent？

### CLI Agent 的獨特優勢

1. **Terminal-native**
   - 不需要打開 IDE，直接在終端機工作
   - 與 git、npm、docker 等工具無縫配合
   - 適合 SSH 遠端開發、伺服器環境

2. **更高的擴展性**
   - **Skill 系統**：自定義指令和工作流
   - **Hook 機制**：在特定事件觸發自動化
   - **MCP 整合**：連接資料庫、API、瀏覽器等外部服務

3. **不綁定特定編輯器**
   - Cursor 綁定 VS Code 生態
   - CLI Agent 可搭配任何編輯器使用（Vim、Emacs、JetBrains 等）

### 什麼時候用 CLI Agent

- 複雜的多檔案重構任務
- 需要自動化的重複性工作流
- 遠端 SSH 開發環境
- 想要自定義 Skill 和 Hook

### 什麼時候用 Cursor

- 精確定位要修改的程式碼
- 需要視覺化 diff 比較
- 快速的小修改
- 偏好 GUI 介面操作

### CLI Agent 的限制

老實說，CLI Agent 不是萬能的：

- **定位修改位置較困難**：需要透過描述或貼上程式碼片段來指定位置，不像 IDE 可以直接選取
- **依賴 AI 的判斷**：有時候會自己決定要修改哪裡，不一定是你想要的位置
- **缺乏視覺化 diff**：雖然有 diff 輸出，但不如 IDE 的 side-by-side 比較直觀

### 我的最佳組合推薦

經過實際使用，我認為最有效率的組合是：

```plaintext
Claude Code(CLI Agent) + Cursor (或類似 IDE) + Git
```

**分工方式**：

| 工具               | 負責任務                      |
| ---------------- | ------------------------- |
| **Claude Code(CLI Agent)**  | 複雜任務規劃、多檔案重構、自動化流程、MCP 整合 |
| **Cursor (或類似 IDE)** | 精確定位修改、視覺化 diff、快速小修改     |
| **Git**          | 版本控制、變更審查、安全 roll back              |

**為什麼不只用 Cursor Agent Mode？**

Cursor Agent Mode 確實能做到類似的事，但：

- 缺少 Skill 系統，無法自定義工作流
- 缺少 Hook 機制，無法在特定事件觸發自動化
- 綁定在 VS Code 環境，無法在純終端機使用

**結論**：CLI Agent + IDE 是互補而非競爭關係。用 Claude Code 處理「思考」，用 IDE 處理「精修」。

---

## 結語：兩種不同的 AI 協作哲學

選擇 Cursor 還是 CLI Agent，其實反映了兩種不同的 AI 協作哲學：

**Cursor：你主導，AI 協助**
- 像是一個好用的協作工具
- 你掌控一切，AI 在旁邊給建議
- 適合喜歡親力親為、掌握每個細節的開發者

**CLI Agent：AI 執行，你審核**
- 更像是一個真正的實習生或助手
- 你的角色轉變為 **Reviewer** 或 **Spec Designer**
- 工作流變成：寫好文件/需求 → Agent 執行 → 人類審核結果

AI Coding 已經是進行式。隨著工具越來越成熟，開發者的角色也在演變——從「寫程式的人」逐漸轉向「定義問題、審核結果的人」。

正如[高見龍](https://kaochenlong.com/)所說：

> 以前常說，時間花在哪，成就就在哪，這是加法時代；現在會說，把能力點在哪，AI 就放大哪，這是乘法時代。
>
> 加法時代，勤能補拙；乘法時代，零乘一千還是零。
>
> 會問問題，現在問得更精準、挖得更深；不會問，只會更快地得到一堆沒用的答案。有判斷力，讓 AI 幫忙過濾、加速決策；沒判斷力，會被超有自信的 AI 唬得更慘。
>
> **AI 是能力放大器，放大的是你本來就有的東西，原本沒有的，想放也放不大。工具會一直換，基本功不會貶值。**

沒有完美的工具，只有適合的工具。如果你還在觀望，建議實際試用再做決定。

---

## 相關資源

- [[Claude Code Skill 完整指南]]
- [Claude Code 官方文件](https://docs.anthropic.com/en/docs/claude-code)
- [MCP 協議說明](https://modelcontextprotocol.io/)

---

## 更新記錄

- 2026-01-07：初稿
