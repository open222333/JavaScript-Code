// constructor特性
// 每個常規的JavaScript都自動會有一個prototype特性
let F = function () {}; // 函式物件
let p = F.prototype; // 與F關聯的原型物件
let c = p.constructor; // 與原型關聯的函式
console.log(c === F); // F.prototype.constructor === F

let o = new F(); // 建立類別F的一個物件o
console.log(o.constructor === F); // constructor特性指出其類別


// Range類別會把預先定義的Range.prototype物件覆寫為它自己的一個物件，而定義的原型物件沒有constructor特性
function Range(from, to) {
  this.from = from;
  this.to = to;
}

Range.prototype = {
  constructor: Range, // 明確設定建構器的反向參考
  includes: function (x) { return this.from <= x && x <= this.to; },
  [Symbol.iterator]: function* () {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  },
  toString: function () { return "(" + this.from + "..." + this.to + ")"; }
};

// 另一個方式
// 使用預先定義的原型物件以及其constructor特性 一次新增一個方法給它
Range.prototype.includes = function (x) {
  return this.from <= x && x <= this.to;
};
Range.prototype.toString = function () {
  return "(" + this.from + "..." + this.to + ")";
};