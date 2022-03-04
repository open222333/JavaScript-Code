// 不可變的原始值與可變的物件參考
let s = 'hello'
r1 = s.toUpperCase()
console.log(r1)
console.log('s:' + s) // 不變

// 物件 可變的
let o = { x: 1 }
o.x = 2
o.y = 3
console.log(o)

let a = [1, 2, 3]
a[0] = 0
a[3] = 4
console.log(a)

// 分別的物件不會相等
let o2 = { x: 1 },
  p2 = { x: 1 }
r2 = o2 === p2
let a2 = [],
  b2 = []
r3 = a2 === b2
console.log(r2)
console.log(r3)

// 參考型別
let a3 = []
let b3 = a3
b3[0] = 1
console.log(a3[0])
console.log(a3 === b3)

// 複製
let a4 = ['a', 'b', 'c']
let b4 = []
for (let i = 0; i < a4.length; i++) {
  b[i] = a[i]
}
let c4 = Array.from(b4) //ES6 使用Arrary.from() 拷貝陣列

// 定義一個韓式比較兩個陣列
function equalArrays (a, b) {
  if (a === b) {
    return true
  } // 同一個陣列是相等的
  if (a.length !== b.length) {
    return false
  } // 大小不同的陣列不相等
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false
  } // 迴圈處理元素 若有差異則不相等
  return true // 否則就是相等的
}
