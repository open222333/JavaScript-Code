// JavaScript 述句包括條件式和迴圈
// 使用C C++ Java與其他語言的語法
function abs (x) {
  //回傳絕對值
  if (x >= 0) {
    return x
  } else {
    return -x
  }
}

function sum (array) {
  //計算總和
  let sum = 0
  for (let x of array) {
    sum += x
  }
  return sum
}

function factorial (n) {
  //計算階乘
  let product = 1
  while (n > 1) {
    product *= n
    n--
  }
  return product
}

function factorial2 (n) {
  //階乘第二種
  let i,
    probuct = 1
  for (i = 2; i <= n; i++) probuct *= i
  return probuct
}
