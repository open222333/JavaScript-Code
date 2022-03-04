// 物件對原始值的轉換
// prefer-string(字串偏好) 優先 toString() -> valueOf() -> TypeError錯誤
// prefer-number(數字偏好) 優先 valueOf() -> toString() -> TypeError錯誤
// no-preference(無偏好) 取決於 物件類別(class)

//許多類別都有定義特定版本的toString
r1 = { x: 1, y: 2 }.toString() // => [object Object]
r2 = [1, 2, 3].toString() // => "1,2,3"
;(function (x) {
  f(x)
}.toString()) // => "function(x) {f(x);}"
;/\d+/g.toString() // => "/\\d+/g"
let d = new Data(2020, 0, 1)
d.toString() // => "Web Jan 01 2020 00:00:00 GMT-0800 (Pacific Standard Time)"

let d1 = new Data(2010, 0, 1) // 2010年 1月 1日
r3 = d.valueOf() // => 1262332800000

Number([]) // => 0
Number([99]) // => 99
