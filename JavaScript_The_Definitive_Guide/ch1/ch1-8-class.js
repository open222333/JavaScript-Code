class Point {
  constructor (x, y) {
    // 初始化新實體用的建構器
    this.x = x
    this.y = y
  }

  distance () {
    //計算兩點之間的距離
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }
}

// 使用new Point() 建構器函式來創建Point物件
let p = new Point(1, 1)
p.distance()
