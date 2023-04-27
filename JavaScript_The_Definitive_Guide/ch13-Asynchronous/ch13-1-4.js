// Node 中的 Callbacks 和事件
/**
 * 範例
 * 讀取一個檔案之內容的預設API
 * 並會在檔案的內容讀取玩時調用一個callback函式
 */

// fs模組具有檔案系統相關的API
const fs = require("fs");
let options = {
  // 存放程式選項的一個物件
};

function startProgram(option) {
  // 模擬執行程式
  console.log(option);
}

// 讀取組態檔(configuration file)後 呼叫callback程式
/**
 * fs.readFile()函式最後的引數為 有兩個參數的callback
 * 若成功會使用callback第二個引數
 * 若有錯誤則傳入callback第一個引數
 * 以下以 => 箭號函式 表達 callback
 */
fs.readFile("config.json", "utf-8", (err, text) => {
  if (err) {
    // 若有錯誤，顯示警告訊息，但繼續執行
    console.warn("Could not read config file:", err);
  } else {
    // 否則，剖析檔案內容，並指定給選項物件
    Object.assign(options, JSON.parse(text));
  }

  // 不管什麼情形都開始執行程式
  startProgram(options);
});

/**
 * 範例
 * 對一個URL的內容發出一個HTTP請求
 * 有兩層非同步程式碼，並以事件收聽器來進行處理
 */
const https = require("https");

// 讀取指定URL的文字內容，並且非同步的傳給callback
function getText(url, callback) {
  // 發出 HTTP GET 請求
  request = https.get(url);

  // 註冊一個函式來處理"response"事件
  request.on("response", (response) => {
    // 這個response事件代表已經接收到回應標頭(response headers)
    let httpStatus = response.statusCode;

    // 尚未接收到HTTP回應的主體(body)
    // 註冊更多處理器在抵達時呼叫，預期為Unicode文字
    response.setEncoding("utf-8");
    let body = "";

    // 此事件處理器會在主體有一部分(chunk)已經就緒時被呼叫
    response.on("data", (chunk) => {
      body += chunk;
    });

    // 此事件處理器會在回應完成時呼叫
    response.on("end", () => {
      // 根據http status傳入callback
      if (httpStatus === 200) {
        callback(null, body);
      } else {
        callback(httpStatus, null);
      }
    });
  });

  // 註冊一個事件處理器應付低階的網路錯誤
  request.on("error", (err) => {
    callback(err, null);
  });
}
