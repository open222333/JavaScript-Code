// const BitSet = (function () {
//   /**
//    * 把 BitSet 設為此函式的回傳值
//    */
//   function isValid(set, n) {}
//   function has(set, byte, bit) {}
//   const BITS = new Uint8Array([1, 2, 4, 8, 16, 32, 64, 128]);
//   const MASKS = new Uint8Array([~1, ~2, ~4, ~8, ~16, ~32, ~64, ~128]);

//   return class BitSet extends AbstractWritableSet {};
// })();

// 定義一個統計模組
const stats = (function () {
  const sum = (x, y) => x + y;
  const square = (x) => x * x;

  function mean(data) {
    return data.reduce(sum) / data.length;
  }

  function stddev(data) {
    let m = mean(data);
    return Math.sqrt(
      data
        .map((x) => x - m)
        .map(square)
        .reduce(sum) /
        (data.length - 1)
    );
  }

  return { mean, stddev };
})();

// 統計模組使用方式
console.log(stats.mean([1, 3, 5, 7, 9]));
console.log(stats.stddev([1, 3, 5, 7, 9]));
