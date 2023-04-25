// 計時器
/**
 * 示範如何使用setTimeout() setInterval() clearInterval() 搭配Console API 顯示簡單的數位時鐘
 */

setTimeout(() => {
  console.log("Ready...");
}, 1000);
setTimeout(() => {
  console.log("set...");
}, 2000);
setTimeout(() => {
  console.log("go!");
}, 3000);

// 一秒一次: 清空主控台，並印出目前時間
let clock = setInterval(() => {
  console.clear();
  console.log(new Date().toLocaleTimeString());
}, 1000);

// 十秒之後，停止上面重複的程式碼
setTimeout(() => {
  clearInterval(clock);
}, 10000);
