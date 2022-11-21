// complex.js
// 範例 一個複數類別
/**
 * 這個Complex類別的實體代表複數
 * 一個複數就是一個實體(real number)與一個虛數(imaginary number)的和(sum)
 * 而那個虛數i是-1的平方根(square root)
 */
class Complex {
  constructor (real, imaginary) {
    this.r = real; // 此欄位存放數字的實部
    this.i = imaginary; // 此欄位存放數字的虛部
  }

  // 複數的加法
  plus (that) {
    return new Complex(this.r + that.r, this.i + that.i);
  }

  // 複數的乘法
  times (that) {
    return new Complex(this.r * that.r - this.i * that.i, this.r * that.i + this.i * that.r);
  }

  // 複數算數方法的靜態變體
  static sum (c, d) { return c.plus(d); }
  static product (c, d) { return c.times(d); }

  // 定義取值器的實體方法
  get real () { return this.r; }
  get imaginary () { return this.i; }
  get magnitude () { return Math.hypot(this.r, this.i); }

  // 類別應該幾乎會有一個toString()方法
  toString () { return `${this.r},${this.i}`; }

  // 定義一個方法 測試類別的兩個實體
  equals (that) {
    return that instanceof Complex && this.r === that.r && this.i === that.i;
  }

  // 一旦類別主體內的靜態欄位受到支援
  // 就能定義常數
  // static ZERO = new Complex(0, 0);
}

// 存放預先定義的一些實用常數
Complex.ZERO = new Complex(0, 0);
Complex.ONE = new Complex(1, 0);
Complex.I = new Complex(0, 1);

// 新增方法至現有的類別
Complex.prototype.conj = function () { return new Complex(this.r, -this.i); };

// 使用類別範例
let c = new Complex(2, 3);
let d = new Complex(c.i, c.r);

console.log(c.plus(d).toString());
c.magnitude // 一個取值器函式
Complex.product(c, d) // 靜態方法
console.log(Complex.ZERO.toString())