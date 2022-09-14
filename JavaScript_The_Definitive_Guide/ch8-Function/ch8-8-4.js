// 記憶
function memoize(f) {
  // 高階函式 接收一個函式作為引數 並回傳該函式的一個有記憶版本
  const cache = new Map(); // 值快取在closure
  return function (...args) {
    let key = args.length + args.join("+");
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      let result = f.apply(this, args);
      cache.set(key, result);
      return result;
    }
  };
}

function gcd(a, b) {
  // 回傳兩個整數的最大公因數
  if (a < b) { // 確保 a >= b
    [a, b] = [b, a];
  }
  while (b !== 0) {
    // Euclid的GCD演算法
    [a, b] = [b, a % b];
  }
  return a;
}

const gcdmemo = memoize(gcd);
console.log(gcdmemo(85, 187));

const factorial = memoize(function (n) {
  return (n <= 1) ? 1 : n * factorial(n - 1);
});
console.log(factorial(5));