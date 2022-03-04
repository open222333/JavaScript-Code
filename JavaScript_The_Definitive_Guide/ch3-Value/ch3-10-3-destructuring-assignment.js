// 解構指定
let [x, y] = [1, 2]; // => 等同於x = 1, y = 2
[x, y] = [x + 1, y + 1]; // => 等同於 x = x + 1, y = y + 1
[x, y] = [y, x]; // => 對調兩個變數的值
console.log([x, y])

// 轉換 [x, y] 座標為[r, theta] 極座標 (polar coordinates)
function toPolar(x, y) {
    // Math.sqrt 平方根
    // Math.atan2 
    return [Math.sqrt(x * x + y * y), Math.atan2(y, x)];
}

// 轉換極座標為笛卡兒座標(Cartesian coordinates)
function toCartesian(r, theta) {
    return [r * Math.cos(theta), r * Math.sin(theta)];
}

let [r, theta] = toPolar(1.0, 1.0) // r == Math.sqrt(2); theta == Math.PI / 4
let [x2, y2] = toCartesian(r, theta) // [x, y] == [1.0, 1.0]

let o = { x3: 1, y3: 2 }; // 以迴圈處理物件
for (const [name, value] of Object.entries(o)) {
    console.log(name, value);
}

let [x4, y4] = [1]; // x = 1; y = undefined
[x5, y5] = [1, 2, 3]; // x = 1, y = 2
[, x6, , y6] = [1, 2, 3, 4]; // x = 2, y = 4
let [x7, ...y7] = [1, 2, 3, 4] // x = 1, y = [2,3,4]
let [a, [b, c]] = [1, [2, 2.5], 3] // a = 1, b = 2, c = 2.5
let [first, ...rest] = "Hello" // first = "H", rest = ["e", "l", "l", "o"]

let transparent = { r: 0.0, g: 0.0, b: 0.0, a: 1.0 } // RGBA顏色
let { r1, g1, b1 } = transparent // r = 0.0, g = 0.0, b = 0.0

// 等同於const sin=Math.sin, cos=Math.cos, tan=Math.tan
const { sin, cos, tan } = Math

// 等同於const cosine = Math.cos, tangent = Math.tan
const { cos: cosine, tan: tangent } = Math

// nested objects  arrays of objects
let points = [{ x: 1, y: 2 }, { x: 3, y: 4 }] // 兩個點物件所成的一個陣列
let [{ x: x8, y: y8 }, { x: x9, y: y9 }] = points
r1 = (x8 === 1 && y8 === 2 && x9 === 3 && y9 === 4) // true
console.log(r1)

let points1 = { p1: [1, 2], p2: [3, 4] }
let { p1: [x10, y10], p2: [x11, y11] } = points1
r2 = (x10 === 1 && y10 === 2 && x11 === 3 && y11 === 4) // true
console.log(r2)