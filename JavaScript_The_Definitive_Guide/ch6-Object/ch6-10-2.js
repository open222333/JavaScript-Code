// 計算出來的特性名稱
const PROPERTY_NAME = "p1";

function computePropertyName() {
  return "p" + 2;
}

// let o = {};
// o[PROPERTY_NAME] = 1;
// o[computePropertyName()] = 2;

let p = {
  [PROPERTY_NAME]: 1,
  [computePropertyName()]: 2
}

console.log(p.p1 + p.p2)