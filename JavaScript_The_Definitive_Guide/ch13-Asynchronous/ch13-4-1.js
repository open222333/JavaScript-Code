// for await ... of
const fs = require("fs");

async function parseFile(filename) {
  let stream = fs.createReadStream(filename, { encoding: "utf-8" });
  for await (let chunk of stream) {
    parseFile(chunk);
  }
}

const urls = [url1, url2, url3];

// 使用 fetch() 取得一個可迭代物件
const promises = urls.map((url) => fetch(url));

// 陣列 promises 陣列為可迭代物件 用 for/of 迴圈處理
for (const promise of promises) {
  response = await promise;
  handle(response);
}

// 下面為簡單版本 for/await, 將 await 內建到迴圈中
for await (const response of promises) {
  handle(response);
}
