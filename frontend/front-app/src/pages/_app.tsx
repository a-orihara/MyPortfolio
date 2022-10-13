import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

// 1
// このMyAppコンポーネントは、すべての異なるページに共通する最上位のコンポーネントです。
// _app.js(pagesディレクトリ直下に作る)は特殊なファイルでRouteコンポーネントをラップする。
// 全ページで共通して実行したいファイルを読み込み、全ページで共通して実行したい処理を実行し、
// 全ページ共通のレイアウトを組み込む。
// _app.jsファイルはアプリケーションのエントリーポイントに当たるファイルで、
// すべてのページはこのファイルによってラップされています。
// すべてのページに対して共通となるコンポーネントを適用したい場合などに利用することができます。
