// 簡寫方法
// 一個函式被定義為一個物件的特性 則稱為方法(method)
let square = {
  area: function() {
    return this.side * this.side;
  },
  side: 10
};
console.log(square.area());
// ES6簡寫方法
let square_2 = {
  area() {
    return this.side * this.side
  },
  side: 10
};
console.log(square_2.area())

// 使用Symbol當特性名稱
const METHOD_NAME = "m";
const symbol = Symbol();
let weirdMethods = {
  "method With Spaces"(x) {
    return x + 1
  },
  [METHOD_NAME](x) {
    return x + 2;
  },
  [symbol](x) {
    return x + 3;
  }
}
console.log(weirdMethods["method With Spaces"](1));
console.log(weirdMethods[METHOD_NAME](1));
console.log(weirdMethods[symbol](1));