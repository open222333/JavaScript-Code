// 選擇性參數和預設值
function getPropertyNames(o, a) {
  if (a === undefined) a = []; // 若a是undefined 就用新陣列
  for (let property in o) a.push(property);
  return a;
}
// 與上方函式相等
function getPropertyNames_2(o, a = []) {
  for (let property in o) a.push(property);
  return a;
}

// getPropertyNames() 能以一或兩個引數調用
let o = {
    x: 1
  },
  p = {
    y: 2,
    z: 3
  };
let a = getPropertyNames(o);
console.log(a);
let b = getPropertyNames(p, a);
console.log(b);