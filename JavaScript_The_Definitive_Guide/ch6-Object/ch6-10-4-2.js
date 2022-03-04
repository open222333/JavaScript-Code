// 分散運算子
// 特性被分散的其中一個物件有同名 特性的值會出現最後面的
let o = {
  x: 1
};
let p = {
  x: 0,
  ...o
};
console.log(p.x) // 來自物件o的值覆寫此特性x
let q = {
  ...o,
  x: 2
};
console.log(q.x) // 來自物件q的值覆寫此特性x

// 分散運算子 不會碰繼承的特性
let o2 = Object.create({
  x: 1
}); // o繼承了特性x
let p2 = {
  ...o2
};
console.log(p2.x)