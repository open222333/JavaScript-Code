// 假設使用 async 寫 getJSON函式
async function getJSON(url) {
  let response = await fetch(url);
  let body = await response.json();
  return body;
}

// 假設 以這個函式擷取兩個JSON值 等 value1 完成 再取 value2
let value1 = getJSON(url1);
let value2 = getJSON(url2);
// 以下同時取 value1, value2
// let [value1, value2] = await Promise.all([getJSON(url1), getJSON(url2)]);
