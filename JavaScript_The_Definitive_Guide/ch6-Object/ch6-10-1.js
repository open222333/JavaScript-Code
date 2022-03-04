// 擴充的物件字面值語法
// let x = 1,
//   y = 2;
// let o = {
//   x: x,
//   y: y
// };

//ES6 簡化
let x = 1,
  y = 2;
let o = {
  x,
  y
};
console.log(o.x + o.y)