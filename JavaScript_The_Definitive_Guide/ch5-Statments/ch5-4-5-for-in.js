// for/in
/* 
for (variable in object)
    statement
*/
let o = {
    x: 1,
    y: 2,
    z: 3
};
for (let p in o) { // 把o的特性名稱指定給變數p
    console.log(o[p]) // 印出每個特性的值
}

// 將所有物件特性拷貝到陣列
let a = [],
    i = 0;
for (a[i++] in o) /* 的 */;

for (let i in a) console.log(i);