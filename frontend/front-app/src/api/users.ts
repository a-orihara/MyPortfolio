import axios from "axios";

const DEFAULT_API_LOCALHOST_DEV = 'http://localhost:3000'
const DEFAULT_API_LOCALHOST_PROD = 'http://localhost:3002'

const userIndexDev = `${DEFAULT_API_LOCALHOST_DEV}/backend/api/v1/users`
const userIndexProd = `${DEFAULT_API_LOCALHOST_PROD}/api/v1/users`

export const axiosJson = () => {
  return axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    const data = res.data
    return console.log(data[0]);
  })
  .catch((e) => console.log(`"だめだ":${e}`))
}

// fetch() メソッドは Response オブジェクトで resolve される Promise を返します。
// fetch() メソッドがリクエストを送信して、リクエストが完了するとリソースが利用可能になります。
export const fetchJson = () => {
  // fetch()メソッドを実行しただけでは、Responseオブジェクトに解決するPromiseのインスタンスが返されるだけ
  fetch('https://jsonplaceholder.typicode.com/users')
  // then() メソッドを使って Response オブジェクトに resolve（解決）された値を処理します。
  .then((res) => {
    if(res.ok) {
      console.log("うんこ")
      // res:Responseオブジェクト
      // Responseオブジェクトはデータ自体ではなく、HTTPレスポンス全体を表すオブジェクト
      console.log(res);
      // 入力としてJSONを取って解釈し、 JavaScript のオブジェクトを生成します。
      // return忘れずに
      return res.json()

    } else {
      //ステータスが ok でなければエラーにする
      throw new Error(`リクエスト失敗1:${res.status} ${res.statusText}`);
    }
  // thenのコールバック関数では、text()を適用した結果のPromise(Response オブジェクト)をreturnしています。
  })
  // textはResponseオブジェクトのJSONを取って解釈したJSのオブジェクト
  .then((text) => {
      console.log("ふが");
      console.log(text[0].name);
  }).catch(error => {
    console.error('通信に失敗しました', error);
  })
  // Response オブジェクトのメソッドはいずれも非同期処理で、解析した結果に解決される Promise を返します
  // （処理が成功すると解析された結果のオブジェクトが返されます）。
  // .then(data => {
  //   console.log(data);
  // })
  .catch((e) => console.log(`"だめだ":${e}`))
}

export const axiosRailsUsers = () => {
  return axios.get(userIndexDev)
  .then(res => {
    const data = res.data
    return console.log(data.users[0].name);
  })
  .catch((e) => console.log(`"だめだ":${e}`))
}


export const fetchRailsUsers = () => {
  fetch(userIndexDev)
  .then((res) => {
    
    return res.json()
  })
  .then((users) => {
    console.log(users.users[0].name)
  })
  .catch((e) => {
    console.error('Error:',e);
    console.log(`"だめだ":${e}`);
  })
}
  


// const onButtonClick = () => {
//   fetch("/api/user")
//     //レスポンスのボディーからJSONデータを取得
//     .then((response) => response.json()) 
//     .then((user) => alert(`名前：${user.name}`))  
// }

/*

TypeScriptでPromiseの型を指定する場合はPromise<T>と書きます。TにはPromiseが解決(resolve)された時に渡す値の任意の型を指定します。
今回の例ではresolve(1);と解決する値として数値を渡しているのでPromise<number>を指定しています。
たとえば、独自で定義した型の値を解決する場合は次のように記述します。

type User = {
  name: string;
  age: number;
};

関数の型は、引数と戻り値の型を書けばよく、引数がなければ、戻り値の型のみでいい。

function getUser(): Promise<User> {
  return new Promise((resolve) => {
    const user: User = {
      name: "太郎",
      age: 10,
    };
    resolve(user);
  });
}

getUser().then((user: User) => {
  console.log(user);
  // @log: { "name": "太郎", "age": 10 }
});

=      ==      ==      ==      ==      ==      ==      ==      ==      =

ジェネリクス

// for number type
function fun(args: number): number {s
  return args;
}

// for string type
function fun(args: string): string {
  return args;
}


function fun<T>(args:T):T {
  return args;
}

//アロー関数で記述した場合
const fun = <T>(args: T): T => args;

// =        ==        ==        ==        ==        ==        ==        ==        =
// 関数宣言で書く
// JS

function jsSample1(jsName1){
  return jsName1
};
const js1 = jsSample1("JSの関数宣言");
console.log(js1);

// -        --        --        --        --        --        --        --        -
// TS
function tsSample1(tsName1: string): string{
  return tsName1
};
const ts1 = tsSample1("TSの関数宣言");
console.log(ts1);

function strsLength(
  str1: string, // カンマで区切ることを忘れない
  srt2: string
): number {
  const join = str1 + str2;
  return join.length;
}

ちなみに、コールバック関数に使用する無名関数の定義に型注釈をする必要はありません。例えば、map() メソッドの
コールバック関数の引数に型注釈をする必要はありません。

*/

// fetch() メソッドがリクエストを送信して、リクエストが完了するとリソースが利用可能になります。その時点で、Promise は Response オブジェクトに resolve（解決）されます。つまり、fetch() が成功すると Response オブジェクトが返されます。
// 但し、fetch() メソッドを実行しただけでは、Response オブジェクトに解決する Promise のインスタンスが返されるだけです。
// Promise の then() メソッドを使って Response オブジェクトに resolve（解決）された値を処理します。
// Response オブジェクトはデータ自体ではなく、HTTP レスポンス全体を表すオブジェクトで、プロパティやメソッドを持っています。
// この取得した Response オブジェクトのメソッドやプロパティや使って、データ本体やステータスコード、ヘッダの情報などを取得することができます。
// Response オブジェクトはデータ自体ではなく、HTTP レスポンス全体を表すオブジェクトで、そのままではデータとして扱えないので、その内容（JSON や text、FormData など）に応じて Response オブジェクトのメソッドを使って解析し、内容（種類）に応じたオブジェクトに変換します。

// 新しいPromiseオブジェクトを返すとき、それは常にPromiseオブジェクト（文字列化すると[object Promise]）になります。
// プロミスの結果にアクセスするには、.thenメソッド（またはasync関数でawaitを使用）を使用します。.thenコールバックは結果が利用可能になったときに呼び出されます。
