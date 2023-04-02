// 產生器範例

/**
 * 產生器函式 產出斐波那契數(Fibonacci numbers)
 */
function* fibonacciSequence() {
  let x = 0,
    y = 1;
  for (;;) {
    // 無窮迴圈
    yield y;
    [x, y] = [y, x + y]; // 注意 解構指定
  }
}

/**
 * 回傳 第n個婓波那契數
 */
function fibonacci(n) {
  // fibonacciSequence有無窮迴圈會一直產生值
  for (let f of fibonacciSequence()) {
    if (n-- <= 0) return f;
  }
}

fibonacci(20); // => 10946
console.log(fibonacci(20));

// 產出所指定的可迭代物件的前n個元素
function* take(n, iterable) {
  let it = iterable[Symbol.iterator](); // 取得可迭代物件的迭代器
  while (n-- > 0) {
    let next = it.next(); // 從迭代器取得下個項目
    if (next.done) return; // 若沒有值 則回傳
    else yield next.value; // 否則產出該值
  }
}

// 前5個婓波那契數所構成的一個陣列
[...take(5, fibonacciSequence())]; // => [ 1, 1, 2, 3, 5 ]
console.log([...take(5, fibonacciSequence())]);

// 給定可迭代物件所成的一個陣列，以交錯的順序產出他們的元素
function* zip(...iterables) {
  // 為每個可迭代物件取得一個迭代器
  let iterators = iterables.map((i) => i[Symbol.iterator]());
  let index = 0;
  while (iterators.length > 0) {
    // 還有其他迭代器時
    if (index >= iterators.length) {
      // 最後一個迭代器
      index = 0; // 回到第一個
    }
    // 從下一個迭代器取得下一個項目
    let item = iterators[index].next();
    if (item.done) {
      // 迭代器完成
      iterators.splice(index, 1); // 從陣列移除
    } else {
      yield item.value;
      index++;
    }
  }
}

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

// 交錯產出三個可迭代物件
[...zip(oneDigitprimes(), "ab", [0])]; // => [2,'a',0,3,'b',5,7]
console.log([...zip(oneDigitprimes(), "ab", [0])]);
