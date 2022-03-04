// 刪除特性
let o = {
  x: 1
}; // o具有自有特性x並繼承了特性toString
delete o.x // 刪除特性x
delete o.x // 雖然沒東西但還是true
delete o.toString // 不是自有特性 什麼都沒做 但回傳true
delete 1 // 無意義 但回傳true

// 嚴格模式下 以下都會擲出 TypeError
delete Object.prototype // false 特性不可配置
var x = 1;
delete globalThis.x // => false 無法刪除這個特性
function f() {}
delete globalThis.f // => false 無法刪除這個特性

globalThis.x = 1; // 可配置的全域特性
delete x // => true 可被刪除