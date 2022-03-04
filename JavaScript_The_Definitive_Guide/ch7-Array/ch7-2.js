// 讀取與寫入陣列元素
let a = ['world'];
let value = a[0];
a[1] = 3.14;
let i = 2;
a[i] = 3;
a[i + 1] = "hello";
a[a[i]] = a[0];
console.log(a);
console.log(a.length);

let o = {};
o[1] = "one";
o['1']
a[-1.23] = true; // 會建立名為"-1.23"的特性名稱
a["1000"] = 0; // 陣列的第1001個元素
a[1.000] = 1; // 陣列索引1 等同於a[1] = 1;