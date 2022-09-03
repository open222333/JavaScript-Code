// 定義你自己的函式特性

// 初始化此函式物件的counter特性 函式宣告前進行指定
uniqueInteger.counter = 0;

function uniqueInteger() {
  return uniqueInteger.counter++; // 回傳並遞增counter特性
}

console.log(uniqueInteger());
console.log(uniqueInteger());

// 計算階乘 並把結果快取在該函式本身的特性中
function factorial(n) {
  if (Number.isInteger(n) && n > 0) { // 僅限正整數
    if (!(n in factorial)) {
      // 如果沒有快取結果 就計算並快取之
      factorial[n] = n * factorial(n - 1);
    }
    return factorial[n]; // 回傳快取的結果
  } else {
    return NaN; // 輸入有問題回傳NaN
  }
}

factorial[1] = 1;
console.log(factorial(6));
console.log(factorial[5]);