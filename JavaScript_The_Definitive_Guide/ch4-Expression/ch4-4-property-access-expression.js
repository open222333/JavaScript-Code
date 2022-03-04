// 特性存取運算式
// 語法
// expression.identifter
// expression[expression]
let o = { x: 1, y: { z: 3 } } // 物件
let a = [o, 4, [5, 6]]
console.log("o.x", o.x)
console.log('o.y.x', o.y.z)
console.log('o["x"]', o['x'])
console.log('a[1]', a[1])
console.log('a[2]["1"]', a[2]["1"])
console.log('a[0].x', a[0].x)