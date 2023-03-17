/**
 * year: 四位數年 "numeric"，二位數縮寫 "2-digit"
 * month: 數字 "numeric"，呈現二位數 "2-digit"，完整名稱 "long"，縮寫名稱 "short"，不保證唯一的高度縮寫 "narrow"
 * day: 數字 "numeric"，呈現二位數 "2-digit"
 * weekday: 完整名稱 "long"，縮寫名稱 "short"，不保證唯一的高度縮寫 "narrow"
 * era: 日期是否以一個年代(era)格式化，例如 CE BCE。完整名稱 "long"，縮寫名稱 "short"，不保證唯一的高度縮寫 "narrow"
 * hour, minute, second: 顯示時間，數字 "numeric"，呈現二位數 "2-digit"
 * timeZone: 日期的時區，使用UTC IANA(可能認得)，省略則使用當地時間。
 * timeZoneName: 格式化後的日期或時間中，時區該如何顯示。完整名稱 "long"，縮寫或數值的名稱 "short"
 * hour12: 是否使用12小時制。預設值為地區設定。
 * hourCycle: 指定子夜(midnight)。預設值為地區設定。hour12優先序高於此特性。指定為12 "h12", 指定為24 "h24", 指定為0 子夜前的小時為11pm "h11", 指定為0 子夜前的小時為23 "h23"
 */

// 基本日期格式
let d = new Date("2020-01-02T13:14:15Z");
Intl.DateTimeFormat("en-US").format(d); // => 1/2/2020
console.log(Intl.DateTimeFormat("en-US").format(d));
Intl.DateTimeFormat("fr-FR").format(d); // => 02/01/2020
console.log(Intl.DateTimeFormat("fr-FR").format(d));

// 顯示日期與月份
let opts = {weekday: "long", month: "long", year: "numeric", day: "numeric"};
Intl.DateTimeFormat("en-US", opts).format(d); // => Thursday, January 2, 2020
console.log(Intl.DateTimeFormat("en-US", opts).format(d));
Intl.DateTimeFormat("fr-FR", opts).format(d); // => jeudi 2 janvier 2020
console.log(Intl.DateTimeFormat("fr-FR", opts).format(d));

// 紐約(New York)的時間，顯示給說法語的加拿大人
opts = {hour: "numeric", minute: "2-digit", timeZone: "America/New_York"};
Intl.DateTimeFormat("fr-CA", opts).format(d); // => 8 h 14
console.log(Intl.DateTimeFormat("fr-CA", opts).format(d));

// 在地區設定 添加 -u-ca-歷法名稱 使用不同歷法
opts = {year: "numeric", era: "short"};
Intl.DateTimeFormat("en", opts).format(d); // => 2020 AD
console.log(Intl.DateTimeFormat("en", opts).format(d));
Intl.DateTimeFormat("en-u-ca-iso8601", opts).format(d); // => 2020 AD
console.log(Intl.DateTimeFormat("en-u-ca-iso8601", opts).format(d));
Intl.DateTimeFormat("en-u-ca-hebrew", opts).format(d); // => 5780 AM
console.log(Intl.DateTimeFormat("en-u-ca-hebrew", opts).format(d));
Intl.DateTimeFormat("en-u-ca-buddhist", opts).format(d); // => 2563 BE
console.log(Intl.DateTimeFormat("en-u-ca-buddhist", opts).format(d));
Intl.DateTimeFormat("en-u-ca-islamic", opts).format(d); // => 1441 AH
console.log(Intl.DateTimeFormat("en-u-ca-islamic", opts).format(d));
Intl.DateTimeFormat("en-u-ca-persian", opts).format(d); // => 1398 AP
console.log(Intl.DateTimeFormat("en-u-ca-persian", opts).format(d));
Intl.DateTimeFormat("en-u-ca-indian", opts).format(d); // => 1941 Saka
console.log(Intl.DateTimeFormat("en-u-ca-indian", opts).format(d));
Intl.DateTimeFormat("en-u-ca-chinese", opts).format(d); // => 2019(ji-hai)
console.log(Intl.DateTimeFormat("en-u-ca-chinese", opts).format(d));
Intl.DateTimeFormat("en-u-ca-japanese", opts).format(d); // => 2 Reiwa
console.log(Intl.DateTimeFormat("en-u-ca-japanese", opts).format(d));
