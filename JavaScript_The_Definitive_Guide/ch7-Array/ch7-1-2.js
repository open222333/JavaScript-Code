// 陣列 分散運算子
let a = [1, 2, 3];
let b = [0, ...a, 4];
console.log(b)

let original = [1, 2, 3];
let copy = [...original];
copy[0] = 0; // 修改copy 不會改變 original
console.log(original[0]);

let digits = [..."0123456789ABCDEF"];
console.log(digits);

let letters = [..."hello world"];
console.log([...new Set(letters)]);