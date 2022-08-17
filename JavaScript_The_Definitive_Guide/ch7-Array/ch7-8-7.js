// 陣列對字串的轉換
// join()
// 將陣列內所有元素轉成字串,沒有指定則使用逗號
let a = [1, 2, 3];
console.log('a => ' + a);
console.log('a.join() 轉成字串 沒有指定引數 => ' + a.join());;
console.log('a.join(\" \") 轉成字串 => ' + a.join(" "));
console.log('a.join(\"\") 轉成字串 => ' + a.join(""));
let b = new Array(10); // 長度10沒有元素的陣列
console.log('b.join(\"-\") => ' + b.join("-"));

// toString() 類似不帶引數的join()
let c = [1,2,3].toString();
console.log('[1,2,3].toString() => ' + c);
let d = ['a', 'b', 'c'].toString();
console.log("['a', 'b', 'c'].toString() => " + d);
let e = [1, [2, 'c']].toString();
console.log("[1, [2, 'c']].toString() => " + e);
