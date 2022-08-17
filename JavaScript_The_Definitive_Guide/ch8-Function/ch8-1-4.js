// 巢狀函式
function hypotenuse(a, b) {
  function square(x) {
    return x * x;
  }
  // 開根號
  return Math.sqrt(square(a) + square(b));
}

console.log(hypotenuse(3, 4));