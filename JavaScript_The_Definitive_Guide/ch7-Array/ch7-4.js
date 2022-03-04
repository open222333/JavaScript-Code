// 陣列長度
[].length; // 0 沒有元素
["a", "b", "c"].length; // 3

a = [1, 2, 3, 4, 5];
a.length = 3; // a 現在為 [1,2,3]
a.length = 0; // 刪除所有元素
a.length = 5; // 長度為5 但已沒有元素 等於 new Array(5)