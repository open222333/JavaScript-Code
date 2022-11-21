/**
 * 大略描述Web瀏覽器的程式碼捆裝工具 如 webpack 和 Parcel
 */

const modules = {};
function require(monuleName) {
  return modules[monuleName];
}

modules["sets.js"] = (function () {
  const exports = {};

  // sets.js 檔案內的內容放到這裡
  exports.BitSet = class BitSet {
    // ...
    insert() {};
  };
  return exports;
})();

modules["stats.js"] = (function () {
  const exports = {};

  // stats.js檔案的內容放在這裡
  const sum = (x, y) => x + y;
  const square = (x) => x * x;
  exports.mean = function (data) {};
  exports.stddev = function (data) {};
})();

// 取的需要的模組
const stats = require("stats.js");
const BitSet = require("sets.js").BitSet;

let s = new BitSet(100);
s.insert()
