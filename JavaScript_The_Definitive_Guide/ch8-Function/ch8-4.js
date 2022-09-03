// 函式作為值
// 函式定義 創建一個新的函式物件，並指定給變數square
// 一個函式的名稱只是一個變數的名稱，用以參考物件。
function square(x) { return x * x; };

// 函式可以指定給另一個變數，仍然以相同方式運行
let s = square; // 現在s參考跟square相同的函式
square(4); // => 16
s(4); // => 16

// 函式可以被指定給物件的特性，而非變數。 此時稱為'方法'。
let o = { square: function (x) { return x * x; } }; // 物件字面值
let y = o.square(16); // y == 256

// 函式不需要名稱
// 範例 被指定給陣列元素時
let a = [x => x * x, 20];
a[0](a[1]); // => 400