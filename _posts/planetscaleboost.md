---
category: 'IT全般'
title: 'PlanetScaleBoost発表'
excerpt: 'PlanetScaleの遅いクエリ改善も金の力で解決できるらしい'
coverImage: ''
date: '2023-08-24T14:00:00.000Z'
author: 江口
---

# [Planet Scale Boost](https://planetscale.com/blog/introducing-planetscale-boost) 

- [PlanetScale](https://planetscale.com/) とは
  - Serverless MySQL Platform
    - クラウドMySQL(というかAWS RDS MySQL使ってる)
      - [MySQLクラスタリングシステム Vitessが採用されてる](https://vitess.io/)
      - [外部キーはサポートしていない](https://planetscale.com/docs/learn/operating-without-foreign-key-constraints)
        - Vitessの設計上難しいらしい
      - branch/version管理対応
      - web console
        - web管理画面からMySQLクエリ発行できる※画面共有参照
          - productionブランチのテーブルには無理だが、設定で変えられる※画面共有参照
      - PR(デプロイリクエスト)CI対応
        - スキーマ変更のみのdeployも可能
      - 料金体系
        - Scaler Pro $47/月
          - 無制限の読み取りと書き込み
        - Scaler $29/月
          - 1000億行の読み取りと5,000 万行の書き込み/月
        - Hobby Free
          - 10 億行の読み取りと1,000 万行の書き込み/月
      - DB作成する際にCardの登録は必要だが、無料で十分使える
- PlanetScale上で重いクエリを見つけてラベル保存できる
  - プログラムレベルの性能改善が不要。キャッシュして高速化してくれる
    - 金を払えば雑なSQLでも高速してくれる
