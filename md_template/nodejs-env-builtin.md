---
title: 'Node.js v20.6.0から.envがbuiltinサポート'
excerpt: 'Node.js v20.6.0から.envがbuiltinサポート'
coverImage: ''
date: '2023-09-26T18:10:00.000Z'
author: 江口
---

# Node.js v20.6.0から.envがbuiltinサポート


- v20.6.0より、.envサポートされる
	- https://github.com/nodejs/node/blob/main/doc/changelogs/CHANGELOG_V20.md#built-in-env-file-support
- INI ファイル形式
	- ex) PASSWORD=nodejs
- `node --env-file=config.env index.js`
	- アクセス方法) process.env.PASSWORD
- dotenvとか代用してたlibが不要になる
