// Symbol.species
// 一個簡單的Array子類別
// 會為第一和最後一個元素新增取值器
class EZArray extends Array {
  get first() {
    return this[0];
  }
  get last() {
    return this[this.length - 1];
  }
}

let e = new EZArray(1, 2, 3);
let f = e.map((x) => x * x);
console.log(e.last); // 3: EZArray 的最後一個元素 e
console.log(f.last); // 9: f 也是一個擁有 last 特性的 EZArray

// Symbol.species 是唯讀的
// 預設情況下 子類別建構器會繼承取值器函式
// 不希望子類別建構器使用自己的物種

// 方法一
// 使用 defineProperty
Object.defineProperty(EZArray, Symbol.species, { value: Array });

// 方法二
class EZArray2 extends Array {
  static get [Symbol.species]() {
    return Array;
  }
  get first() {
    return this[0];
  }
  get last() {
    return this[this.length - 1];
  }
}
let e2 = new EZArray2(1, 2, 3);
let f2 = e2.map((x) => x * x);
console.log(e2.last); // 3: EZArray 的最後一個元素 e
console.log(f2.last); // undefined: f 是 Array, 沒有 last 取值器
