// Object.getPrototypeOf() 查詢物件的原型
Object.getPrototypeOf({}); // => Object.prototype
Object.getPrototypeOf([]); // => Array.prototype
Object.getPrototypeOf(() => {}); // => Function.prototype

// Object.prototype.isPrototypeOf() 判斷物件是否另一個物件的原型
let p = { x: 1 };
let o = Object.create(p);
p.isPrototypeOf(o); // => true, o 繼承自 p
Object.prototype.isPrototypeOf(p); // => true, p 繼承自 prototype
Object.prototype.isPrototypeOf(o); // => true, o 繼承自 prototype

// Object.setPrototypeOf() 改變物件的原型
let o1 = { x: 1 };
let p1 = { y: 2 };
Object.setPrototypeOf(o1, p1); // 將 o1 的原型設為 p1
console.log(`o1.y => ${o1.y}`); // o1 現在繼承特性 ｙ1
let a1 = [1, 2, 3];
Object.setPrototypeOf(a1, p1); // 把陣列 a1 的原型設為 p1
console.log(`a1.join => ${a1.join}`); // => undefined: a1 不再有一個join方法

// 早期的 JavaScript 會透過 __proto__ 特性對外提供物件的 prototype 屬性
// __proto__ 一個特別用途：定義一個物件字面值的原型
let p2 = { z: 3 };
let o2 = {
  x: 1,
  y: 2,
  __proto__: p2,
};

console.log(`o2.z => ${o2.z}`); // => 3: o2 繼承自 p2
