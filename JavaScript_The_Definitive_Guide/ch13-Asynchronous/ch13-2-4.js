// 更多關於承諾和錯誤的資訊
// catch 與 finally 方法
fetch("/api/user/profile")
  .then((response) => {
    // 檢查回應的狀態碼
    if (!response.ok) {
      // 如果狀態碼不是 2xx 範圍內的值，表示請求失敗，返回值設為 `null`
      return null;
    }

    // 獲取回應的內容類型（content-type）
    let type = response.headers.get("content-type");
    if (type !== "application/json") {
      // 如果內容類型不是 "application/json"，則拋出一個 `TypeError` 例外，並提供相應的錯誤訊息
      throw new TypeError(`Expected JSON, got ${type}`);
    }

    // 將回應的 JSON 資料解析為 JavaScript 物件，並返回一個新的 Promise 物件
    return response.json();
  })
  .then((profile) => {
    // 在這裡處理解析後的資料
    if (profile) {
      // 如果資料存在（不為 `null`），則呼叫 `displayUserProfile` 函式並將解析後的資料傳遞給它
      displayUserProfile(profile);
    } else {
      // 如果資料不存在（為 `null`），則呼叫 `displayLoggedOutProfilePage` 函式
      displayLoggedOutProfilePage();
    }
  })
  .catch((e) => {
    // 在這裡捕獲可能的錯誤並進行處理
    if (e instanceof NetworkError) {
      // 如果是 `NetworkError` 類型的錯誤，顯示與網路連接相關的錯誤訊息給使用者
      displayErrorMessage("Check your internet connection.");
    } else if (e instanceof TypeError) {
      // 如果是 `TypeError` 類型的錯誤，顯示與伺服器相關的錯誤訊息給使用者
      displayErrorMessage("Something is wrong with our server!");
    } else {
      // 否則，非預期的錯誤訊息輸出到控制台
      console.error(e);
    }
  });
