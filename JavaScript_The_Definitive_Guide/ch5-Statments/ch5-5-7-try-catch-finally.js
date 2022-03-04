// try-catch-finally 例外處理機制
try {
    // 請求使用者輸入一個數字
    let n = Number(prompt("Please enter a postive integer", ""));
    // 計算該數字的階乘(factorial)，假設輸入是有效的
    let f = factorial(n);
    // 顯示結果
    alert(n + "! = " + f)
} catch (ex) {
    // 如果使用者的輸入無效，就會跑到這裡
    alert(ex) // 告訴使用者錯誤是什麼
}