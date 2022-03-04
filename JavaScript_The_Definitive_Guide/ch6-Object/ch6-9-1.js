// 物件方法 toString()
// 把物件轉成字串
let s = {
  x: 1,
  y: 1
}.toString();
let point = {
  x: 1,
  y: 2,
  toString: function() {
    return `(${this.x}, ${this.y})`;
  } // toString()被用來進行字串轉換
};
r = String(point)
console.log(r)