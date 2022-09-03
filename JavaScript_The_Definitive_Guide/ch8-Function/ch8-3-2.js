// 其餘參數和長度不定的引數列
function max(first = -Infinity, ...rest) {
  let maxValue = first; // 先假設第一個引數最大
  for (let n of rest) {
    if (n > maxValue) {
      maxValue = n;
    }
  }
  return maxValue;
}

let result = max(1, 10, 100, 2, 3, 1000, 4, 5, 6);
console.log(result);