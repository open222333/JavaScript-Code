// span.js
// 子類別與原型
// 一個簡單的Range子類別
class Range {
  constructor (from, to) {
    this.from = from;
    this.to = to;
  }

  include (x) { return this.from <= x && x <= this.to; }

  *[Symbol.iterator] () {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  }

  toString () { return `(${this.from}...${this.to})`; }
}

// 子類別的建構器函式
function Span (start, span) {
  if (span >= 0) {
    this.from = start;
    this.to = start + span;
  } else {
    this.to = start;
    this.from = start + span;
  }
}

// 確保Span原型繼承自Range原型
Span.prototype = Object.create(Range.prototype);

// 不繼承 Range.prototype.constructor
// 定義 自己的constructor
Span.prototype.constructor = Span;

// 藉由定義toString()方法 覆寫繼承自Range的toString()方法
Span.prototype.toString = function () {
  return `${this.from}... + ${this.to - this.from}`;
};