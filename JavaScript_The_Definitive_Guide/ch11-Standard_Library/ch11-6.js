let o = {s: "", n: 0, a: [true, false, null]};
let s = JSON.stringify(o); // => s == '{"s":"","n":0,"a":[true,false,null]}'
console.log(s);

function deepcopy(o) {
  // 為任何可序列化的物件或陣列製作一個深層拷貝
  return JSON.parse(JSON.stringify(o));
}
