// 擴充物件
// 比一個物件的特性拷貝到另一個
let target = {
    x: 1
  },
  source = {
    y: 2,
    z: 3
  };
for (let key of Object.keys(source)) {
  target[key] = source[key];
}
console.log(target)

// Object.assign(o, defaults) 以defaults覆寫o中的所有特性
function merge(target, ...sources) {
  // 自定義一個不同於Object.assign()的
  for (let source of sources) {
    for (let key of Object.keys(source)) {
      if (!(key in target)) {
        // 不同於Object.assign()
        target[key] = source[key];
      }
    }
  }
  return target;
}

r1 = Object.assign({
  x: 1
}, {
  x: 2,
  y: 2
}, {
  y: 3,
  z: 4
})
r2 = merge({
  x: 1
}, {
  x: 2,
  y: 2
}, {
  x: 3,
  z: 4
})
console.log(r1);
console.log(r2);