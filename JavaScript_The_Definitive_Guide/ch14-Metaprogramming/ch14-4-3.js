// Symbol.toStringTag
/**
 * Symbol.toStringTag 的主要作用是定義對象的字符串標籤，這對於更清晰地表示對象的類型很有幫助。
 * 當一個對象被轉換為字符串時，JavaScript 會使用這個標籤。
 */

// 自定義對象的 Symbol.toStringTag 屬性
class CustomObject {
  get [Symbol.toStringTag]() {
    return "CustomObject";
  }
}

const obj = new CustomObject();

console.log(Object.prototype.toString.call(obj)); // [object CustomObject]

// 內建對象的 Symbol.toStringTag 屬性：
// 內建的 JavaScript 對象（如 Array、RegExp 等）也定義了 Symbol.toStringTag 屬性，用於表示對象的類型。
const arr = [1, 2, 3];

console.log(Object.prototype.toString.call(arr)); // [object Array]

// 提供更精確的類型檢測，而不僅僅是使用 typeof 運算符。
// 它可以區分不同對象的具體類型，包括內建對象（如 Array、Object）和自定義對象。
function classof(o) {
  return Object.prototype.toString.call(o).slice(8, -1);
}

// classof 使用範例
// 自定義類別
class Range {
  get [Symbol.toStringTag]() {
    return "Range";
  }
}

let r = new Range(1, 10);
console.log(Object.prototype.toLocaleString.call(r)); // [object Range]
console.log(classof(r)); // Range
