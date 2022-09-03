// 引數型別
// 執行型別檢查的範例
function sum(a) {
  // 回傳可迭代物件a的元素總和
  // a的元素必須全都是數字
  let total = 0;
  for (let element of a) {
    // 如果a不是可迭代的，拋出TypeError
    if (typeof element !== "number") {
      throw new TypeError("sum(): element must be numbers");
    }
    total += element;
  }
  return total;
}

sum([1, 2, 3]); // => 6
sum(1, 2, 3);
sum([1, 2, "3"]);

// console.log(sum([1, 2, 3]));
// console.log(sum(1, 2, 3));
// console.log(sum([1, 2, "3"]));