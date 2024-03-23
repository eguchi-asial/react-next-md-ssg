---
category: 'IT全般'
title: 'ChromeDevToolでresponse headerの上書きが可能になった'
excerpt: 'ChromeDevToolでresponse headerの上書きが可能になった'
coverImage: ''
date: '2023-05-26T18:10:00.000Z'
author: 江口
---

# Chrome DevTool113

- [Chrome DevTool113](https://developer.chrome.com/blog/new-in-devtools-113/)
	- response headerの上書きが可能になった
		- CORSエラーの一時的解消などが可能(access-control-allow-originなどが良い例)
			- https://github.com/ChromeDevTools/rfcs/discussions/4
				- Chrome開発者ツールのconsoleでawait fetch(\"https://example.com\")して、.headersに `access-control-allow-origin: *` を追加してretryすると取得できた。

文章だけだとわかりにくいかもなので、後日画面キャプチャ載せます。
