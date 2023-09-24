---
title: 'ExpoでReactNativeの開発体験を爆上げする'
excerpt: 'ExpoでReactNativeの開発体験を爆上げする'
coverImage: ''
date: '2023-09-24T18:10:00.000Z'
author: 江口
---

# [Expo](https://expo.dev/)

- ReactNativeのエコシステム。Monacaみたいなもので、実機でのdebugをExpoGOというアプリを通じてライブプレビューできたり、react nativeが提供するNativSDKをより扱いやすくしたラッパーを提供するなど開発体験の向上につながるシステム
  - [ReactNativeとの違い](https://docs.expo.dev/faq/#what-is-the-difference-between-expo-and-react-native)
    - 複雑な React Native アプリケーションの開発と拡張を容易(主にNative機能周り)にする一連の機能・SDK(Expo SDK)を提供
      - [EXPOのコアコンセプト](https://docs.expo.dev/core-concepts/)
        - [ExpoSDK](https://docs.expo.dev/versions/latest/)
          - カメラやジャイロといったNativeSDKへのアクセスサポート
          - Android5、iOS13以降をサポート
        - [ExpoCli](https://docs.expo.dev/more/expo-cli/)
          - 開発ツール
            - ex) expo start ios, expo start web, expo start android etc...
        - [ExpoGoアプリ](https://docs.expo.dev/get-started/expo-go/)
          - Android および iOS デバイス上で React Native アプリをOSSテストアプリ
            - アプリストアから無料でDLできる

- [EAS ( Expo Application Services ) ](https://expo.dev/eas)
  - EXPOは開発体験の向上を提供してくれるが、各ストアへのリリースは大変。EASは以下のツールでリリースサポートもしてくれる。ただし有料
    - EAS build
      - Expo製のアプリをクラウド上でbuildしてくれるサービス
        - iOS/Androidそれぞれ署名まで担ってくれる
    - EAS submit
      - storeに提出するサービス
        - クラウド上で実行されるため、windowsからでもリリース可能

- ExpoGoを使って実機で動作確認する
  - 動作検証環境
    - node 18.17.1
    - npm 9.6.7
  -  `expo start` でQAコードがterminalに表示されるのでiPhoneアプリ「Expo GO」をinstallしてあると実機でdebugできる
  - 例えば、Nativeのcomponent `StatusBar` は、 from 'react-native' よりカスタマイズできるが、Expoも `StatusBar` from 'expo-status-bar' より提供しているが、これはreact-nativeの `StatucBar` をラップした形で構築されている
    - カスタマイズを細かく指定する必要があるなら、react-nativeのcomponent使えばよろしでOK??

- 所感
  - ハイブリッドかつNativeアプリをweb技術で開発でき、またdebugもlive previewできるのは開発体験として非常に気持ち良い
  - 本番build/deployだけ自前で行い、開発までならExpo, ReactNativeの開発は快適でオススメ
  - ReactNative自体にあまり精通していないので実際にtech-arekoreをアプリ化しながら手探りで学んでみたが、Native周りでカスタマイズ性が高い場合は、ReactNativeの提供するSDKでカスタムした方がいいという理解でOK??さらに細かいカスタマイズならSwift/Kotlinでpluginをさらに自作するって感じかも
  - ReactNative寄りの話だけど、HTMLタグはそのまま使えない。たとえばpタグ相当ならTextタグul/liタグ相当ならFratListを使う。tech-arekoreの仕様上、markdownをパースして表示する必要があったため、以下の手順を踏む必要があった。
    - markdownのhtml文字列変換
      - ex) marked, remark
    - 変換したhtml文字列をレンダリング表示する
      - ex) react-native-render-html
  - react-native-render-htmlにCordovaライクな開発ができるか期待したけど、さすがに厳しそうだった
  - EASの料金体系が難しくてよくわからんかった
    - https://expo.dev/pricing
