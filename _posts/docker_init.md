---
category: 'ノウハウ'
title: 'docker init紹介'
excerpt: 'docker init コマンドでプロジェクトに必要そうなファイルを検査し、自動でDockerfileを生成してくれる'
coverImage: ''
date: '2023-06-23T18:10:00.000Z'
author: 江口
---

- [docker init](https://docs.docker.com/engine/reference/commandline/init/)
	- 5/11にdocker descktop  v4.18で追加された。まだBetaなので、本番運用は推奨しない。
	- docker init でプロジェクトに必要そうなファイルを検査し、自動でDockerfileを生成する
	- 既にDockerfileがある場合はErrorらしい
	- 試しにnestjsでやってみたら、multi stage buildなDockerfileが作られた
