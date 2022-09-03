// 方法調用
// 物件會成為調用情境(this)
let calculator = {
  // 一個物件字面值
  operand1: 1,
  operand2: 1,
  add() {
    // 使用this關鍵字來參考包含他的物件
    this.result = this.operand1 + this.operand2;
  }
};

calculator.add(); // 計算 1 + 1 的一個方法調用
console.log(calculator.result);

let o = {
  // 物件o
  m: function() {
    // 方法m
    let self = this; // 將this儲存在一個變數中
    this === o; // true: this是物件o
    f(); // 呼叫輔助函式f()

    function f() {
      // 內嵌函式f
      this === o // false: this是全域物件或undefined
      self === o // true: self是外層的this值
    }
  }
};

// 在物件o上調用方法m
o.m();