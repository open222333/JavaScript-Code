// 實作可迭代物件
// 一個可迭代的數值Range類別
/**
 * 一個Range物件代表一個範圍的數字{x:from <= x <= to}
 * Range 定義了一個has()方法用以測試一個給定的數字是否為該範圍的成員之一。
 * Range是可迭代的，並會迭代該範圍中的所有整數
 */
class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  // 使一個Range表現得像是由數字組成的一個Set
  has(x) {
    return typeof x === "number" && this.from <= x && x <= this.to;
  }

  // 使用集合記法(set notation)回傳該範圍的字串表示值
  toString() {
    return `x | ${this.from} ≤ x ≤ ${this.to}`;
  }

  // 回傳一個迭代氣物件來使一個Range可迭代
  // 注意到此方法的名稱是一個特符號，而非一個字串
  [Symbol.iterator]() {
    /**
     * 每個迭代器實體都必須獨立於其他實體來迭代該範圍
     * 所以需要一個狀態變數追蹤在迭代中的位置
     * 必須從第一個>= from 得整數開始
     */
    let next = Math.ceil(this.from); // 這是回傳的下一個值
    let last = this.to; // 不會回傳大於這個的任何東西
    return {
      // 這是一個迭代器物件
      // next()方法使它成為一個迭代器物件
      // 它必須回傳一個迭代器結果物件
      next() {
        return next <= last // 如果尚未回傳最後一個值
          ? {value: next++} // 就回傳下一個值並遞增他
          : {done: true}; // 否則 指出我們完成了
      },

      // 為了方便，使這個迭代器本身是可迭代的
      [Symbol.iterator]() {
        return this;
      },
    };
  }

  // 範例12-1所展示的[Symbol.iterator]()
  *[Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  }
}

// 紀錄1到10數字
for (let x of new Range(1, 10)) console.log(x);
[...new Range(-2, 2)]; // => [ -2, -1, 0, 1, 2 ]
console.log([...new Range(-2, 2)]);

// 回傳一個可迭代物件，來迭代將f()套用到來源可迭代物件的每個值之後的結果
function map(iterable, f) {
  let iterator = iterable[Symbol.iterator]();
  return {
    // 此物件同時是迭代器及可迭代物件
    [Symbol.iterator]() {
      return this;
    },
    next() {
      let v = iterator.next();
      if (v.done) {
        return v;
      } else {
        return {value: f(v.value)};
      }
    },
  };
}

// 映射一個範圍的整數到他們的平方，並轉換為一個陣列
[...map(new Range(1, 4), (x) => x * x)]; // => [ 1, 4, 9, 16 ]
console.log([...map(new Range(1, 4), (x) => x * x)]);

// 回傳一個可迭代物件，他會過濾指定的可迭代物件，
// 只迭代判定式(predicate)為之回傳tru的那些元素
function filter(iterable, predicate) {
  let iterator = iterable[Symbol.iterator]();
  return {
    // 此物件同時是迭代器及可迭代物件
    [Symbol.iterator]() {
      return this;
    },
    next() {
      for (;;) {
        let v = iterator.next();
        if (v.done || predicate(v.value)) {
          return v;
        }
      }
    },
  };
}

// 過濾一個範圍，只留下偶數
[...filter(new Range(1, 10), (x) => x % 2 === 0)]; // => [ 2, 4, 6, 8, 10 ]
console.log([...filter(new Range(1, 10), (x) => x % 2 === 0)]);

// 若有大型字串，若要單詞化，須先處理字串
function words(s) {
  let r = /\s+|$/g; // 匹配一個或多個空格或結尾
  r.lastIndex = s.match(/[^ ]/).index; // 在第一個非空格開始匹配
  return {
    // 回傳一個可迭代的迭代器物件
    [Symbol.iterator]() {
      return this;
    },
    next() {
      // 使其成為一個迭代器
      let start = r.lastIndex; // 從上次匹配結束之處重新開始
      if (start < s.length) {
        // 若尚未完成
        let match = r.exec(s); // 匹配下一個字詞邊界
        if (match) {
          // 若到一個就回傳該字詞
          return {value: s.substring(start, match.index)};
        }
      }
      return {done: true};
    },
  };
}

[...words(" abc def ghi! ")]; // => [ 'abc', 'def', 'ghi!' ]
console.log([...words(" abc def ghi! ")]);
