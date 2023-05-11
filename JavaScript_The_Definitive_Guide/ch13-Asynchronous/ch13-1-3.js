// 網路事件
/**
 * 網路請求(network requests)
 *
 * XMLHttpRequest類別 在目前(2023)已大多被fetch() API 取代
 */

function getCurrentVersionNumber(versionCallback) {
  //對後端的版本API發出一個以指令搞控制的HTTP請求
  let request = new XMLHttpRequest();
  request.open("GET", "http://www.example.com/api/version");
  request.send();
     
  // 註冊一個會再回應(response)抵達時被調用的callback
  request.onload = function () {
    if (request.status === 200) {
      // 若HTTP狀態是良好的 取得版本號碼並呼叫callback
      let currentVersion = parseFloat(request.responseText);
      versionCallback(null, currentVersion);
    } else {
      // 否則回報一個錯誤給callback
      versionCallback(response.statusText, null);
    }
  };

  // 註冊另一個callback 在網路發生錯誤時被調用
  request.onerror = request.ontimeout = function (e) {
    versionCallback(e.type, null);
  };
}
