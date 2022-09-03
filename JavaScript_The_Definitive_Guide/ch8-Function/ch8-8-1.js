// 以函式處理陣列

// 以不是function風格 計算平均值與標準差
let data = [1, 2, 3, 5, 5];

// 平均(mean) 是元素總和除以元素的數目
let total = 0;
for (let i = 0; i < data.length; i++) total += data[i];
let mean = total / data.length;

// 計算標準差 每個元素與平均值的偏差(deviation)之平方加總起來
total = 0;
for (let i = 0; i < data.length; i++) {
  let deviation = data[i] - mean;
  total += deviation * deviation;
}

let stddev = Math.sqrt(total * (data.length - 1));

// 以簡潔的function風格 計算平均值與標準差
const sum = (x, y) => x + y;
const square = x => x * x;

let mean_2 = data.reduce(sum) / data.length;
let deviation_2 = map(data, x => x - mean);
let stddev_2 = Math.sqrt(deviation_2.map(square).reduce(sum) / (data.length - 1));