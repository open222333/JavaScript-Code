// 使用class 重新寫過的Range類別
class Range {
  constructor(from, to) {
    // 儲存這物件的非繼承特性
    this.from = from;
    this.to = to;
  }

  // 若x在此範圍則回傳true 否則回傳false
  include(x) { return this.from <= x && x <= this.to; }

  // 使此類別的實體可迭代
  *[Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  }

  toString() { return `(${this.from}...${this.to})`; }
}

// 類別Span繼承自Range
class Span extends Range {
  constructor(start, length) {
    if (length >= 0) {
      super(start, start + length);
    } else {
      super(start + length, start)
    }
  }
}

let r = new Range(1, 3);
console.log(r.include(2));
console.log(r.toString());
console.log([...r]); // 藉由迭代器轉換成陣列