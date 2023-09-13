// 非同步產生器
// 一個基於 Promise 的包裹器, 包住 setTimeout() 使能把他與 await 並用
// 回傳會在指定的毫秒數經過後旅行的一個 Promise
function elapsedTime(ms) {
  return new Promise((reslove) => setTimeout(reslove, ms));
}

// 一個 async 產生器函式, 它會遞增一個計數器冰尖閣固定時間產出他指定的次數那麼多次(或無限次)
async function* clock(interval, max = Infinity) {
  for (let count = 1; count <= max; count++) {
    await elapsedTime(interval); // 等候時間經過
    yield count; // 產出計數器
  }
}

// 測試函式: 將這個 async 產生器與 for/await 並用
async function test() {
  // async的 如此才能使用 for/await
  for await (let tick of clock(300, 100)) {
    // 每300毫秒迴圈100次
    console.log(tick);
  }
}
