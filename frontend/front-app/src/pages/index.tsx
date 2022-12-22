// 1
import type { NextPage } from 'next';

// Home.module.cssのstyleをstylesという名前でimport
// stylesディレクトリ下のcssファイルはどのコンポーネントからでも使えるcss。他のファイルからもこの
// Home.module.cssは使用可能。
// cssモジュール(.module.css)を使うと、ビルド時にクラス名やIDへ接頭辞や接語尾がランダムに作成される。
import styles from '../styles/Home.module.css';
import { Layout } from '../components/Layout';
import SecondaryButton from '../components/atoms/button/SecondaryButton';
import { fetchUsers } from '../api/users';
// import Hoge from '../components/Hoge';

// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -

// 5 NextPage型
const Home: NextPage = () => {

  console.log(fetchUsers);
  
  return (
    // [Home.module.css]のstyles.container
    <div>
      <Layout title="HOME">
        <div className="mx-auto px-6 py-16 pt-28 text-center">
          <h1 className="mb-36 text-4xl font-spacemono scale-y-150 text-center tracking-tighter font-semibold text-black md:text-6xl">
            Welcome to the Horror Domo App!  
          </h1>
          <div className="pt-10">
            <SecondaryButton>Sign up!</SecondaryButton>  
          </div>
        </div>
      </Layout>
  
      {/* container:要素の幅を現在のブレークポイントに固定するためのコンポーネント */}
      {/* justify-around:コンテナの主軸に沿って、各項目の両側に等しい量のスペースがあるように項目を配置します。 */}
      {/* items-center:コンテナの横軸の中心に沿って項目を配置する */}
      

      {/* <main className="min-h-screen py-16 px-0 flex flex-1 flex-col justify-center items-center">
        <h1 className="text-5xl font-spacemono">Hello</h1>
      </main>
       */}
    </div>
  );
};

// Next.jsでページを実装する場合、ページのルートコンポーネントを[export default]でエクスポートする。
export default Home;

// =   =   =   =   =   =   =   =   =   =   =   =   =   =   =   =   =   =   =   =   =   =
// 1
// このファイルはインデックスルート。ルーターはindexという名前のファイルをディレクトリのルートとしてル
// ーティングします。
// URL で末尾のファイルを指定しない場合は、自動的にそのディレクトリ内の index.js にアクセスされるように
// なります。
// pagesディレクトリ直下の構成がそのままルーティング構成になる。
// 例：pages/test/momo.tsx -> localhost:4000/pages/test/momo
// それぞれのファイル(momo.tsx)で、Reactコンポーネントを返す関数を定義し、その関数をエクスポートする。
// エクスポートする関数とファイル名は慣習的に同一とする。
// ※Next.jsでは、デフォルトで全てのページでプリレンダリングが有効化されています。
// *プリレンダリング:事前にHTMLを生成。通常のReactアプリケーション(SPA)の場合、ユーザーがWebページ
// にアクセスし、Webページを表示する時にブラウザ側でHTMLを生成します。（クライアントサーバーレンダリ
// ング）。プリレンダリングでは、ユーザーがアクセスする前に事前にHTMLを生成し、その用意されたHTMLを
// ユーザーに提供する方式となっています。そのため、ブラウザの負荷を下げて表示を高速化することができます。
// Next.jsでは、2種類のプリレンダリング方式（SSR・SSG）があり、それぞれページごとに自由に選択して実装
// することができます。

// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -




// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -



// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -

// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
// 5
// Nextpage型はNext.jsが用意している型。
// pagesのための型。受付るpropsを決め、NextPage<Props>のように指定する。
// NextPage<Props>でpropsが入るpagesである事を明示。

// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
// min-h-screen(min-height: 100vh;):要素の高さの最小値を設定します。
// vh(view height)は、要素のサイズを指定する単位の1つで、100vhは、スマホの画面の高さを示します。
// Min-Height:要素の高さの最小値を設定するためのユーティリティです。

// flex(display: flex):フレックスを使用して、ブロックレベルのフレックスコンテナを作成します。flexbox
// コンテナ(親要素)の子要素は自動的にflexboxアイテムのなり、さまざまなレイアウトが可能になります。

// flex: 1(flex: 1 1 0%):「flex: 1;」は、「flex: 1;」は「flex-grow: 1;」として解釈される為、「flex-grow: 1;」、
// 「flex-shrink: 1;」（デフォルト値）、「flex-basis: 0;」の3つ同時に指定したことと同じ意味になります。
// （flex-grow）:親要素のflexコンテナの余っているスペースを、子要素のflexアイテムに分配して、flexアイテ
// ムを伸ばすプロパティです。「flex-grow: 1;」をそれぞれのflexアイテムに指定した場合は空きスペースが均等
// に分配されます。

// flex-col(flex-direction: column):フレックスアイテムを縦に配置する。

// justify-around(justify-content: center):コンテナの主軸（コンテナの並びの中心）の中心に沿ってアイ
// テムを整列させる。
// Justify Content:flexboxアイテムを配置する際に、開始点や終了点、中心からの配置が可能になります。
// コンテナの主軸に沿ってフレックスやグリッドアイテムがどのように配置されるかを制御するユーティリティです。

// items-center(align-items: center):flexboxコンテナのクロス軸(縦並びなら横軸、横並びなら縦軸)の幅
// に合わせて、flexboxアイテムを伸縮します
// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
// Linkタグはprefetch機能で予め遷移先の情報を取得する

// jsxがブラウザで読み込まれるとdomになる。それをreactではマウントという

// イベントにはユーザーがアクションするものと、何かしらのタイミングで起こるものとの2種類ある

// アロー関数の型定義
// const increment = (num: number): number => num + 1;
// 関数の型定義
// const increment: Increment = (num: number): number => num + 1;