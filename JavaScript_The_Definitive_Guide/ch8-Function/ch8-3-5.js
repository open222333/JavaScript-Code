// 解構函式引數為參數

function vectorAdd(v1, v2) {
  return [v1[0] + v2[0], v1[1] + v2[1]];
}

let a = vectorAdd([1, 2], [3, 4]);
console.log(a);

function vectorAdd_2([x1, y1], [x2, y2]) {
  return [x1 + x2, y1 + y2];
}

let b = vectorAdd_2([1, 2], [3, 4]);
console.log(b);

// 以一個純量值(scalar value) 乘上向量{x, y}
function vectorMultiply({
  x,
  y
}, scalar) {
  return {
    x: x * scalar,
    y: y * scalar
  };
}

let c = vectorMultiply({
  x: 1,
  y: 2
}, 2)
console.log(c);

// 把一個名稱的特性解構到具有不同名稱的參數
function vectorAdd_3({
  x: x1,
  y: y1
}, {
  x: x2,
  y: y2
}) {
  return {
    x: x1 + x2,
    y: y1 + y2
  };
}

let d = vectorAdd_3({
  x: 1,
  y: 2
}, {
  x: 3,
  y: 4
});
console.log(d);

// 以解構的參數定義參數預設值。
// 用於2D 3D向量乘法
// 把向量{x,y}或{x,y,z}乘以一個純量值
function vectorMultiply_2({
  x,
  y,
  z = 0
}, scalar) {
  return {
    x: x * scalar,
    y: y * scalar,
    z: z * scalar
  };
}

let e = vectorMultiply_2({
  x: 1,
  y: 2
}, 2);
console.log(e);

// 把指定數目的元素從一個陣列拷貝到另一個陣列中，為每個陣列選擇性指定起始的偏移量(starting offsets)
// 模仿 python 函式引數 name=value
function arraycopy({
  from,
  to = from,
  n = from.length,
  fromIndex = 0,
  toIndex = 0
}) {
  let valuesToCopy = from.slice(fromIndex, fromIndex + n);
  to.splice(toIndex, 0, ...valuesToCopy);
  return to;
}

let f = [1, 2, 3, 4, 5],
  g = [9, 8, 7, 6, 5];

let h = arraycopy({
  from: a,
  n: 3,
  to: b,
  toIndex: 4
});
console.log(h);

// 可在解構一個物件時使用一個其餘參數 ...
// 其餘參數的值會是一個物件
// 把向量{x,y}或{x,y,z}乘以一個純量值，保留其他特性
function vectorMultiply_3({
  x,
  y,
  z = 0,
  ...props
}, scalar) {
  return {
    x: x * scalar,
    y: y * scalar,
    z: z * scalar,
    ...props
  };
}

let i = vectorMultiply_3({
  x: 1,
  y: 2,
  w: -1
}, 2);
console.log(i);