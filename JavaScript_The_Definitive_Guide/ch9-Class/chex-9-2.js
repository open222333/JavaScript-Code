// 類別與建構器

// 使用建構器的一個Range類別
function Range(from, to) {
  // Range物件的一個建構式函式
  // 不創建以及回傳該物件 只有初始化this
  this.from = from;
  this.to = to;
}

// 所有的Range物件都繼承此物件
// 此特性需命名為prototype才能運作
// Range類別會把預先定義的Range.prototype物件覆寫為它自己的一個物件，而定義的原型物件沒有constructor特性 (ch9-2-2.js)
Range.prototype = {
  // 若x在此範圍中 回傳true 適用數值 文字 Date
  includes: function (x) { return this.from <= x && x <= this.to; },
  // 使類別的實體可迭式的一個產生器函式 適用 數值
  [Symbol.iterator]: function* () {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  },
  // 回傳該範圍的一個字串表示值
  toString: function () { return "(" + this.from + "..." + this.to + ")"; }
};

let r = new Range(1, 3); // 建立一個Range物件 使用new
console.log(r.includes(2));
console.log(r.toString());
console.log([...r]);