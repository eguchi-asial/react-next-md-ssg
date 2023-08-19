## Getting Started

```bash
npm install
npm run dev
```

## APIについて

next13からpages routerに取って代わり、app routerに変わりました。

apiは `/app/api` 下の `route.ts` がendpointにってます。このファイルにmethod(GET/POST/DELETEなど)を追記します。
`/app/api/hoge/route.ts` なら、 `https://hogehoge/api/hoge` でGETにアクセスできます。

## markdownの管理について

markdownはPlanetScale(=AWS RDS(Myswl))で管理されてます。
ORM Prismaを介して取得してます。
データ入稿はPlanetScale管理画面上で行ってます。

## VercelKV

### env

```
%vercel env pull .env.development.local
```

これでVercelKVの接続先情報などが `.env.development.local` にgitignore状態で払い出されます。

## コメントについて

VercelStorageのVercelKVを使ってます。

以下、内部で使ってるredisコマンドです。

`rpush [slug]:comments コメント例` でコメント追加
`lrange [slug]:comments 0 -1` で全件取得


## Prismaについて

### 概要

今回は、PlanetScaleにすでにschemaがあるので、pjにmodel/client情報を取り込んだ

- 前提
  - `prisma` と `@prisma/client` をinstallしていること
  - PlanetScaleにschemaが存在していること

上記状態で、

```
1. npx prisma db pull
2. npx prisma generate
```

1でPlanetScaleへの接続情報が `schema.prisma` に吐き出され、modelも自動生成importされる
2で、1で設定した情報を `@prisma/client` に伝えることでprismaから実際にコードベースでアクセス可能になる。

### envについて

prismaでは.envを使うが、vercelでは.env.development.localなどのenvを使っている。この統合をどうするのか調査中
