// in 運算子
let point = { x: 1, y: 1 } // 物件
console.log("x" in point) // 物件是否有x特性
console.log("z" in point)
console.log("toString" in point)

let data = [7, 8, 9]
console.log('0' in data) // 有元素0
console.log(1 in data) // 有元素1
console.log(3 in data) // 沒有元素3