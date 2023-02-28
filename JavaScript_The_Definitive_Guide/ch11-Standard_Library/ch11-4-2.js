// 時間算數
// 目前日期加上三個月又兩週的程式碼
let d = new Date();
d.setMonth(d.getMonth() + 3, d.getDate() + 14);
console.log(d.toISOString());