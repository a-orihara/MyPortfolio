// Headコンポーネントをimport
import Head from "next/head"
// import styles from '../styles/Home.module.css';
import Image from 'next/image';
import css from "styled-jsx/css";
import PrimaryButton from "./atoms/button/PrimaryButton";
import SecondaryButton from "./atoms/button/SecondaryButton";



// 型エイリアス
// コンポーネントに直接指定:Layout(props:{children:React.ReactNode ,title: string})
type Props = {
  children:React.ReactNode;
  title: string;
}

// 関数コンポーネントは型指定しないと、JSX.Element型になる
// 現在FC、VFCは使われない傾向。下記のようにpropsに型指定する。
export const Layout = (props:Props) => {
  return (
    // jsx(tsx)ではclassNameを使用
    <div className="flex flex-col min-h-screen container mx-auto basic-yellow outline">
      {/* 2 Headタグ(Next.jsで自動で<head>に変換)内にはmetaタグやlinkタグを設定する */}
      <Head>
        <title>{props.title}</title>
        <meta charSet="utf-8" />
        <meta name='description' content='ホラー映画好きが集まる投稿サイトです' />
        {/* 4 */}
        <link rel='icon' href='/favicon.png' />
      </Head>
      
      <header className="flex items-center bg-basic-yellow outline h-20">
        <h1 className="mr-auto text-s md:text-2xl font-spacemono text-center tracking-tighter font-semibold">
          Horror Domo App
        </h1>
        <PrimaryButton>HOME</PrimaryButton>
        <PrimaryButton>Log in</PrimaryButton>
      </header>

      <div className="flex flex-col md:flex-row flex-1">
        {/* <nav className="bg-orange-300 outline md:w-56"> */}
        {/* </nav> */}
        <main className="bg-basic-orange outline flex-1">
    
          {props.children}
          
        </main>
      </div>

      <footer className="bg-basic-yellow outline md:h-14 h-11 flex justify-center items-center text-black text-sm">
        @Ori 2022
        {/* <span > */}
            {/* /public/vercel.svgの省略形 */}
            {/* <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} /> */}
        {/* </span> */}
      </footer>
    </div>

    
  )
}

// =        ==        ==        ==        ==        ==        ==        ==        =
// 1
// 親Componentのタグの間に入れられた要素を、子Componentにprops経由で渡し、それを子Componentで表示する
// *親側Homeコンポーネントで、子側Layoutコンポーネントの内容を指定する。
// 親側Homeコンポーネント:<Layout>テキスト情報</Layout>
// *子で受け取る
// 子側Layoutコンポーネント:<main>{props.children}</main>
// Propsとは「プロパティ：Propertys」の略称.

// -        --        --        --        --        --        --        --        -
// 2
// Headタグ
// Next.jsでは基本的にHeadタグを使ってmetaデータを更新する
// headタグ:HTML の文書のヘッド部は、ページが読み込まれてもウェブブラウザーには表示されない部分です。
// この部分には、例えば、 <title> といった情報や CSS へのリンク（HTML を CSS で修飾する場合）、
// 独自のファビコンへのリンク、そしてほかのメタデータ（HTML を誰が書いたのかとかその HTML を表現する
// 重要なキーワードなど）の情報を含んでいます。

// titleタグ:Googleで検索した時に1番最初に表示されるのがTOPページに書かれたtitleテキスト。

// metaタグとは、Webページのメタ情報（そのデータを表す属性や関連する情報を記述したデータ）を指定し、
// ブラウザや検索エンジン、ソーシャルメディアにWebページの情報を知らせるためのタグのこと。
// *charset:文字コード。日本語は"utf-8"を指定。文字エンコーディングを指定しないと、英語版のブラウ
// ザで日本語で作成されたウェブページにアクセスした場合などに文字化けが起きる可能性がある。
// *description:Webページの概要や内容などを指定するためのタグ。
// meta name="description" content="<内容を記載>"

// linkタグ
// 「そのページ」と「外部のファイルやページ」を関連づける。基本的にheadタグ内に書く。基本的に訪問者
// の目には入らない、ブラウザや検索エンジンに向けた情報や指示を書くためのタグ。
// aタグとは役割が大きく違う。aタグはbodyタグ内でリンクを貼るために使われる。
// relでファイルとの関係性を、hrefで そのファイルがある場所（URL）を指定します。rel="stylesheet"や、
// rel="icon"などがある。ここではタグ部分のアイコン表示に使われている。

// =        ==        ==        ==        ==        ==        ==        ==        =
// CSS

// min-h-screen:min-height: 100vh;
// *コンテンツが増えても画面が見切れないように、最低幅を画面一杯に設定。

// flex:flexコンテナ内にflexアイテムを設定
// flexコンテナの主軸(flex-directionで水平か垂直か指定)
// クロス軸 (交差軸) は、主軸 (メイン軸) と交差する軸(flex-directionが水平なら縦、垂直なら横)。
// justify-contentプロパティは、flexコンテナの主軸に沿ってflexアイテムを一行に配置します
// justify-content: center;アイテムを中央に寄せて配置。
// align-items: center;アイテムの配置方法。centerでアイテムを中央に寄せて配置。
// *[justify-content: center]と[align-items: center]で中央の真ん中に寄せている
// vw	viewport width	ビューポートの幅に対する割合
// vh	viewport height	ビューポートの高さに対する割合

// flex: 1;
// flex-grow、flex-shrink、flex-basisの3つのプロパティのショートハンド（省略形）。
// 「flex-grow: 1;」、「flex-shrink: 1;」、「flex-basis: 0;」の3つ同時に指定したことと同じ意味になります。
// flex-growは、親要素のflexコンテナの余っているスペースを、子要素のflexアイテムに分配して、flexアイテムを伸ばすプロパティです。
// flex-growの値は整数値のみで、flexアイテムが伸びる比率を指定します。

// md:@media (min-width: 768px) 
// スクリーンサイズが768px以上の場合に適用

// mr-auto:margin-right: auto;
// marginの値にautoを指定すると、[親要素の横幅 - 指定した要素の横幅]によりmarginを自動で算出します。
// 子要素が左寄せになる