---
category: 'IT全般'
title: 'Vue2がEOLに(2023/12/31) / Vue2 NESもあるよ'
excerpt: 'Vue2がEOLに。Vue3への移行が推奨されるも、Vue2 NESでVue3を使い続けることも可能'
coverImage: ''
date: '2024-01-24T00:00:00.000Z'
author: 江口
---

# Vue2がEOL

Vue2が2023/12/31でEOLになりました。

最終バージョンは[2.7.16](https://github.com/vuejs/vue/releases/tag/v2.7.16)となっています。

公式) https://v2.vuejs.org/eol/

以下要約

* Vue3とそのエコシステムが成熟したためVue3に専念する
* 新規PJはVue3ではじめてください
* 現在のVue2PJもガイドを参考に移行を推奨します
  * https://v3-migration.vuejs.org/
* Vue2を使い続けなければならないが、メンテナンスされていないソフトウェアに関するコンプライアンス要件やセキュリティ要件も必要な場合は[HeroDevsのVue2 NES](https://ja.herodevs.com/support/nes-vue?utm_source=vuejs-org&utm_medium=vue2-eol-banner) を参照
  * Vue 2用のExtended LTSを提供
  * NES = Never-Ending Support
  * 移行せずに安全性を維持
  * NES Vue 2を使用すると、Vue2アプリケーションを実行し続けることができる
    * Vueのソースコードの脆弱性を継続的にスキャン
    * 脆弱性発見から14日以内の修正
    * ブラウザの互換性を維持する
      * Chrome
      * FireFox
      * Safari
      * Microsoft Edge
    * 依存ライブラリのサポート維持する
      * Vue2に依存する一般的なソフトウェアパッケージのサポートを拡張する
        * Nuxt2
        * VueRouter
        * VueX
        * Vuetify2
        * BootstrapVue2
    * つまり、Vue2NES は、Vue2 LTS期間中に享受したサポートを無期限に継続
    * Vue2.7が必要
    * 有料/要問合
  * Vue2だけじゃなく、色々なNESがある: https://ja.herodevs.com/pricing
* HeroDevs
  * EOL技術の移行サポート専門サービス
