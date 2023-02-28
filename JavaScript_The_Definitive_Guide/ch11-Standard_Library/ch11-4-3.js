// 格式化與剖析日期字串
let d = new Date(2020, 0, 1, 17, 10, 30);
d.toString() // => "Wed Jan 01 2020 17:10:30 GMT+0800 (Pacific Standard Time)"
d.toUTCString() // => "Wed, 01 Jan 2020 09:10:30 GMT"
d.toLocaleDateString() // => "2020/1/1"
d.toLocaleTimeString() // => "下午5:10:30"
d.toISOString() // => "2020-01-01T09:10:30.000Z"
console.log(d.toISOString())