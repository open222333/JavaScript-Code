// Symbol.hasInstance

/**
 * Symbol.hasInstance 主要用於定義對象的 instanceof 操作符的行為。
 * 當一個對象被當作構造函數（constructor）使用時，instanceof 操作符會檢查這個對象的原型鏈上是否存在 Symbol.hasInstance 方法，並調用這個方法。
 */

// 定義自定義對象的 Symbol.hasInstance 方法
class MyObject {
  static [Symbol.hasInstance](instance) {
    // 定義對象被 instanceof 時的行為
    return instance && instance.hasOwnProperty("myProperty");
  }
}

const obj = { myProperty: "Hello" };

console.log(obj instanceof MyObject); // true

// 內建對象的 Symbol.hasInstance 方法
class CustomArray {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}

const myArray = [1, 2, 3];

console.log(myArray instanceof CustomArray); // true

// 定義可作為一型別 來與 instanceof 並用的一個物件
let iint8 = {
  [Sysbol.hasInstance](x) {
    return Number.isInteger(x) && x >= 0 && x <= 255;
  },
};

128 instanceof uint8; // => true
256 instanceof uint8; // => false : 太大
Math.PI instanceof uint8; // => false : 不是整數
