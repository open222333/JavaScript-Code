// 一個階層架構的抽象與具體集合類別
// set.js

/**
 * AvstractSet 類別定義單一抽象方法has()
 */
class AbstracSet {
  has(x) {
    throw new Error("Abstrac method");
  }
}

/**
 * NotSet 是 AbstractSet的具體子類別
 * 此集合的成員，全都為不是其他集合成員的值
 * 因以另外集合來定義，不可寫入
 * 因有無限成員，不可列舉
 * 功能為，測試成員資格，並使用科學記號將之轉換為一個字串
 */
class NotSet extends AbstracSet {
  constructor(set) {
    super();
    this.set = set;
  }

  // 對繼承來的抽象方法實作
  has(x) {
    return !this.set.has(x);
  }

  toString() {
    return `{x| x ∉ ${this.set.toString()}}`;
  }
}

/**
 * RangeSet 是 AbstractSet的具體子類別
 * 此集合的成員，全都是介於from和to之間的值，包含端點
 * 因成員可以是浮點數，不可列舉，並且無有意義的大小
 */
class RangeSet extends AbstracSet {
  constructor(from, to) {
    super();
    this.from = from;
    this.to = to;
  }

  has(x) {
    return x >= this.from && x <= this.to;
  }
  toString() {
    return `x| ${this.from} ≤ x ≤ ${this.to}`;
  }
}

/**
 * AbstractEnumerableSet 是 AbstractSet的抽象子類別
 * 定義一個抽象的取值器回傳集合的大小 以及 一個抽象的迭代器
 * 實作具體的 isEmpty(),toString(),equals()方法
 */
class AbstractEnumerableSet extends AbstracSet {
  get size() {
    throw new Error("Abstract method");
  }

  [Symbol.iterator]() {
    throw new Error("Abstract method");
  }

  isEmpty() {
    return this.size === 0;
  }
  toString() {
    return `{${Array.from(this).join(",")}}`;
  }
  equals(set) {
    // 如果另一個集合不可列舉 回傳 false
    if (!(set instanceof AbstractEnumerableSet)) return false;
    // 如果沒有相同大小 就不相等
    if (this.size !== set.size) return false;
    // 迴圈跑過這個集合的元素，若有元素不在另一個集合，則不相等
    for (let element of this) {
      if (!set.has(element)) return false;
    }

    // 都相符則集合相等
    return true;
  }
}

/**
 * SingletonSet 是 AbstractSet的具體子類別
 * 單體集合是一個只有單一成員的唯讀集合
 */
class SingletonSet extends AbstractEnumerableSet {
  constructor(member) {
    super();
    this.member = member;
  }

  // 實作3個方法
  has(x) {
    return x === this.member;
  }
  get size() {
    return 1;
  }
  *[Symbol.iterator]() {
    yield this.member;
  }
}

/**
 * AbstractWritableSet 是 AbstractEnumerableSet的抽象子類別
 * 定義 抽象方法insert(),remove()
 * 在集合中插入和移除個別元素，實作 add(),subtract(),intersect()
 */
class AbstractWritableSet extends AbstractEnumerableSet {
  insert(x) {
    throw new Error("Abstract method");
  }
  remove(x) {
    throw new Error("Abstract method");
  }

  add(set) {
    for (let element of set) {
      this.insert(element);
    }
  }

  subtract(set) {
    for (let element of set) {
      this.remove(element);
    }
  }

  intersect(set) {
    for (let element of set) {
      if (!set.has(element)) {
        this.remove(element);
      }
    }
  }
}

/**
 * BitSet 是 AbstractWritableSet的具體子類別
 * 具有有效率的固定大小集合
 * 適合用於 元素是非負整數而且小於某個最大大小集合
 */
class BitSet extends AbstractWritableSet {
  constructor(max) {
    super();
    this.max = max; // 最大整數
    this.n = 0; // 集合中有多少整數
    this.numBytes = Math.floor(max / 8) + 1; // 需要的位元組(bytes)
    this.data = new Uint8Array(this.numBytes);
  }

  // 內部方法 檢查一個值是否為此集合的合法成員
  _valid(x) {
    return Number.isInteger(x) && x >= 0 && x <= this.max;
  }

  // 內部方法 測試data陣列的指定位元組的指定位元是否有設定 回傳true false
  _has(byte, bit) {
    return (this.data[byte] & BitSet.bit[bit]) !== 0;
  }

  // BitSet 是否有 x
  has(x) {
    if (this._valid(x)) {
      let byte = Math.floor(x / 8);
      let bit = x % 8;
      return this._has(byte, bit);
    } else {
      return false;
    }
  }

  // 把值x 插入到這個BitSet
  insert(x) {
    if (this._valid(x)) {
      let byte = Math.floor(x / 8);
      let bit = x % 8;
      if (!this._has(byte, bit)) {
        /**
         * 若那個位元尚未設定則設定他並遞增集合
         * x |= y	x = x | y
         */
        this.data[byte] |= BitSet.bits[bit];
        this.n++;
      }
    } else {
      throw new TypeError("Invalid set element: " + x);
    }
  }

  remove(x) {
    if (this._valid(x)) {
      let byte = Math.floor(x / 8);
      let bit = x % 8;
      if (this._has(byte, bit)) {
        this.data[byte] &= BitSet.masks[bit];
        this.n--;
      }
    } else {
      throw new TypeError("Invalid set element: " + x);
    }
  }

  get size() {
    return this.n;
  }

  *[Symbol.iterator]() {
    for (let i = 0; i <= this.max; i++) {
      if (this.has(i)) {
        yield i;
      }
    }
  }
}

BitSet.bits = new Uint8Array([1, 2, 4, 8, 16, 32, 64, 128]);
BitSet.masks = new Uint8Array([~1, ~2, ~4, ~8, ~16, ~32, ~64, ~128]);
