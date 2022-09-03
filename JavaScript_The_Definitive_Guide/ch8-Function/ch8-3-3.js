// Arguments物件
function max(x) {
  let maxValue = -Infinity;
  // 以迴圈跑過引數，尋找並記起最大的。
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > maxValue) maxValue = arguments[i];
  }
  return maxValue;
}

let result = max(1, 10, 100, 2, 3, 1000, 4, 5, 6);
console.log(result);