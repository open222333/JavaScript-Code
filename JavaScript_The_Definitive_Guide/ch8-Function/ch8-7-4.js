// call()和apply()方法
// 把物件o名為m的方法取代成另一個版本
function trace(o, m) {
  let original = o[m]; // 將原方法記錄在closure中
  o[m] = function (...args) {
    // 定義新的方法
    console.log(new Date(), "Entering:", m); // 記錄訊息
    let result = original.apply(this, args); // 調用原本的
    console.log(new Date(), "exiting:", m); // 記錄訊息
    return result;
  };
}