// toJSON()
// Object.prototype實際上沒有toJSON()方法
let point = {
  x: 1,
  y: 2,
  toString: function() {
    return `(${this.x}, ${this.y})`;
  },
  toJSON: function() {
    return this.toString();
  }
};
r = JSON.stringify([point]);
console.log(r);