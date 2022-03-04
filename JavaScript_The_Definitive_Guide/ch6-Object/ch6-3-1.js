// 查詢和設定特性
let author = book.author; // 取得特性
let name = author.surname;
let title = book["main title"];

book, edition = 7; // 為book建立一個"edition"特性
book["main title"] = "ECMAScript"; // 更改"main title"特性

// 關聯式陣列 以下兩種寫法會有相同的值
object.property
object['property']

let addr = "";
for (let i = 0; i < 4; i++) {
  addr += customer[`address${i}`] + "\n";
}

// 新增股票到投資組合d
function addstock(portfolio, stockname, shares) {
  portfolio[stockname] = shares; // 用[]運算子指名特性
}

// 計算投資組合總價值
function computeValue(portfolio) {
  let total = 0.0;
  for (let stock in portfolio) {
    let shares = portfolio[stock]; // 取的擁有的股份
    let price = getQuote(stock); // 查找每股價格
    total += shares * price;
  }
  return total; // 回傳總價值
}