---
title: 'web platform baseline発表'
excerpt: 'Google I/O 2023で発表された。「Web Platform Baseline」について紹介'
coverImage: ''
date: '2023-06-23T18:10:00.000Z'
author: 江口
---

- [web platform baseline]([ベースライン (web.dev)](https://web.dev/baseline/))
	- Google I/O 2023で発表された。 **「Web Platform Baseline」は、Webプラットフォームの機能がどのブラウザで安全に使用できるかを明確にするためのプロジェクト。** このプロジェクトは、Google、Mozilla、Microsoft、Appleなどのブラウザベンダーが協力して進められています。このプロジェクトでは、Chrome、Edge、Firefox、Safariなどの **主要ブラウザの最新バージョンと前バージョンでサポートされている機能が「ベースライン」として定義されています。** Web開発者は、ベースラインに含まれる機能を使用することで、ブラウザ互換性について心配することなくWebアプリケーションを開発することができます。また、「MDN Web Docs」や「web.dev」などのWebサイトでもベースラインに関する情報が提供されています。
	- [MDN](https://developer.mozilla.org/ja/docs/Web)
		- Web技術に関するドキュメントを提供するウェブサイト
	- wev.dev
		- Googleが開発しているwebサイトのパフォーマンスやアクセシビリティを分析・学習できるサイトWebアプリケーションの速度やアクセシビリティなどを判定するツールや、よりよいWebアプリケーションを開発するためのガイダンスなどを提供しています。

	- Baseline
		- Baselineはブラウザ間の互換性が保たれているAPIを、開発者に分かりやすく示していこうという取り組み。MDNや[http://web.dev](https://t.co/nqTxLjCTWk)でBaselineを満たす機能には以下の画像のようなマークが付くらしい。どこでみれる？？
			- enjaはみれない
			- ex) grid en: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template#browser_compatibility
			- ex) grid ja https://developer.mozilla.org/ja/docs/Web/CSS/grid-template
		- 最新のブラウザ&一個前のversionで安定して動作するかを色で示す
			- 緑) その機能がブラウザの最新および以前のメジャーリリースで動作することが信頼
			- 黄) その機能を本格使用する前に、より多くのブラウザで調査とテストを行うか、ベースラインになるのを待つ必要がある
		- 今後、開発指標として、Baseline認定されたWebAPIで実現できる機能のみ対象など、言語化されるかも？？
	- 参考) https://developer.mozilla.org/en-US/blog/baseline-unified-view-stable-web-features/
 