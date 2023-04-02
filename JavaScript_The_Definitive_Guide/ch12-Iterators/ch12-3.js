// 產出一位數質數(基數為10)之集合的一個產生器函式
function* oneDigitprimes() {
  /**
   * 調用此函式不會執行程式碼，
   * 而只是回傳一個產生器物件呼叫那個產生器的next()方法會執行其程式碼，
   * 直到有一個yield述句為next()方法提供回傳值。
   */
  yield 2;
  yield 3;
  yield 5;
  yield 7;
}

// 調用產生器函式
let primes = oneDigitprimes();
// 產生器是會迭代所產出那些值得一種迭代器物件
primes.next().value; // => 2
// console.log(primes.next().value);
primes.next().value; // => 3
// console.log(primes.next().value);
primes.next().value; // => 5
// console.log(primes.next().value);
primes.next().value; // => 7
// console.log(primes.next().value);
primes.next().done; // => true
// console.log(primes.next().done);

// 產生器有一個Symbol.迭代器方法使他們可以迭代
primes[Symbol.iterator](); // => primes

// 可像對其他可迭代型別那樣來使用迭代器
[...oneDigitprimes()]; // => [ 2, 3, 5, 7 ]
console.log([...oneDigitprimes()]);
let sum = 0;
for (let primes of oneDigitprimes()) sum += primes;
sum; // => 17
console.log(sum);

// 以運算式形式定義產生器
const seq = function* (from, to) {
  for (let i = from; i <= to; i++) yield i;
};
[...seq(3, 5)]; // => [ 3, 4, 5 ]
console.log([...seq(3, 5)]);

// 物件與類別字面值中，可使用簡寫記法在定義方法的時候完全省略function關鍵字
let o = {
  x: 1,
  y: 2,
  z: 3,
  // 定義產生器，在方法前面加*
  *g() {
    for (let key of Object.keys(this)) {
      yield key;
    }
  },
};
[...o.g()]; // => [ 'x', 'y', 'z', 'g' ]
console.log([...o.g()]);

class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  // 使一個Range表現得像是由數字組成的一個Set
  has(x) {
    return typeof x === "number" && this.from <= x && x <= this.to;
  }

  // 使用集合記法(set notation)回傳該範圍的字串表示值
  toString() {
    return `x | ${this.from} ≤ x ≤ ${this.to}`;
  }

  // 回傳一個迭代氣物件來使一個Range可迭代
  // 注意到此方法的名稱是一個特符號，而非一個字串
  [Symbol.iterator]() {
    /**
     * 每個迭代器實體都必須獨立於其他實體來迭代該範圍
     * 所以需要一個狀態變數追蹤在迭代中的位置
     * 必須從第一個>= from 得整數開始
     */
    let next = Math.ceil(this.from); // 這是回傳的下一個值
    let last = this.to; // 不會回傳大於這個的任何東西
    return {
      // 這是一個迭代器物件
      // next()方法使它成為一個迭代器物件
      // 它必須回傳一個迭代器結果物件
      next() {
        return next <= last // 如果尚未回傳最後一個值
          ? {value: next++} // 就回傳下一個值並遞增他
          : {done: true}; // 否則 指出我們完成了
      },

      // 為了方便，使這個迭代器本身是可迭代的
      [Symbol.iterator]() {
        return this;
      },
    };
  }

  // 範例12-1所展示的[Symbol.iterator]()方法 可修改成以下
  *[Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  }
}
