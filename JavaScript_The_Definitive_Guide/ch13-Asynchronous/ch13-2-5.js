// 平行(in parallel)的承諾
// 同時執行數個非同步運算 Promise.all()
const urls = []; // 儲存多個 URL 的陣列
promises = urls.map((url) => fetch(url).then((r) => r.text()));
// 使用 `map` 方法對每個 URL 進行處理，將每個 fetch 請求轉換為回傳回應內容的 Promise
Promise.all(promises)
  .then((bodies) => {
    // 使用 `Promise.all` 等待所有 Promise 完成並返回結果
    // 當所有 Promise 都完成後，會執行這個 `.then` 方法
    // 在這裡處理回傳的內容
  })
  // 使用 `.catch` 捕獲可能的錯誤，並將錯誤訊息輸出到控制台
  .catch((e) => console.error(e));

Promise.allSettled([Promise.resolve(1), Promise.reject(2), 3]).then(
  (results) => {
    results[0]; // => {status: "fulfilled", value: 1}
  }
);
