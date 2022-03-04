// 物件字面值
let empty = {}; // 有特性的一個物件
let point = {
    x: 0,
    y: 0
}; // 兩個特性
let p2 = {
    x: point.x,
    y: point.y + 1
}; // 更為複雜的值
let book = {
    "main title": "JavaScript", // 這些特性名稱包括空格
    "sub-title": "The Definitive Guide",
    for: "all audiences", // for 是保留字 但不需引號
    author: {
        firstname: "David", // 本身也是一個物件
        surname: "Flanagan"
    }
};