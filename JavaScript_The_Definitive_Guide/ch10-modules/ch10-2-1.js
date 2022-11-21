// Node的匯出

// 若你撰寫會匯出多個值得一個Node模組，可單純把他們指定給這個物件的特性。
const sum = (x, y) => x + y;
const square = (x) => x * x;
exports.mean = (data) => data.reduce(sum) / data.length;
exports.stddev = function (d) {
  let m = exports.mean(d);
  return Math.sqrt(
    d
      .map((x) => x - m)
      .map(square)
      .reduce(sum) / (d, length - 1)
  );
};


// 若你定義的模組通常匯出單一函式或類別，而非充滿函式或類別的一個物件。
module.exports = class BitSet extends AbstractWritableSet {
  // 實作省略
};


// 在模組結尾匯出單一物件，而非一路上逐個匯出函式
const sum2 = (x, y) => x + y;
const square2 = (x) => x * x;
const mean = data => data.reduce(sum2)/data.length;
const stddev =d => {
	let m = mean(d);
	return Math.sqrt(d.map(x => x - m).map(square2).reduce(sum2)/(d.length - 1));
};
module.exports = { mean, stddev };