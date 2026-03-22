---
title: 初探 Kafka, CDC 實作
slug: getting-start-kafka
date: '2026-03-21'
author: Polo Huang
category: Kafka
tags:
  - Kafka
excerpt: 初探 Kafka，了解 Kafka 的基本概念和使用方法，並實作 CDC。
coverImage: https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80
readTime: 10 min read
draft: true
---

## 前言

Kafka 是一個分散式流處理平台，主要用於實現高吞吐量、低延遲的資料處理。Kafka 的設計理念是將資料流化，使得資料可以被分散式地處理，從而實現高吞吐量、低延遲的資料處理。
CDC (Change Data Capture) 是一種技術，用於捕獲資料庫中的變更，並將其發送到 Kafka 中。

## 實作

### 1. 各服務介紹

Service:
  Kafka Broker
  Kafka Connect Worker

Connector 是基於 Kafka Connect Worker 的 plugin

- Debezium: 一個開源的 CDC 工具，用於讀取資料庫中的變更，並將其轉換為發送到 Kafka 中。
- JDBC Sink: 用於將 Kafka 中的資料寫入到資料庫中。
  
Source:

- MySQL(Source): 來源資料庫
- MySQL(Sink): 目標資料庫
