// 靜態方法
class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  include(x) { return this.from <= x && x <= this.to; }

  *[Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  }

  toString() { return `(${this.from}...${this.to})`; }

  // 靜態方法
  // 定義的方法為Range.parse(), 而非 Range.prototype.parse(), 須透過建構器調用
  static parse(s) {
    let matches = s.matches(/^\((\d+)\.\.\.(\d+)\)$/);
    if (!matches) {
      throw new TypeError(`Cannot parse Range from "${s}".`)
    }
    return new Range(parseInt(matches[1]), parseInt(matches[2]));
  }
}

let r = Range.parse('(1...10'); // 回傳一個新的Range物件
r.parse('(1...10)'); // TypeError: r.parse非函式