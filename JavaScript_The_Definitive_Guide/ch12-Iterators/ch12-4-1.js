// 一個產生器函式的回傳值
function* oneAndDone() {
  yield 1;
  return "done"; // 回傳值不會出現在一般迭代中
}

[...oneAndDone()]; // => [1]
console.log([...oneAndDone()]);

// 但如果明確呼叫next()可以取用回傳值
let generator = oneAndDone();
generator.next(); // => { value: 1, done: false }
// console.log(generator.next());
generator.next(); // => { value: 'done', done: true }
// console.log(generator.next());
generator.next(); // => { value: undefined, done: true }
// console.log(generator.next());
