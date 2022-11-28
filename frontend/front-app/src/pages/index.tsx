// 1
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
// Home.module.cssのstyleをインストール
// cssモジュール(.module.css)を使うと、ビルド時にクラス名やIDへ接頭辞や接語尾がランダムに作成される。
import styles from '../styles/Home.module.css';

// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* 2 */}
      <Head>
        {/* Googleで検索した時に1番最初に表示されるのがTOPページに書かれたtitleテキスト。 */}
        <title>Create Next App</title>
        {/* 3 */}
        <meta name='description' content='Generated by create next app' />
        {/* 4 */}
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Weaaalcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href='https://nextjs.org/docs' className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href='https://nextjs.org/learn' className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/canary/examples'
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;

// =   =   =   =   =   =   =   =   =   =   =   =   =   =   =   =   =   =   =   =   =   =
// 1
// pagesディレクトリ直下の構成がそのままルーティング構成になる。
// 例：pages/test/momo.tsx -> localhost:4000/pages/test/momo
// それぞれのファイル(momo.tsx)で、Reactコンポーネントを返す関数を定義し、その関数をエクスポートする。
// エクスポートする関数とファイル名は慣習的に同一とする。
// ※Next.jsでは、デフォルトで全てのページでプリレンダリングが有効化されています。

// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
// 2
// Next.jsにはHeadコンポーネントが用意されており、<head></head>タグの設定はここに書く。
// headタグ:HTML の文書のヘッド部は、ページが読み込まれてもウェブブラウザーには表示されない部分です。
// この部分には、例えば、 <title> といった情報や CSS へのリンク（HTML を CSS で修飾する場合）、
// 独自のファビコンへのリンク、そしてほかのメタデータ（HTML を誰が書いたのかとかその HTML を表現する重要なキーワードなど）の情報を含んでいます。

// メタデータとは、「データのデータ」のことで、あるデータの属性や特徴を表す付随的な情報を指す。
// meta要素は、「meta情報（メタ情報、メタデータ、metaタグ）」とも呼ばれており、
// 「検索エンジン」（Google）や「ブラウザ」（GoogleChrome等）にWebページの情報を伝えるHTMLタグのことです。

// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
// 3
// metaタグ
// Webページのメタ情報を指定し、ブラウザや検索エンジン、ソーシャルメディアに、
// Webページの情報を知らせるためのタグ。
// メタ情報はWebページには表示させない情報なため、普通に見る分にはmetaタグが書かれているかどうかはわかりません。
// メタ情報は、Googleクローラーなどが巡回した時に収集された後、検索ページに適用されます。
// メタ情報についてもう少しかみ砕いて説明すると、メタ情報には「文字コード」や「ディスクリプション（説明・概要）」などを記述します。
// これによって、「このページは日本語で〇〇について書かれている」などの情報を伝えられます。

{
  /* <meta name='description' content='' /> */
}
// Webページの概要や内容などを指定するためのタグ。検索結果で記事タイトル下に表示される文章になります。

// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
// 4
// linkタグ
// aタグとの違い。aタグは主に訪問者に「ここをクリックすると別のページに飛ぶよ」というリンクを貼るもので、
// bodyタグ内に書かれます。
// linkタグは、検索エンジンやブラウザに「このページは、別のこのページやファイルとこんな関係があるよ」と、
// 伝えるもので、headタグに書かれます。
// relでファイルとの関係性を、hrefで そのファイルがある場所（URL）を指定します。
// rel="stylesheet"や、rel="icon"などがある。

// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
