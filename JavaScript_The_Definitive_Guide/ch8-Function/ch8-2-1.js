// 函式調用
// 印出o的每個特性的名稱與值。回傳undefined。
function printprops(o) {
  for (let p in o) {
    console.log(`${p}: ${o[p]}\n`);
  }
}

// 計算笛卡兒點(x1,y1)與(x2,y2)之間的距離(distance)
function distance(x1, y1, x2, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

// 一個地回函是(會呼叫自身的)，用以計算階乘(factorials)
// 回想到x! 是 x與小於它的所有正整數之乘積(product)
function factorial(x) {
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}

printprops({
  x: 1
});
let total = distance(0, 0, 2, 1) + distance(2, 1, 3, 5);
let probability = factorial(5) / factorial(13);

// 定義並調用一個函式來判斷我們是否處於嚴格模式
// 嚴格模式 調用情境(this值) 會是 undefined
// 非嚴格模式 調用情境(this值) 會是 全域物件
const strict = (function () {
  return !this;
}());
console.log(strict)