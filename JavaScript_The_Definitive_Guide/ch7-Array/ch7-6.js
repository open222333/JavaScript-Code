// 迭代陣列
// 使用for/of迴圈
let letters = [..."Hello world"];
let string = "";
for (let letter of letters) {
  string += letter;
}
console.log(string);

// 使用for/of迴圈
let everyother = "";
for (let [index, letter] of letters.entries()) {
  if (index % 2 === 0) everyother += letter; // 位於偶數索引的字母
}
console.log(everyother);

// 使用forEach函式
let uppercase = "";
letters.forEach(letter => {
  uppercase += letter.toUpperCase();
})
console.log(uppercase);

// map() filter
let vowels = "";
for (let i = 0; i < letters.length; i++) {
  let letter = letters[i];
  if (/[aeiou]/.test(letter)) { // 正規表達式 塞選母音
    vowels += letter;
  }
}
console.log(vowels);

// 巢狀迴圈(nested loops) 慣用寫法
// 將陣列長度儲存到一個區域變數中
// for (let i = 0, len = letters.length; i < len; i++) {
//   // 迴圈主體不變
// }
// // 從陣列結尾往回跌帶到開頭
// for (let i = letters.length - 1; i >= 0; i--) {
//   // loop body here
// }

// // 跳過不存在或未定義的元素
// for (let i = 0; i < a.length; i++) {
//   if (a[i] === undefined) continue;
//   // loop body here
// }