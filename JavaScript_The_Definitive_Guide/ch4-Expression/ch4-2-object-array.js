[] // 一個空陣列
[1 + 2, 3 + 4] // 雙元素陣列 3, 7
let matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ] // 巢狀陣列
let sparseArray = [1, , , , 5] // 五個元素 三個undefined

let p = { x: 2.3, y: -1.2 } // 有兩個特性的一個物件
let q = {} // 沒有特性的空物件
q.x = 2.3;
q.y = -1.2

// ES6 物件字面值可內嵌(nested)
let rectangle = {
    upperLeft = { x: 2, y: 2 },
    lowerRight = { x: 4, y: 5 }
}