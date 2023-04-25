// 事件 (Events)
/**
 * 客戶端的JavaScript 程式幾乎都是 事件驅動
 * 以addEventListener()來註冊的callback函式
 * 這些callback函式被稱為 事件處理器(event handlers) 或 事件收聽器(event listeners)
 */

// 請求Web瀏覽器回傳一個物件來表示
// 匹配這個CSS選擇器(selector)的HTML <button> 元素
let okay = document.querySelector("#confirmUpdateDialog button.okay");

function applyUpdate() {
  // 虛構的callback函式
  console.log("test");
}

// 註冊一個callback函式 使用者點擊按鈕時調用
okay.addEventListener("click", applyUpdate);
