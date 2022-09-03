// 閉包(Closures)
let scope = "global scope"; // 一個全域變數
function checkscope() {
  let scope = "local scope"; // 一個區域變數
  function f() { return scope; } // 回傳在範疇中的值
  return f();
}
checkscope(); // => "local scope"

function checkscope_1() {
  let scope = "local scope"; // 一個區域變數
  function f() { return scope; } // 回傳在範疇中的值
  return f;
}

let s = checkscope_1()();
console.log(s);

// 修改 8-4-1 uniqueInteger()
// 外層函式回傳後 沒有其他程式碼能看到counter變數
let uniqueInteger = (function () { // 定義並調用
  let counter = 0; // 下面函式的私有狀態
  return function () { return counter++; };
}())

console.log(uniqueInteger());
console.log(uniqueInteger());

// 在同一個外層函式中定義兩個或更多內嵌函式並共用相同的範疇
function counter() {
  let n = 0;
  return {
    count: function () { return n++; },
    reset: function () { n = 0; }
  };
}

let c = counter(),
  d = counter(); // 創建兩個計數器
console.log('--------');
console.log(c.count());
console.log(d.count());
c.reset();
console.log(c.count());
console.log(d.count());

// 結合closure技巧 和 特性取值器(getters)
function counter_getter(n) {
  return {
    // 特性取值器方法回傳並遞增私有計數器變數
    get count() { return n++; },
    // 特性取值器不允許n的值下降
    set count(m) {
      if (m > n) n = m;
      else throw Error("count can only be set to a larger value");
    }
  }
}

let e = counter_getter(1000);
console.log('--------');
console.log(e.count());
console.log(e.count());
e.count = 2000;
console.log(e.count());
e.count = 2000; // 錯誤 只能被設為較大的值