## Getting Started

```bash
npm install
npm run dev
```

コメントKV取得は以下参照

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
