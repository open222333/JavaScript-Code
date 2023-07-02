// 循序的承諾
// 定義一個函式，用於依序逐一抓取多個 URL 的內容
function fetchSequentially(urls) {
  const bodies = []; // 儲存抓取到的內容

  // 定義一個函式，用於抓取單個 URL 的內容
  function fetchOne(url) {
    return fetch(url)
      .then((response) => response.text()) // 將回應轉換為文字格式
      .then((body) => {
        bodies.push(body); // 將抓取到的內容儲存到 bodies 陣列中
      });
  }

  let p = Promise.resolve(undefined); // 初始化一個已解析的 Promise

  // 逐一抓取每個 URL 的內容，並依序添加到 Promise 鏈中
  for (const url of urls) {
    p = p.then(() => fetchOne(url));
  }

  // 等待所有抓取完成後，回傳儲存的內容
  return p.then(() => bodies);
}

// fetchSequentially使用範例
fetchSequentially(urls)
  .then((bodies) => {})
  .catch((e) => console.error(e));

function promiseSequence(inputs, promiseMaker) {
  // 將 inputs 複製為一個新陣列以避免修改原始輸入
  inputs = [...inputs];

  // 定義處理下一個輸入的函式
  function handleNextInput(outputs) {
    // 如果已處理完所有輸入，則回傳輸出結果
    if (inputs.length === 0) {
      return outputs;
    } else {
      // 取出下一個輸入並從 inputs 陣列中移除
      let nextInput = inputs.shift();

      // 使用 promiseMaker 函式處理下一個輸入
      return promiseMaker(nextInput)
        .then((output) => outputs.concat(output)) // 將輸出結果合併到 outputs 陣列中
        .then(handleNextInput); // 遞迴呼叫處理下一個輸入
    }
  }

  // 使用空陣列作為初始輸出，並呼叫 handleNextInput 函式開始處理輸入
  return Promise.resolve([]).then(handleNextInput);
}

function fetchBody(url) {
  // 使用 fetch 函式抓取指定 URL 的內容並回傳 Promise
  return fetch(url).then((r) => r.text());
}

// 呼叫 promiseSequence 函式並傳入輸入陣列 urls 和 promiseMaker 函式 fetchBody
promiseSequence(urls, fetchBody)
  .then((bodies) => {
    // 在所有輸入處理完成後，執行後續操作
    // 輸出結果傳入 bodies 參數
    // 此處應填入具體的後續操作程式碼
  })
  .catch(console.error); // 如果發生錯誤，捕獲並顯示錯誤訊息
