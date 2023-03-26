// 迭代器的運作方式

// 使用Symbol.iterator寫出for/of迴圈跑一個可迭代物件
let iterable = [99];
let iterator = iterable[Symbol.iterator]();
for (let result = iterator.next(); !result.done; result = iterator.next()) {
  console.log(result.value);
}

// 迭代一個以部分使用的迭代器時
let list = [1, 2, 3, 4, 5];
let iter = list[Symbol.iterator]();
let head = iter.next().value; // head == 1
let tail = [...iter]; // tail == [2,3,4,5]
