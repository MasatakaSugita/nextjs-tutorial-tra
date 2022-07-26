This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
![](../../Pictures/スクリーンショット/スクリーンショット 2022-07-26 9.10.46.png)
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# pre-renderring
***
## 静的ジェネレーション
* 外部データなし
    * 1.ビルト時にhtmlをレンダリング
<br>
* 外部データあり
  * 1.ビルド時にDBや外部APIからデータを取得(getStaticProps()を使う)
    * getStaticProps本番環境ではビルド時、開発環境ではリクエスト毎に実行される。
      * pagesディレクトリでのみ使える
  * 2.取得したデータを使ってhtmlをレンダリング