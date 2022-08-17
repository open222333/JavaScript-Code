// 函式運算式
// 這個函式運算式定義了會計算其引數平方值的一個函式
// 指定給一個變數
const square = function(x) {
  return x * x;
};

// 函式運算式可以包含名稱，這適合用來進行遞迴(recursion)
const f = function fact(x) {
  if (x <= 1) return 1;
  else return x * fact(x - 1);
};

// 函式運算式也可被用作其他函數的引數
[3, 2, 1].sort(function(a, b) {
  return a - b;
});

// 函式運算式有時會在定義後即刻被調用
let tensquared = (function(x) {
  return x * x;
}(10));