---
title: 'このアプリについて'
excerpt: 'Tech勉強会記録用 md投稿型SSGシステム'
coverImage: '/images/arekore-dataflow.png'
date: '2023-08-11T18:10:00.000Z'
author: 江口
---

# このアプリについて

## 構成

![システムデータフロー](https://tech-arekore.vercel.app/images/arekore-dataflow.png)

- Tech勉強会記録ように作った
  - https://tech-arekore.vercel.app/
  - Next v13 ( React v18 ) / Vercel  / PlanetScale / Vercel Storage - Vercel KV
    - 前回紹介した無料の[vercel storage](https://vercel.com/docs/storage)と、上述のPlanetScaleを使ってみたのでfeed back
      - Next13を使って、PlanetScaleにmdをinsertし、それを一覧/詳細で閲覧できるサンプルシステム。記事へのコメントはVercelStorage KVに投稿
      - Vercel
        - ホスティング
          - github連携で簡単にdeploy
            - githubのproject名がドメイン名になるが、管理画面から簡単に変えられる
          - masterにpushすることでCIが走る
      - Vercel KV(Redis)を使ってみました
        - Vercel KVもHobbyで使える
          - Storage Size: 256 MB
          - Requests/Month: 30 kB
          - Data Transfer: 256 MB
      - next v13からの変更で苦労した点
        - pages router => app routerの変更が結構多かった。情報が古いpage routerがまだ多いので注意
          - getStaticpropsがなくなったとか
          - app/api下に作るとかとか
        - client処理は以下のBからCに経由するcomponent設計にしないとNext13ではClientComponent領域だぞとエラーになる
          - use clientをBに使う。
            - use clientはServer SideとClient Sideの境界を宣言するイメージ
          - A: app/page.tsx(ServerComponent)
            - B: CommentInputClient.tsx(ClientComponent)
              - C: CommentInput.tsx(ClientComponent)
        - Nuxtみたいにclient-onlyで部分的に差し込めないのか？
      - 感想
        - PlanetSclae
          - Schemaの変更はbranchでPullRequest方式でのみdeploy可能なのはcode管理と同じ感覚で扱えて好印象
        - Vercel / Vercel Storage
          - github連携でmaster pushするだけでdeploy可能は楽
          - envも設定できて良き
          - deploy毎にCDNキャッシュは消してくれるらしいが、消えてくれず、小一時間SSG画面が真っ白で悩んだ
            - APIのresponse構造体が古い形のままだったため
              - 設定から手動で強制purgeして解決
          - 無料枠でもdatastore連携可能
            - KVのrequest制限はあっという間に超えると思う
          - 無料
            - Herokuの代替にいいかも
        - Next
          - pages router => app routerへの書きっぷり変更は結構大きい
          - 部分的clinet-commponentできないの面倒(自分がNext初心者なのが悪いだけ)
          - app routerだと、deploy->build時にAPI呼び出してSSG作る時に、なぜかAPIが古いキャッシュされたreponseを返すようで、画面が更新されなかった。
            - 内供APIには `no-store` res headerつけていて、deploy後もendpointは最新返すのに、SSG生成時のみ、キャッシュが返ってくる
        - Prisma
          - ORMにPrisma使ってみたが、Schema変えたらPrismaClientにも取り込まないとエラーになって本番障害になる。Schemaの変更反映と同時にFrontでも `prisma db pull` `prisma db pull` しないといけない運用になるっぽい。
