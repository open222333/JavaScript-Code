// 物件使用函式為方法
let a = []
a.push(1, 2, 3) //新增元素到陣列
a.reverse() //反轉

//定義自己的方法 this
points.dist = function() {
    // 定義一個方法來計算點之間的距離
    let p1 = this[0] // 被調用的陣列第一個元素
    let p2 = this[1] // this 物件的第二個元素
    let a = p2.x - p1.x //x座標的差
    let b = p2.y - p1.y //y座標的差
    return Math.sqrt(a * a + b * b) // 畢氏定理
    // Math.sqrt 計算平方根
}

points.dist()
