let message = 'hello'
let i = 0,
  j = 0,
  k = 0
let x = 2,
  y = x * x

// 宣告常數
const H0 = 74 // 哈伯常數
const C = 299792.458 // 真空中的光速
const AU = 1.496e8 // 天文單位 與太陽的距離

// 常見的let 使用方式
for (let i = 0, len = data.length; i < len; i++) {
  console.log(data[i])
}

for (let datum of data) {
  console.log(datum)
}

for (let property in object) {
  console.log(property)
}

// 只會再一次回圈迭代過程中會是常數 const
for (const datum of data) {
  console.log(datum)
}

for (const property in object) {
  console.log(property)
}
