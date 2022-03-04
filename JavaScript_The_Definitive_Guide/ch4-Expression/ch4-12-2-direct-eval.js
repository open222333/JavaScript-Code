// 全域的eval 
const geval = eval; // 使用另一個名稱會進行全域的eval
let x = 'global';
let y = 'global'; // 兩個全域變數

function f() { // 這個函式進行一次區域的eval
    let x = "local"; // 定義一個區域變數
    eval("x += 'changed';") // 直接的eval 設定區域變數
    return x; // 回傳變更過的區域變數
}

function g() { // 這個函式進行一次全域的eval
    let y = "local";
    geval("y += 'changed';") // 間接的eval設定全域變數
    return y;
}

console.log(f(), x)
console.log(g(), y)