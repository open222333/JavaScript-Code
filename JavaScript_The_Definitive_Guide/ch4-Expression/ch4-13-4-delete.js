// delete 運算子
let o = {
    x: 1,
    y: 2
};
delete o.x; // 刪除它的特性之一
"x" in o // => false

let a = [1, 2, 3]
delete a[2]
2 in a // => false
a.length // => 3 :變成undefined 長度不變

let o2 = {
    x: 1,
    y: 2
};
delete o.x; // 刪除特性 回傳true
typeof o.x; // 特性不存在 回傳undefined
delete o.x; // 刪除一個不存在的特性 回傳true
delete 1; // 沒有意義 但會回傳ture

// 無法刪除一個變數 回傳false 或在嚴格模式提出 SyntaxError
delete o2;
// 無法刪除的特性 回傳false 或在嚴格模式提出 TypeError
delete Object.prototype;