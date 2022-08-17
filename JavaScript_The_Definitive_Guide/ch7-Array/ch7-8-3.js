// concat() 相加陣列
// 回傳並創建新陣列 可考慮使用 push() splice()就地修改陣列
let a = [1, 2, 3];
console.log(a.concat(4, 5)); // [ 1, 2, 3, 4, 5 ]
console.log(a.concat([4, 5], [6, 7]));
// [
//   1, 2, 3, 4,
//   5, 6, 7
// ]
console.log(a.concat(4, [5, [6, 7]])); // [ 1, 2, 3, 4, 5, [ 6, 7 ] ]
console.log(a); // [ 1, 2, 3 ] - 原陣列沒有變