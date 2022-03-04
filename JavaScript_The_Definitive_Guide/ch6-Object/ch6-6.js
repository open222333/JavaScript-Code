// 列舉特性
let o = {
  x: 1,
  y: 2,
  z: 3
};
o.propertyIsEnumerable("toString")
for (let p in o) {
  console.log(p)
}

// 跳過繼承的特性
for (let p in o) {
  if (!o.hasOwnProperty(p)) continue;
}

// 跳過所有的方法
for (let p in o) {
  if (typeof o[p] === "function") continue;
}