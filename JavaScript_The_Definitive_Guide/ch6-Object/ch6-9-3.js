// valueOf方法
let point = {
  x: 3,
  y: 4,
  valueOf: function() {
    return Math.hypot(this.x, this.y);
  }
};
r1 = Number(point); // valueOf() 進行對數字的轉換
console.log(r1);
console.log(point > 4);
console.log(point > 5);
console.log(point < 6);