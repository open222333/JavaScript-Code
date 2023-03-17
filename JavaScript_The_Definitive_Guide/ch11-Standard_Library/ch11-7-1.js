// Intl.NumberFormat (格式化數字)
/**
 * stytle: 數字格式類型，預設 "decimal"，百分比 "percent"，金額 "currency"
 * currency: 如果 stytle 是 "currency"，則此特性為必要。ISO貨幣碼 USD(美元),GBP(英鎊)
 * currencyDisplay: 如果 stytle 是 "currency"，貨幣如何顯示，預設值: 貨幣符號 "symbol"。使用ISO碼 "code", 貨幣名稱 "name"
 * useGrouping: 是否使用千分隔號。 false 則為不使用。
 * minimumIntegerDigits: 格式化整數最小位數，若未數較少則往左補零。預設值 1。可用範圍 0 - 20。
 * minimumFractionDigits: 格式化小數部分，小於最小值則往右補零。預設為 0。
 * maximumFractionDigits: 格式化小數部分，大於最大值則被捨入(rounded)。預設為 3。可用範圍 0 - 20。
 * minimumSignificantDigits: 格式化有效數字，小於最小值則往右補零。若有指定則覆寫小數、整數特性。可用範圍 1 - 21。
 * maximumSignificantDigits: 格式化有效數字，小於最小值則往右補零。若有指定則覆寫小數、整數特性。可用範圍 1 - 21。
 */
let euros = Intl.NumberFormat("es", {style: "currency", currency: "EUR"});
euros.format(10); // => '10,00 €' 10歐元 西班牙格式
console.log(euros.format(10));

let pounds = Intl.NumberFormat("en", {style: "currency", currency: "GBP"});
pounds.format(1000); // => '£1,000.00' 1000英鎊 英國格式
console.log(pounds.format(1000));

// 將format當成獨立函式使用
let data = [0.05, 0.75, 1];
let formatData = Intl.NumberFormat(undefined, {
  style: "percent",
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
}).format;
data.map(formatData); // => [ '5.0%', '75.0%', '100.0%' ]
console.log(data.map(formatData));

// 阿拉伯語用他們數字表達十進位數字
let arabic = Intl.NumberFormat("ar", {useGrouping: false}).format;
arabic(1234567890); // => ١٢٣٤٥٦٧٨٩٠
console.log(arabic(1234567890));

/**
 * 印地語(Hindi)是使用預設的ASCII 0-9數字
 * 修改地區設定，使用印度樣式的分組(Indian-style grouping)和天城文數字進行格式化
 * -u- 進行Unicode延伸。
 * nu為數字系統延伸。
 * deva為天城文(Devanagari)簡稱。
 */
let hindi = Intl.NumberFormat("hi-IN-u-nu-deva").format;
hindi(1234567890); // => १,२३,४५,६७,८९०
console.log(hindi(1234567890));
