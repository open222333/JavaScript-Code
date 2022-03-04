// for/of 要與可迭代(iterable)物件並用
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9],
    sum = 0;
for (let element of data) {
    sum += element;
}
console.log(sum)

// 使用非迭代會拋出TypeError
// 若要迭代過一個物件的特性 可以用for/in (5-4-3)
// 或 使用Object.keys()與for/of
let o = {
    x: 1,
    y: 2,
    z: 3
};
let keys = "";
for (let k of Object.keys(o)) {
    keys += k;
}
console.log(keys)

// Object.values() 取得特性得值
let sum2 = 0;
for (let v of Object.values(o)) {
    sum2 += v;
}
console.log(sum2)

// Object.entries() 回傳 [key, value]
let pairs = "";
for (let [k, v] of Object.entries(o)) {
    pairs += k + v;
}
console.log(pairs)

// for/of 與字串
//ES6 字串可逐字元迭代
let frequency = {};
for (let letter of "mississippi") {
    if (frequency[letter]) {
        frequency[letter]++;
    } else {
        frequency[letter] = 1;
    }
}
console.log(frequency)

// for/of 集合與映射 Set 可取得唯一字詞(unique words)
let text = "Na na na na na na na Batman!";
let wordSet = new Set(text.split(" "));
let unique = [];
for (let word of wordSet) {
    unique.push(word);
}
console.log(unique)

// Map 迭代鍵對值(key / value)
let m = new Map([[1, "one"]]);
for (let [key, value] of m) {
    console.log(key)
    console.log(value)
}

// for/await 非同步迭代 詳細需閱讀ch12 ch13
async function printStream(stream) {
    for await (let chunk of stream) {
        console.log(chunk)
    }
}