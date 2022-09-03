// Function()建構器
const f = new Function("x", "y", "return x * y;");
const f2 = function (x, y) { return x * y; };
console.log(f(1, 2));
console.log(f2(1, 2));

// Function()建構器 語彙範疇(lexical scoping) 最好當成全域範疇
let scope = "global";

function constructFunction() {
  let scope = "local";
  return new Function("return scope;"); // 沒有捕捉區域範疇
}

constructFunction()();