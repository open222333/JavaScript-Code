// 函式呼叫分散運算子(Spread Operator)
let numbers = [5, 2, 10, -1, 9, 100, 1];
let a = Math.min(...numbers);
console.log(a);

// 此函式接受一個函式，並回傳一個包裹起來的版本
function timed(f) {
  return function (...args) {
    console.log(`Entering function ${f.name}`);
    let startTime = Date.now();
    try {
      // 把所有引數傳入縮包裹的函示(wrapped function)
      return f(...args); // 把args再次分散
    }
    finally {
      // 回傳包裹的回傳值之前，印出經過的時間
      console.log(`Exiting ${f.name} after ${Date.now() - startTime}ms`);
    }
  };
}

// 以暴力法(brute force)計算1到n之間數字總和
function benchmark(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// 調用測試函式 有計時的版本
let result = timed(benchmark)(1000000);
console.log(result);