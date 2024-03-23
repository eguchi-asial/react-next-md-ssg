---
category: 'AI'
title: 'PyTorchによる株価予測モデルの構築'
excerpt: 'PyTorchによる株価予測モデルの構築'
coverImage: ''
date: '2024-03-07T12:10:00.000Z'
author: 木谷
---

# PyTorchによる株価予測モデルの構築

## PyTorchとは

Pythonのオープンソース機械学習用ライブラリ。
Meta(旧Facebook)社のAI研究グループにより開発。

他にはKeras, TensorFlowが代表的なライブラリであるが、
中でも1番新しく、カスタマイズ性の高さ、柔軟な実装が可能。

できることは自然言語処理、音声認識、時系列解析など。


## 時系列データ解析とは

時間経過によって変化するデータがどのように変化するか、AIが規則性を学習し予測する統計手法の一種。
　
例）気温、売上、株価 etc.


![画像1](https://tech-arekore.vercel.app/images/pytoach-stock-price1.png)


## テスト結果（data=1000&seq=30)

![テスト結果（data=1000&seq=30)](https://tech-arekore.vercel.app/images/pytoach-stock-price2.png)

## テスト結果（data=1000&seq=1)

![テスト結果（data=1000&seq=1)](https://tech-arekore.vercel.app/images/pytoach-stock-price3.png)

## テスト結果（data=300&seq=30)

データの数は重要！

![テスト結果（data=300&seq=30)](https://tech-arekore.vercel.app/images/pytoach-stock-price4.png)

## CPUとGPUでの学習時間

- CPU、GPUそれぞれで学習にかかる時間を計測

（条件：学習回数100回、学習データ1000個、
　　　　GPU：GeForce RTX 2060）

- 結果

　⇨CPU: 395.6(s)
　　GPU: 388.3(s)  約1.85(%)減少

- 学習条件次第では、10倍程度速くなることも。

