const sum = (x, y) => x + y;
const square = x => x * x;

// functional版本的map()和reduce()方法
const map = function (a, ...args) { return a.map(...args); };
const reduce = function (a, ...args) { return a.reduce(...args); };

// 回傳計算f(g(...))的新函式
function compose(f, g) {
  return function (...args) {
    return f.call(this, g.apply(this, args));
  };
}

// 函式的部分應用
// 引數從左邊傳入
function partialLeft(f, ...outerArgs) {
  return function (...innerArgs) {
    let args = [...outerArgs, ...innerArgs]; // 建構引數列
    return f.apply(this, args);
  };
}

// 引數從右邊傳入
function partialRight(f, ...outerArgs) {
  return function (...innerArgs) {
    let args = [...innerArgs, ...outerArgs]; // 建構引數列
    return f.apply(this, args);
  };
}

// 引數內中未定義的值會以來自內層集合的值填入
function partial(f, ...outerArgs) {
  return function (...innerArgs) {
    let args = [...outerArgs]; // 外層引數範本的一個區域拷貝
    let innerIndex = 0;
    // 以迴圈跑過這些引數，用來自內層引數的值填入undefined之處
    for (let i = 0; i < args.length; i++) {
      if (args[i] === undefined) args[i] = innerArgs[innerIndex++];
    }
    args.push(...innerArgs.slice(innerIndex)); // 把任何剩餘的內層引數附加上去
    return f.apply(this, args);
  };
}

const f = function (x, y, z) { return x * (y - z); };
console.log(partialLeft(f, 2)(3, 4));
console.log(partialRight(f, 2)(3, 4));
console.log(partial(f, undefined, 2)(3, 4));

// 定義特殊函式
const increment = partialLeft(sum, 1);
const cuberoot = partialRight(Math.pow, 1 / 3);
console.log(cuberoot(increment(26))); // = Math.pow(26 + 1, 1/3)

const not = partialLeft(compose, x => !x);
const even = x => x % 2 === 0;
const odd = not(even);
const isNumber = not(isNaN);
console.log(odd(3) && isNumber(2));

// 使用合成與部分應用重做極端functional風格
const product = (x, y) => x * y;
const neg = partial(product, -1);
const sqrt = partial(Math.pow, undefined, .5);
const reciprocal = partial(Math.pow, undefined, neg(1));

// 計算平均和標準差
let data = [1, 1, 3, 5, 5];
let mean = product(reduce(data, sum), reciprocal(data.length));
// 不建議這樣做 僅做練習
let stddev = sqrt(product(reduce(map(data, compose(square, partial(sum, neg(mean)))), sum), reciprocal(sum(data.length, neg(1)))));
console.log(mean, stddev);