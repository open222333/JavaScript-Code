// x === 0 && y === 0 // 只有x, y都是0才是true
// AND && 邏輯運算子
let o = { x: 1 };
let p = null;
r1 = o && o.x // => 1
r2 = p && p.x // => null
console.log(r2)