---
category: 'ノウハウ'
title: 'Flutter の簡単な紹介と質疑応答'
excerpt: 'Flutter の簡単な紹介と質疑応答'
coverImage: ''
date: '2024-01-25T14:15:00.000Z'
author: 又川
---

# Flutter の簡単な紹介と質疑応答 (2024/01/25 14:15-15:00)

- 最初にやったこと
    - Cordova と同じく Xcode と Android Studio とシミュレータと実機の準備
    - IntelliJ と VSCode それぞれに Flutter 拡張があるが、VSCode の Flutter 拡張を利用
        - Flutter SDK のインストールは VSCode の Flutter 拡張が勝手にやってくれる。公式もそれを推奨している。
- VSCode の Flutter 拡張の使い勝手
    - あんまり良くない。ターミナルから flutter コマンドというのを叩いた方が早い。
      VSCode の Flutter 拡張でできることも flutter コマンドを叩くのとあまり変わらない。
    - IntelliJ の方が Flutter 拡張は充実している。コードのハイライトが VSCode に比べると充実してたり。
- 最初の実行まで
    - lib というディレクトリにアプリ本体を入れる。
    - 「flutter create .」で ios, android ディレクトリが作られる。ビルドまでは行われない。
        - Cordova で言うところの cordova prepare に似ているが、
          Flutter の場合 `ios`, `android` ディレクトリがビルド時に `../lib/` を見に行くような形になっているので、
          lib ディレクトリの中身を変更するたびに flutter create . を実行する必要はない。
    - flutter emulators とか flutter devices でエミュレータと実機を確認して、
      flutter run コマンドでアプリのビルドと実行ができる。
        - だがビルドの進捗状況が分かりにくいので
          Cordova と同じく Xcode や Android Studio で ios, android ディレクトリを開く方がやりやすい。
    - OS 向けのビルドもできるので、UI の実装とかは OS 向けのビルドでアプリを起動して実装した方が早い。
      ホットリロードも効く。
        - Cordova で言うところの、手元のブラウザで UI の実装をやる感じ。
- コードを書き始めてから感じた敷居
    - まず前提として、
      Web の知識が役に立たず、
      iOS と Android のネイティブアプリ開発の知識も役に立たず、
      おまけに Dart （プログラミング言語）の利用を強制されるので、
      Web エンジニアとネイティブアプリエンジニアは平等に不利。
        - Dart の文法は簡単なので途中までは雰囲気でなんとかなると感じた。ただ込み入ってくるとやっぱり本が必要。
    - アプリを作り始めるとウィジェットツリーというものを組んでいくことになるが、
      この敷居もちょっと高いと感じた。React の one-way dataflow みたいなややこしさがある。
      StatelessWidget と StatefulWidget というのがいきなり出てくるのだが、
      直感で違いを理解するのは無理なので本か何かを読む必要がある。
- ツール
    - 公式が Flutter Studio （ https://flutterstudio.app/ ）というのを出しているが、
      バグっていて使い物にならない。本にもバグっていると書いてある。
- デバッグ
    - Flutter DevTools というものがある。
- デファクトスタンダード
    - 現状は Riverpod というパッケージで状態管理をして、freezed というパッケージでモデルを作るのがデファクト。
      本にもよく載っている。
- おすすめの本
    - 日本語の本はとにかく少ない。5年で十数冊しか出ていない。
    - 選定した中だと『Flutter 3 入門』を今読んでいるがかなり良い。
- 質疑応答
  - Fさん: iOS/Android のコードを直接書きたい場合はどこに書く？
    - Tさん: ios, android ディレクトリに Swift, Kotlin のコードを書いて、Dart 側から MethodChannel で呼び出す。
    - 参考: https://docs.flutter.dev/platform-integration/platform-channels
  - Eさん: ページスタックはどうやって作る？
    - go_router で宣言的に作る。
      あとは context.go, context.push, context.pop などのメソッドでページ移動を行う。
  - Sさん: パフォーマンスは良い？
    - Flutter の仕組みとしてはパフォーマンスは出やすいが、実装を工夫しないと猛烈に重くなる場面はある。
  - Sさん: アニメーションはどうやって作る？
    - Flutter がアニメーション用の機能を豊富に提供しているので、画面遷移などの簡単なアニメーションはそれで作る。
