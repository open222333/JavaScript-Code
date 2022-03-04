// 正規表達式 詳細 ch11-3

// /^HTML/ // 字串開頭匹配(match)字母HTML
// /[1-9][0-9]*/ // 匹配一個非零數字(nonzerodight)<後面接著任意數目的數字
// /\bjavascript\b/ // 匹配一個字詞"javascript"不考慮大小寫

let text = 'testing: 1, 2, 3'
let pattern = /\d+/g // 匹配一或更多個數字出現的所有位置
r1 = pattern.test(text) // true 存在一個匹配
r2 = text.search(pattern) // 9 第一個匹配的位置
r3 = text.match(pattern) // ['1', '2', '3'] 所有匹配組成的陣列
r4 = text.replace(pattern, '#') // "testing": #, #, #
r5 = text.split(/D+/) // ["", "1", "2", "3"] 在非數字上做分割
