// 繼承
let o = {};
o.x = 1;
let p = Object.create(o);
p.y = 2;
let q = Object.create(p);
q.z = 3;
let f = q.toString();
r = q.x + q.y
console.log(r)

// 若繼承的特性已有值 則覆寫
let unitcircle = {
  r: 1
};
let c = Object.create(unitcircle);
c.x = 1;
c.y = 1;
c.r = 2; // 覆寫自己繼承來的特性
console.log(unitcircle.r) // 特性不受影響