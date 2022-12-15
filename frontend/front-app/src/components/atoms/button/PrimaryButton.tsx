import React from 'react'

type Props = {
  children: React.ReactNode
}

const PrimaryButton = (props:Props):JSX.Element => {
  return (
    // childrenでボタンの名称を受け取って使い回しできるようにする
    <button className="btn-primary bg-basic-yellow hover:bg-hover-yellow">
      {props.children}
    </button>
  )
}

export default PrimaryButton




// =        ==        ==        ==        ==        ==        ==        ==        =
// CSS

// select-none:user-select: none;
// CSSプロパティ｢user-select｣は、テキストや画像などの要素の選択操作を制御する際に利用します。具体的には、
// コピー操作などをできないようにすることなどが可能です。

// =        ==        ==        ==        ==        ==        ==        ==        =

// // アロー関数で書く
// // *アロー関数式は=>(矢)を使って関数リテラルを記述します。無関数名なので、変数に代入して利用します。
// // JS
// const jsSample3 = (jsName3) => {
//   return jsName3;
// }
// console.log(jsSample3("JSのアロー関数"))

// // -        --        --        --        --        --        --        --        -
// // TS
// const tsSample3 = (tsName3:string):string => {
//   return tsName3;
// }
// console.log(tsSample3("TSのアロー関数"))

// // -        --        --        --        --        --        --        --        -
// // genericType
// const genericType3 = <T,>(genericTypeName3: T):T => {
//   return genericTypeName3
// };
// console.log(genericType3<string>("ジェネリック型を使ったアロー関数"))
// // *tsファイルだとこう:const foo = <T>(x: T) => x;
// // tsxファイルだと <T,>になる