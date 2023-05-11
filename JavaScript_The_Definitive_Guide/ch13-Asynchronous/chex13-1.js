// 實作 getJSON()
/**
 * 將HTTP回應的主體剖析成JSON 並回傳一個Promise而非接受一個callback引數
 */
const {rejects} = require("assert");
const http = require("http");

function getJSON(url) {
  // 創建並回傳一個新的Promise
  return new Promise((resolve, reject) => {
    // 為指定的URL發動一個HTTP GET請求
    request = http.get(url, (response) => {
      if (response.statusCode !== 200) {
        // 若狀態是錯的就拒絕Promise
        reject(new Error(`HTTP status ${response.statusCode}`));
        // 避免洩漏記憶體
        response.resume();
      } else if (response.headers["content-type"] !== "application/json") {
        // 若標頭是錯誤的就拒絕Promise
        reject(new Error("Invalid content-type"));
        response.resume();
      } else {
        // 註冊事件讀取回應的主體
        let body = "";
        response.setEncoding("utf-8");
        response.on("data", (chunk) => {
          body += chunk;
        });
        response.on("end", () => {
          // 當回應主體完成，試著剖析
          try {
            // 剖析成功 履行Promise
            let parsed = JSON.parse(body);
            resolve(parsed);
          } catch (e) {
            // 剖析失敗 拒絕Promise
            rejects(e);
          }
        });
      }
      // 若請求在取得一個回應之前就失敗 (網路中斷) 拒絕Promise
      request.on("error", (error) => {
        reject(error);
      });
    });
  });
}
