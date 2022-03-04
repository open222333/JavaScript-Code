// toLocaleString()
let point = {
  x: 1000,
  y: 2000,
  toString: function() {
    return `${this.x}, ${this.y}`;
  }
};
r1 = point.toString();
r2 = point.toLocaleString(); // 有千分隔號
console.log(r1);
console.log(r2);