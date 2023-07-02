// await 運算式


async function fetchData() {
  try {
    // 發送請求並等待 Promise 解析為 response
    let response = await fetch("/api/user/profile");

    // 等待 Promise 解析為 JSON 格式的內容
    let profile = await response.json();

    // 在這裡可以使用獲取到的 profile 物件進行後續處理
    console.log(profile);
  } catch (error) {
    // 在錯誤發生時進行處理
    console.error(error);
  }
}

// 執行 fetchData 函式
fetchData();
