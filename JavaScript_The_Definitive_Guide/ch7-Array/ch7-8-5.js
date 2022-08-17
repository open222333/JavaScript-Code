// 使用 slice()、splice()、fill()、與copyWithin()操作子陣列
// slice(start, end)
// 回傳指定陣列的一個切片或子陣列 
let a = [1, 2, 3, 4, 5];
console.log('a陣列:' + a);
console.log(a.slice(0, 3)); // [ 1, 2, 3 ]
console.log(a.slice(3)); // [ 4, 5 ]
console.log(a.slice(1, -1)); // [ 2, 3, 4 ]
console.log(a.slice(-3, -2)); // [ 3 ]
console.log('a陣列:' + a);

// splice()
// 在陣列中插入或移除的通用方法，會修改被調用的陣列，前兩個引數指出哪些元素要被刪除，之後任意引數則是欲加入元素
let b = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('b陣列:' + b);
console.log(b.splice(4)); // [ 5, 6, 7, 8 ]
console.log('b陣列:' + b);
console.log(b.splice(1, 2)); // [ 2, 3 ]
console.log('b陣列:' + b);
console.log(b.splice(1, 1)); // [ 4 ]
console.log('b陣列:' + b);

let c = [1, 2, 3, 4, 5];
console.log('c陣列:' + c);
console.log(c.splice(2, 0, 'a', 'b')); // []
console.log('c陣列:' + c);
console.log(c.splice(2, 2, [1, 2], 3)); // [ 'a', 'b' ]
console.log('c陣列:' + c);

// fill()
// 將一個陣列的元素或切片設為一個指定的值，修改被調用的陣列
let d = new Array(5); // 宣告長度為5 沒有元素的陣列
console.log('d陣列:' + d);
console.log(d.fill(0)); // [ 0, 0, 0, 0, 0 ]
console.log('d陣列:' + d);
console.log(d.fill(9, 1)); // [ 0, 9, 9, 9, 9 ]
console.log('d陣列:' + d);
console.log(d.fill(8, 2, -1)); // [ 0, 9, 8, 8, 9 ]
console.log('d陣列:' + d);

// copyWithin(目的索引, 要拷貝的元素索引(預設0), 要拷貝的元素索引結尾)
// 把陣列的一個切片複製到該陣列的新位置，會修改被調用的陣列。高效能，適用於具型陣列。
let e = [1, 2, 3, 4, 5];
console.log('e陣列:' + e);
console.log(e.copyWithin(1)); // 
console.log('e陣列:' + e);
console.log(e.copyWithin(2, 3, 5)); // 把3-5 拷貝到索引2
console.log('e陣列:' + e);
console.log(e.copyWithin(0. - 2));
console.log('e陣列:' + e);