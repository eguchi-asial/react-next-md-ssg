---
category: 'AI'
title: 'Next.jsでGemini動かしてみた'
excerpt: 'Next.jsでGeminiをSDK使って動かしてみた所感'
coverImage: ''
date: '2024-05-29T05:35:00.000Z'
author: 岩尾
---

# Next.jsでGemini動かしてみた

## Geminiとは

https://gemini.google.com/app

上記にて、「Geminiを簡単に3行で説明して紹介してください。」と質問した結果

- Gemini：Google AIの最新言語モデル
  - 多様なタスクをこなす: 文章作成、リスト作成、計画立案、知識習得など、幅広いタスクをサポートします。
  - 常に最新の情報: 最新の情報に常にアクセスし、最新の知識を提供します。
  - 日本語にも対応: 日本語を含む様々な言語に対応しており、日本語での会話も可能です。

## 使った技術

- SDK
  - Google generative ai

- フロント
  - Next.js 14、Typescript


## API Key取得

- Google AI StudioでAPIキーを作成する
  - [https://aistudio.google.com/](https://aistudio.google.com/)

## step 1.  SDKをinstallする

`npm install @google/generative-ai`

[https://ai.google.dev/tutorials/get_started_node?hl=ja](https://ai.google.dev/tutorials/get_started_node?hl=ja)

## step 2. modelの初期化

```.js

import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// …
const model = genAI.getGenerativeModel({ model: "MODEL_NAME "});
→modelを指定することでできることが変わる


各モデルはこちら
https://ai.google.dev/models/gemini


```

## step 3. テキストを渡して何か返してもらう

```.js
const genAI = new GoogleGenerativeAI(APIキー);
const model = genAI.getGenerativeModel({ model: "gemini-pro"});
const prompt = "{プロンプト}"
const result = await model.generateContent(prompt);
const response = await result.response;
const text = response.text();


これだけで生成されたテキストが返ってきました。

```

## next step

- Gemini API を使用して様々なユースケースを試してみる
  - テキストのみの入力からテキストを生成する
  - テキストと画像の入力からテキストを生成する（マルチモーダル）
  - マルチターンの会話を構築する（チャット）

## まとめ

- よかった点
  - 結構簡単に動いた
　- SDKなので組み込み自体は苦労しなかった

- 課題点
  - まだやれることは少ないかも
    - 画像や音楽の生成はできない
    - 他ベンダのAIと比較して試してみたい
