// 條件式存取運算式
// 語法
// expression ?.identifter
// expression ?[expression]
let a = { b: null }
console.log(a.b?.c.d) // => undefined

let a2 = { b2: {} }
console.log(a.b?.c?.d) // => undefined

// ?.[] 語法
let a3 // 未初始化a3
let index = 0
try {
    a3[index++] // 拋出TypeError
} catch(e) {
    index
}

a3?.[index++] // => undefined 因為a3未定義
index // => 1 沒有遞增 因為?.[]短路
a3[index++] // => TypeError 無法索引undefined