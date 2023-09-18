---
title: 'Privacy Sandboxによる3rd party Cookie廃止とPrivate Sandbox APIの紹介'
excerpt: 'Privacy Sandboxによる3rd party Cookie廃止とPrivate Sandbox APIの紹介'
coverImage: ''
date: '2023-09-10T12:42:00.000Z'
author: 江口
---

- [Privacy Sandbox](https://privacysandbox.com/intl/ja_jp/)
	- Chrome
	- インターネット上のプライバシー保護を目的とした取り組み
	- 主な目的
		- 3rdパーティCookieを廃止(2024 ~ 段階的に廃止)
			- 3rdパーティCookie: アクセスしたWebサイトと異なるドメインが発行したCookieのこと
		- サイト間のトラッキングでプライバシー情報をマスクする
		- Cookie廃止の代替手段として `Private Sandbox API` を提供
	- 色々なAPIは10月から一般機能の利用開始
	- Private State Tokens API(Chrome 117から利用可能)
		- reCaptch(私はロボットではありませんのあれ。Botかどうかのチェック)の利用状況から信頼性を証明・認証するためのAPI
			- Chrome DevtoolからApplicationタブからトークンの確認ができる
	- Topics API
		- ユーザーの興味のあるトピックを提案するAPI
			- Chromeでは閲覧履歴から提してた(Cookieを利用)
	- Protected Audience API
		- サイト訪問者にリマーケティングをするためのAPI
			- 従来はCookieを使って閲覧履歴・行動履歴を追跡してたが、廃止されてこのAPIが使われる
		- 広告会社の配布jsが中で使うと思うので、我々が直接書き換えたりする機会はないと思われる
	- First-Party-Sets
		- 別ドメイン間で限定的に3rdパーティCookieを許可する
			- ドメインをまたいでCookieを共有できる
				- Github上のjsonファイルを申請して共有できるようになる
	- Shared Storage API
		- ドメインが異なっていても共有できるStorage
	- Fenced Frame API
		- iframeみたいなやつ
		- `Private Sandbox API` を埋め込みコンテンツからも利用できるようにするもの
