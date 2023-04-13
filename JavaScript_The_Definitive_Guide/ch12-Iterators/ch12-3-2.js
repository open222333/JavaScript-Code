// yield*和遞迴產生器

function* oneDigitprimes() {
  yield 2;
  yield 3;
  yield 5;
  yield 7;
}

// 循序非交錯產出多個可迭代物件的元素
function* sequence(...iterables) {
  for (let iterable of iterables) {
    for (let item of iterable) {
      yield item;
    }
  }
}

[...sequence("abc", oneDigitprimes())]; // => ['a', 'b', 'c', 2, 3, 5, 7]
console.log([...sequence("abc", oneDigitprimes())]);

// 使用yield*簡化
function* sequence2(...iterables) {
  for (let iterable of iterables) {
    yield* iterable;
  }
}

[...sequence2("abc", oneDigitprimes())]; // => ['a', 'b', 'c', 2, 3, 5, 7]
console.log([...sequence2("abc", oneDigitprimes())]);
