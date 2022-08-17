// 陣列的搜尋和排序方法
// indexOf() 
// 從開頭到結尾搜尋，回傳指定值的元素索引，若無則回傳-1
// lastIndexOf()
// 從結尾到開頭搜尋，回傳指定值的元素索引，若無則回傳-1
let a = [0, 1, 2, 1, 0];
console.log('a.indexOf(1) => ' + a.indexOf(1));
console.log('a.lastIndexOf(1) => ' + a.lastIndexOf(1));
console.log('a.indexOf(1) => ' + a.indexOf(3));

function findall(a, x) {
  /**
   * 陣列a找出值x的所有出現處，並回傳含有匹配索引的陣列
   */
  let results = [],
    len = a.length,
    pos = 0;
  while (pos < len) {
    pos = a.indexOf(x, pos);
    if (pos === -1) break;
    results.push(pos);
    pos = pos + 1;
  }
  return results;
}

// includes()
// 回傳陣列是否含有引數的值，是則回傳true，否則回傳false
let b = [1, true, 3, NaN];
console.log('b.includes(true) => ' + b.includes(true));
console.log('b.includes(2) => ' + b.includes(2));
console.log('b.includes(NaN) => ' + b.includes(NaN));
console.log('b.indexOf(NaN) => ' + b.indexOf(NaN));

// sort()
// 就地排序一個陣列
let c = ['banana', 'cherry', 'apple'];
console.log('c 排序前 => ' + c);
c.sort();
console.log('c 排序後 => ' + c);

let d = [33, 4, 1111, 222];
console.log('d 排序前 => ' + d);
d.sort();
console.log('d 排序(字母排序)後 => ' + d);
d.sort(function(a, b) {
  /**
   * 比較函式 回傳 < 0, 0, > 0
   */
  return a - b;
})
console.log('d 排序(數值順序)後 => ' + d);
d.sort((a, b) => b - a);
console.log('d 反向排序(數值順序)後 => ' + d);

let e = ['ant', 'Bug', 'cat', 'Dog'];
console.log('e 排序前 => ' + e);
e.sort();
console.log('e 排序(區分大小寫)後 => ' + e);
e.sort(function(s, t) {
  /**
   * 不區分大小寫排序
   */
  let a = s.toLowerCase();
  let b = t.toLowerCase();
  if (a < b) return -1;
  if (a > b) return 1;
})
console.log('e 排序(不區分大小寫)後 => ' + e);

// reverse()
// 反轉陣列元素順序。
let f = [1, 2, 3];
console.log('f 反轉排序前 => ' + f);
f.reverse();
console.log('f 反轉排序後 => ' + f);