// 箭號函式
// 以下兩個函式相同
const sum = (x, y => {
  return x + y;
});

const sum2 = (x, y) => x + y;

// 只有一個引數可省略括弧
const polynomial = x => x * x + 2 * x + 3;

// 沒有引數需要有空括弧
const constantFunc = () => 42;

// 箭號函式主體是單一個return述句，但回傳的運算式是一個物件字面值，須將字面值放在括弧內
const f = x => {
  return {
    value: x
  };
}; // f()回傳一個物件
const g = x => ({
  value: x
}); // g()回傳一個物件
const h = x => {
  value: x
}; // 不行 什麼都不回傳
// const i = x => {
//   v: x,
//   w: x
// }; // 語法錯誤

// 製作一個陣列的拷貝並移除null的元素
let filtered = [1, null, 2, 3].filter(x => x !== null); // filtered == [1,2,3]
// 計算一些數字的平方
let squares = [1, 2, 3, 4].map(x => x * x); // squares == [1,4,9,16]