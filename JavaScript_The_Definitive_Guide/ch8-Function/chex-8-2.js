// 範例 8-2 使用closures的私有特性存取器方法
// 此函式為具有指定名稱的特性新增，特性存取器方法到物件o
// 方法被命名為get<name> set<name>，若有提供一個判斷函式(predicate function)
// 判斷函式回傳false，就拋出錯誤
function addPrivateproperty(o, name, predicate) {
  let value;

  // 取值器方法單純回傳那值
  o[`get${name}`] = function () { return value; };

  // 設值器方法儲存該值，或在判定函式駁回那個值時拋出例外
  o[`set${name}`] = function (v) {
    if (predicate && !predicate(v)) {
      throw new TypeError(`set${name}: invalid value ${v}`);
    } else {
      value = v;
    }
  };
}

// 示範使用addPrivateproperty()方法
let o = {};
// 新增特性存取器getName setName 確保允許的只有字串值
addPrivateproperty(o, "Name", x => typeof x === "string");
o.setName("Frank");
o.getName();
// o.setName(0); // 與設定型別不同

// 此函式回傳永遠都會回傳v的一個函式
function constfunc(v) { return () => v; }

// 建立一個陣列的常數函式
let funcs = [];
for (var i = 0; i < 10; i++) funcs[i] = constfunc(i);

// 位於陣列元素5的函式會回傳5這個值
funcs[5]() // => 5

// 回傳一個函式陣列，其中的函式會回傳值0-9
function constfuncs() {
  let funcs = [];
  for (var i = 0; i < 10; i++) {
    funcs[i] = () => i;
  }
  return funcs;
}

let funcs_2 = constfuncs();
funcs_2[5]() // => 10