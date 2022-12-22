const DEFAULT_API_LOCALHOST = 'http://localhost:80/backend/api/v1'

export const userIndex = `${DEFAULT_API_LOCALHOST}/users`

export const fetchUsers = fetch(userIndex).then( (res) => { console.log(res.text) });

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