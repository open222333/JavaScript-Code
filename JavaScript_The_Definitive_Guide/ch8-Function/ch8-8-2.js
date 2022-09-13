// 高階函式

// functional版本的map()和reduce()方法
const map = function (a, ...args) { return a.map(...args); };
const reduce = function (a, ...args) { return a.reduce(...args); };

// 接受一個函式引數，回傳一個新函式
function not(f) {
  return function (...args) {
    // 回傳一個新的函式
    let result = f.apply(this, args); // 呼叫f
    return !result; // 否定其結果
  }
}

const even = x => x % 2 === 0; // 用來判斷一個數字是否為偶數(even)的函式
const odd = not(even); // 做相反事情的新函式
console.log([1, 1, 3, 5, 5].every(odd)); // true 該陣列每個元素都是奇數

function mapper(f) {
  return a => map(a, f);
}

const increment = x => x + 1;
const increamentAll = mapper(increment);
console.log(increamentAll([1, 2, 3]));

// 回傳計算f(g(...))的新函式
function compose(f, g) {
  return function (...args) {
    return f.call(this, g.apply(this, args));
  };
}

const sum = (x, y) => x + y;
const square = x => x * x;
compose(square, sum)(2, 3)