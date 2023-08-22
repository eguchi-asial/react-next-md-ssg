---
title: 'docker init紹介'
excerpt: 'docker init コマンドでプロジェクトに必要そうなファイルを検査し、自動でDockerfileを生成してくれる'
coverImage: ''
date: '2023-06-23T18:10:00.000Z'
author: 江口
---

- [docker init]([docker init | Docker Documentation](https://docs.docker.com/engine/reference/commandline/init/#:~:text=Initialize%20a%20project%20with%20the%20files%20necessary%20to,files%20with%20sensible%20defaults%20for%20your%20project%3A.dockerignore%20Dockerfile))
	- 5/11にdocker descktop  v4.18で追加された。まだBetaなので、本番運用は推奨しない。
	- docker init でプロジェクトに必要そうなファイルを検査し、自動でDockerfileを生成する
	- 既にDockerfileがある場合はErrorらしい
	- 試しにnestjsでやってみたら、multi stage buildなDockerfileが作られた
