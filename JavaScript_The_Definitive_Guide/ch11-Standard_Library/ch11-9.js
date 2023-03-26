let url = new URL("http://example.com:8000/path/name?q=term#fragment");
url.href; // => http://example.com:8000/path/name?q=term#fragment
console.log(url.href);
url.origin; // => http://example.com:8000
console.log(url.origin);
url.protocol; // => http:
console.log(url.protocol);
url.host; // => example.com:8000
console.log(url.host);
url.hostname; // => example.com
console.log(url.hostname);
url.port; // => 8000
console.log(url.port);
url.pathname; // => /path/name
console.log(url.pathname);
url.search; // => ?q=term
console.log(url.search);
url.hash; // => #fragment
console.log(url.hash);

let ftpurl = new URL("ftp://admin:13337!@ftp.example.com/");
ftpurl.href; // => ftp://admin:13337!@ftp.example.com/
console.log(ftpurl.href);
ftpurl.origin; // => ftp://ftp.example.com
console.log(ftpurl.origin);
ftpurl.username; // => admin
console.log(ftpurl.username);
ftpurl.password; // => 13337!
console.log(ftpurl.password);

// 特性 protocol,host 是唯讀的，其餘特性可讀可寫新增特性
let newurl = new URL("http://example.com");
newurl.pathname = "api/search"; // 新增api端點路徑
newurl.search = "q=test"; // 新增查詢參數
newurl.toString(); // => http://example.com/api/search?q=test
console.log(newurl.toString());

// 加上標點符號並轉譯成url的特殊字元
let escapesurl = new URL("http://example.com");
escapesurl.pathname = "paht with spaces"; // 有空白字元
escapesurl.search = "q=foo#bar";
escapesurl.pathname; // => /paht%20with%20spaces
console.log(escapesurl.pathname);
escapesurl.search; // => ?q=foo%23bar
console.log(escapesurl.search);
escapesurl.href; // => http://example.com/paht%20with%20spaces?q=foo%23bar
console.log(escapesurl.href);

// 使用 searchParams 新增參數
let paramsurl = new URL("http://example.com");
paramsurl.search; // => "" 還沒有
console.log(paramsurl.search);
paramsurl.searchParams.append("q", "term"); // 新增一個搜尋參數
paramsurl.search; // => ?q=term
console.log(paramsurl.search);
paramsurl.searchParams.set("q", "x"); // 設置搜尋參數的值
paramsurl.search; // => ?q=x
console.log(paramsurl.search);
paramsurl.searchParams.get("q", "x"); // 取得搜尋參數的值
paramsurl.searchParams.has("q"); // true: 存在q參數
console.log(paramsurl.searchParams.has("q"));
paramsurl.searchParams.has("p"); // false: 沒有p參數
console.log(paramsurl.searchParams.has("p"));
paramsurl.searchParams.append("opts", "1"); // 新增一個搜尋參數
paramsurl.search; // => ?q=x&opts=1
console.log(paramsurl.search);
paramsurl.searchParams.append("opts", "&"); // 新增相同參數名稱 不同值
paramsurl.search; // => ?q=x&opts=1&opts=%26 有轉譯
console.log(paramsurl.search);
paramsurl.searchParams.get("opts"); // "1": 第一個值
console.log(paramsurl.searchParams.get("opts"));
paramsurl.searchParams.getAll("opts"); // [ '1', '&' ] 所有值
console.log(paramsurl.searchParams.getAll("opts"));
paramsurl.searchParams.sort(); // 依照字母排列
paramsurl.search; // => ?opts=1&opts=%26&q=x
console.log(paramsurl.search);
paramsurl.searchParams.set("opts", "y");
paramsurl.search; // => ?opts=y&q=x
console.log(paramsurl.search);
// 可迭代
[...paramsurl.searchParams];
paramsurl.searchParams.delete("opts"); // 刪除opts參數
paramsurl.search; // => ?q=x
console.log(paramsurl.search);
paramsurl.href; // => http://example.com/?q=x
console.log(paramsurl.href);

// searchParams特性是一個URKSearchParams物件
let params2url = new URL("http://example.com");
let params = new URLSearchParams();
params.append("q", "term");
params.append("opts", "exact");
params.toString(); // => q=term&opts=exact
console.log(params.toString());
params2url.search = params;ㄎ
params2url.href; // => http://example.com/?q=term&opts=exact
console.log(params2url.href);
