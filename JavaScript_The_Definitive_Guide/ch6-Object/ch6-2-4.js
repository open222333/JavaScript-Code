// Object.create()

let o1 = Object.create({
  x: 1,
  y: 2
}); // o1繼承了特性x和y

o1.x + o1.y // => 3

let o2 = Object.create(null); // o2 沒有繼承特性或方法


// 創建普通的空物件
let o3 = Object.create(Object.prototype); // o3 就像{} 或 new Object()


// 使用時機之一：當想設下防護 避免無法控制的程式庫函式修改到物件
let o = {
  x: "don't change this value"
};
library.function(Object.create(o)); // 防止意外的修改