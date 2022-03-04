// 稀疏(sparse)陣列
let a = new Array(5); // 沒有元素 但a.length = 5;
a = []; // 沒有元素 但a.length = 0;
a[1000] = 0; // 新增一個元素 長度為1001;

let a1 = [, ]; // 沒有元素 但length = 1
let a2 = [undefined];
console.log(0 in a1); // a1沒有索引為0的值
console.log(0 in a2); // 0索引值有 undefined值