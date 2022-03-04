// 新增或刪除陣列元素
let a = [];
a[0] = "zero"; //新增元素
a[1] = "one";

a.push("zero"); //結尾新增
a.push("one", "two"); // 新增兩個值

let a1 = [1, 2, 3];
delete a[2]; // 索引2沒元素
console.log(2 in a);
console.log(a1.length);