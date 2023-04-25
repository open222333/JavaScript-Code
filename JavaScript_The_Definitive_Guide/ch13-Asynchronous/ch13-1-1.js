// 計時器(Timers)

/**
 * setTimeout() 函式
 * https://developer.mozilla.org/zh-CN/docs/Web/API/setTimeout
 */

/**
 * setInterval() 函式
 * https://developer.mozilla.org/zh-CN/docs/Web/API/setInterval
 */
function checkForUpdates() {
  // 虛構的檢查更新函式
  console.log("test");
}

// setTimeout() 會呼叫指定的callback函式部傳入任何引數
// let updateIntervalId = setTimeout(checkForUpdates(), 60000);

// 若是要檢查更新 會希望重複執行 使用setInterval
// 一秒後呼叫checkForUpdates 在那之後每6秒重複呼叫一次
let updateIntervalId = setInterval(checkForUpdates, 1000);

// setInterval()所回傳的值(updateIntervalId)可用來停止重複調用
function stopCheckingForUpdates() {
  clearInterval(updateIntervalId);
}

setTimeout(stopCheckingForUpdates, 5000);
