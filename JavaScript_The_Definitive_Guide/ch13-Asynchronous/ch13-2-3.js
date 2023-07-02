// 解析承諾
/**
 *
 * 首先，透過 fetch("/api/user/profile") 發起一個網路請求，並返回一個 Promise 物件 p1。
 * 接著，使用 .then() 方法對 Promise 物件進行串連操作，將一個回調函式 c1 加入到 p1 的完成處理程序中。
 * 在回調函式 c1 中，使用 response.json() 方法將回應資料解析為 JSON，並返回一個新的 Promise 物件 p4。
 * 接著，透過 p2 = p1.then(c1) 將 p2 設定為 p1 的完成處理程序返回的 Promise 物件。
 * 然後，透過 p3 = p2.then(c2) 將 p3 設定為 p2 的完成處理程序返回的 Promise 物件，並將回調函式 c2 加入到 p2 的完成處理程序中。
 * 最終，當 p2 完成時，將呼叫回調函式 c2，並將 p4 中解析的 JSON 資料作為參數傳遞給回調函式 c2。
 */
function c1(response) {
  let p4 = response.json();
}

function c2(profile) {
  displayUserProfile(profile);
}

let p1 = fetch("/api/user/profile");
let p2 = p1.then(c1);
let p3 = p2.then(c2);
