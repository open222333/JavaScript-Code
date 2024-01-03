// Symbol.isConcatSpreadable
//用於自定義對象的可擴展性，特別是在使用Array.prototype.concat()方法時的行為。
// 當一個對象的Symbol.isConcatSpreadable屬性被設置為true時，該對象將被視為可展開，並在使用concat方法時展開其元素。
// 當該屬性被設置為false或者未被設置時，對象的行為將取決於其本身，不會被展開。

// 情境一
// 若建立了一個類陣列(array-like ch7-9)物件
// 並希望它被傳入concat()時行為會像一個真正的陣列
let arraylike = {
  length: 1,
  0: 1,
  [Symbol.isConcatSpreadable]: true,
};
[].concat(arraylike); // [1]

// 情境二
// 陣列的子類別都是預設可分散的(spreadable)的
// 若定義了一個陣列子類別並且不希望它與concat()並用的時候行為跟陣列一樣
// 可以新增一個取值器到子類別
class NonSpreadableArray extends Array {
  get [Symbol.isConcatSpreadable]() {
    return false;
  }
}

let a = new NonSpreadableArray(1, 2, 3);
[].concat(a).length; // => 1, 若 a 被分散(spreadable), 長度就會是三個元素
