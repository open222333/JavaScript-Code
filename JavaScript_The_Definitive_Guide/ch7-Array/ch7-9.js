let a = {};

// 新增特性
let i = 0;
while (i < 10) {
  a[i] = i * i;
  i++;
}
a.length = i;

// 迭代
let total = 0;
for (let j = 0; j < a.length; j++) {
  total += a[j];
  console.log(total);
}

console.log(a);

function isArrayLike(o) {
  /**
   * 判斷o是否為一個類陣列物件
   * 字串和函式有數值的length特性，但會被typeof測試排除
   * DOM的文字節點(text nodes) 有數值的length特性，可能需要o.nodeType !== 3 排除
   */
  if (o && // o不是null, undefined
    typeof o === 'object' && // o是一個物件
    Number.isFinite(o.length) && // o.length是一個有限數字
    o.length >= 0 && // o.length 是非負的
    Number.isInteger(o.length) && // o.length 是一個整數
    o.length < 4294967295 // o.length < 2^32-1
  ) {
    return true;
  } else {
    return false;
  }
}

let a_1 = {
  "0": "a",
  "1": "b",
  "2": "c",
  length: 3
}; // 類陣列物件

console.log(Array.prototype.join.call(a_1, "+"));
console.log(Array.prototype.map.call(a_1, x => x.toUpperCase()));
console.log(Array.prototype.slice.call(a_1, 0)); // 真正的陣列拷貝
console.log(Array.from(a_1)); // 較容易的陣列拷貝