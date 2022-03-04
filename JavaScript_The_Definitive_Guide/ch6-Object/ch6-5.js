// 測試特性
let o = {
  x: 1
};
console.log("x" in o);
console.log("y" in o);
console.log("toString" in o, "\n"); // 繼承toString特性

// hasOwnProperty() 測試物件是否有特性
console.log(o.hasOwnProperty("x"));
console.log(o.hasOwnProperty("y"));
console.log(o.hasOwnProperty("toString", "\n")); // false 繼承特性

console.log(o.propertyIsEnumerable("x"));
console.log(o.propertyIsEnumerable("y"));
console.log(o.propertyIsEnumerable("toString"), "\n"); // 不可列舉

console.log(o.x !== undefined);
console.log(o.y !== undefined);
console.log(o.toString !== undefined);