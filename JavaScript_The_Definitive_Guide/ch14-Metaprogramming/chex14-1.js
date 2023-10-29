// 從一個物件拷貝特性和他們的屬性到另一個物件
/**
 * 定義一個新的 Object.assignDescriptors() 函式
 * 運作像 Object.assign() 但會從來源物件拷貝特性描述器到目標物件 而非只拷貝特性值
 *
 * 此函式會拷貝所有自有特性，可列舉和不可列舉都會。
 * 而因為會拷貝特性描述器，會從來源物件可拷貝取值器函式，並覆寫目標物件中的設值器函式，而非調用那些取值器和設值器。
 *
 * Object.assignDescripts() 會傳播 Object.defineProperty() 所擲出的任何 TypeError。
 * 這可能是發生在目標物件是密封的或凍結的時候，或是有任何的來源特性試著改變目標物件上的現有不可配置的特性。
 *
 * assignDescriptors特性是藉由 Object.defineProperty() 新增到Object的，所以那個新韓式可被建立為一個不可列舉的特性
 * 跟 Object.assign() 一樣
 */

Object.defineProperty(Object, "assignDescriptors", {
  // 與 Object.assign() 的屬性相符
  writable: true,
  enumerable: false,
  configurable: true,
  // 作為 assignDescriptors 特性之值的函式
  value: function (target, ...sources) {
    for (let source of sources) {
      for (let name of Object.getOwnPropertyNames(source)) {
        let desc = Object.getOwnPropertyDescriptor(source, name);
        Object.defineProperty(target, name, desc);
      }

      for (let symbol of Object.getOwnPropertySymbols(source)) {
        let desc = Object.getOwnPropertyDescriptor(source, symbol);
        Object.defineProperty(target, symbol, desc);
      }
    }
    return target;
  },
});

// 定義帶有取值器的物件
let o = {
  c: 1,
  get count() {
    return this.c++;
  },
};

let p = Object.assign({}, o); // 拷貝特性值
let q = Object.assignDescriptors({}, o); // 拷貝特性描述器

console.log(`p.count 現在只是資料特性 => ${p.count}`)
console.log(`p.count 計數器未遞增 => ${p.count}`)
console.log(`q.count 初次拷貝時候 遞增一次 => ${q.count}`)
console.log(`q.count 拷貝取值器方法 遞增 => ${q.count}`)