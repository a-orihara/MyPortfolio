// globals.css(アプリ全体のスタイリング)をimport。全てのコンポーンネントでglobals.cssが適用
import '../styles/globals.css';
// 'next/app'から{ AppProps }型のみインポート
import type { AppProps } from 'next/app';

// -        --        --        --        --        --        --        --        -
// 2
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

/*
=        ==        ==        ==        ==        ==        ==        ==        =
1
pages配下の全てのコンポーネントの前にこのMyAppが必ず実行される。

Next.jsではAppコンポーネントを使用して全てのページを初期化するようになっています。 そのため、このコン
ポーネントを継承したクラスがあるファイル、_app.js(tsx) を作成することでデフォルトのAppコンポーネント
を上書きできます。

ページ間共通レイアウト
共通のstate(Reduxなども）
グローバルCSS（全ページ共通の）を適用する。
サーバーサイドレンダリングされるが、ライフサイクルメソッドはクライアントサイドでも実行される。

このMyAppコンポーネントは、すべての異なるページに共通する最上位のコンポーネントです。
_app.js(pagesディレクトリ直下に作る)は特殊なファイルでRouteコンポーネントをラップする。
全ページで共通して実行したいファイルを読み込み、全ページで共通して実行したい処理を実行し、
全ページ共通のレイアウトを組み込む。_app.tsxは全ページ共通になるので、グローバルな値を管
理するのにも使えます。

_app.tsxファイルはアプリケーションのエントリーポイントに当たるファイルで、
すべてのページはこのファイルによってラップされています。
すべてのページに対して共通となるコンポーネントを適用したい場合などに利用することができます。

全てのページに対して共通的な設定を行う場合、クライアント処理を行う、特殊な共通コンポーネント（ルート
コンポーネント）のpages/_app.jsを用いて制御を行います。

-        --        --        --        --        --        --        --        -
2
AppPropsはNext.jsで用意されている型

ルートコンポーネント（_app.tsx）は、ページナビゲーション（遷移）が行われるたびに、対象ページのコンポー
ネント一式がComponentにセットされ、ページに渡されたpropsがpagePropsに設定された状態で必ず呼び出さ
れます。そのため、このルートコンポーネントに対して全体共通で適用するLayoutコンポーネント等を適用して
おくと、すべてのページコンポーネントで共通的に呼び出される構成を作ることができます。

=   =   分割代入   =   =   =   =   =   =   =   =   =   =   =   =   =   =   =   =   =   =
分割代入は, 配列やオブジェクトを分割して一気に変数に代入できる便利な仕組み

// オブジェクトの場合
const myProf1 = {
  name1: "さちこ",
  age1: 20,
}
const message1 = `${myProf1.name1}です。${myProf1.age1}よ。`
console.log(message1)
// さちこです。20よ。

const { name1, age1 } = myProf1;
const message2 = `${name1}です。${age1}よ。`
console.log(message2)
// さちこです。20よ。

ex.
export const Color = () => {
	const { color, margin, fontSize, children } = props;
	const contentstyle ={
		color: color,
		margin: margin,
		fontSize :fontSize
	};

	return(
		<p sytle="contentStyle">{children};</p>
	);
}

const { color, margin, fontSize, children } = props;
const contentstyle ={
	color: color,
	margin: margin,
	fontSize :fontSize
}
↓
const contentstyle ={
	color, //color:の部分省略
	margin, //margin:の部分省略
	fontSize //fontSize:の部分省略
}

-   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
配列の場合
const myProf2 = ["ひろし", 23];
// オブジェクトの場合はプロパティ名で受け取るが、配列の場合、順番で受け取ることになる。
const [name2, age2] = myProf2;
const message3 = `${name2}です。${age2}よ。`
console.log(message3);
// ひろしです。23よ。

関数の型
export const Practice1 = () => {

  // 引数の型指定 typescriptでは必ず関数の引数の型を指定する
  // 戻り値は型指定しない場合、型推論される。
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  }
*/
