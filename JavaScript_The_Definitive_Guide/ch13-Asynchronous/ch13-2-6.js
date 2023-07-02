// 做出承諾
// 定義一個函式，用於從指定的 URL 取得 JSON 資料
function getJSON(url) {
  return fetch(url).then((response) => response.json());
}

// 定義一個函式，用於獲取使用者的最高分數
function getHighScore() {
  return getJSON("/api/user/profile").then((profile) => profile.highScore);
}

// 定義一個函式，用於等待指定的時間
function wait(duration) {
  return new Promise((resolve, reject) => {
    if (duration < 0) {
      // 如果傳入的時間小於 0，則拒絕 Promise 並拋出一個錯誤
      reject(new Error("Time travel not yet implemented"));
    }
    // 延遲指定的時間後，解析 Promise
    setTimeout(resolve, duration);
  });
}
