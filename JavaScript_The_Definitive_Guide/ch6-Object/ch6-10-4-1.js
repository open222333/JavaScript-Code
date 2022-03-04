// 分散運算子
// 把一個現有的物件的特性拷貝到一個新物件中
let positon = {
  x: 0,
  y: 0
};
let dimensions = {
  width: 100,
  height: 75
};
let rect = {
  ...position,
  ...dimensions
};
r = rect.x + rect.y + rect.width + rect.height
console.log(r)