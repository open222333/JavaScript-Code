// 簡單的JavaScript類別

function range(from, to) {
  // 工廠函式 回傳一個新的範圍(range)物件
  let r = Object.create(range.methods); // 使用Object.create() 創建一個物件繼承 定義共有的方法

  // 儲存新的範圍物件
  r.from = from;
  r.to = to;

  return r;
}

// 這個原型物件定義所有的範圍物件都會繼承的方法
range.methods = {
  // 若x在範圍中 則回傳true 是用數值範圍 文字 Date
  includes(x) { return this.from <= x && x <= this.to; },

  // 使這個類別的實體可迭代的一個產生器函式 只能用於數值範圍
  *[Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  },

  // 回傳該範圍的一個字串表示值
  toString() { return "(" + this.from + "..." + this.to + ")"; }
};

// range物件使用範例
let r = range(1, 3); // 創建range物件
r.includes(2) // true : 2在範圍中
r.toString() // => "(1...3)"
console.log([...r]); // 藉由迭代器轉成陣列