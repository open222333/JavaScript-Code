// 特性的屬性

// Object.getOwnPropertyDescriptor()
// 為一個指定的物件指名的特性獲取特性描述器
// 回傳 { value: 1, writable:true, enunerable:true, configurable:true}
Object.getOwnPropertyDescriptor({ x: 1 }, "x");

// 這裡有一個物件具有一個唯讀的存取器特性
const random = {
  get octet() {
    return Math.floor(Math.random() * 256);
  },
};

// 回傳 {get: /*func*/, set:undefined, enumerable:true, configurable:true}
Object.getOwnPropertyDescriptor(random, "octet");

// 為繼承而來的特性和不存在的特性回傳 undefined
Object.getOwnPropertyDescriptor({}, "x"); // => undefined 沒有這個特秀
Object.getOwnPropertyDescriptor({}, "toString"); // => 繼承的

// Object.defineProperty()
// 設定一個特性的屬性或以指定的屬性建立一個新的特性, 省略的屬性會被當作 false undefined
let o = {}; // 沒有特性
// 新增一個不可列舉的資料特性x並帶有值 1
Object.defineProperty(o, "x", {
  value: 1,
  writable: true,
  enumerable: false,
  configurable: true,
});

console.log(`Object.defineProperty o.x => ${o.x}`); // => 1
console.log("Object.defineProperty Object.keys(o) =>");
console.log(Object.keys(o)); // => []
// 修改特性x讓他是唯讀的
Object.defineProperty(o, "x", { writable: false });
// 試著修改特性的值
o.x = 2; // 失敗 嚴格模式中會擲出 TypeError
console.log(`Object.defineProperty o.x => ${o.x}`); // => 1
// 把x從一個資料特性變為存取器特性
Object.defineProperty(o, "x", {
  get: function () {
    return 0;
  },
});
console.log(`Object.defineProperty o.x => ${o.x}`); // => 0

// Object.defineProperties()
// 一次建立或修改多個特性
let p = Object.defineProperties(
  {},
  {
    x: { value: 1, writable: true, enumerable: true, configurable: true },
    y: { value: 1, writable: true, enumerable: true, configurable: true },
    r: {
      get() {
        return Math.sqrt(this.x * this.x + this.y + this.y);
      },
      enumerable: true,
      configurable: true,
    },
  }
);

console.log(`Object.defineProperties() p.r => ${p.r}`);
