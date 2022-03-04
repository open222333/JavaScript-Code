// instanceof 運算子
let d = new Date(); // 以Date()建構器創建一個新的物件
console.log(d instanceof Date) // => true; d是由Date創建的
console.log(d instanceof object) // => true; 所有物件都是Object實體
console.log(d instanceof Number) // => false;
let a = [1, 2, 3]
console.log(a instanceof Array) // => true;
console.log(a instanceof Object) // => true
console.log(a instanceof RegExp) // => false; 不是正則表達式