---
title: 'Azure OpenAI Serivce の使い方の紹介'
excerpt: 'Azure OpenAI Serivce の使い方の紹介'
coverImage: ''
date: '2023-11-30T14:00:00.000Z'
author: 又川
---

* Azure OpenAI Serivce の使い方の紹介
* https://learn.microsoft.com/ja-jp/azure/ai-services/openai/reference#chat-completions
* Server-Sent Events の相性
    * バックエンドとフロントエンドを Server-Sent Events で繋ごうとすると Azure Functions では C# を使わないとできない
    * https://dev.classmethod.jp/articles/aws-lambda-can-streaming-response/
    * https://vercel.com/docs/functions/streaming
    * Node.js で SSE をやろうとするととてもめんどくさい:
        * https://michaelangelo.io/blog/server-sent-events 
