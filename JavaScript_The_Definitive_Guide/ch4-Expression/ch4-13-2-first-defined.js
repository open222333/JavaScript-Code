// 首定義 ??

// 若左邊運算元不是null也不是undefined則回傳左邊運算元 否則回傳右邊運算元
// 若 a 沒有副作用 運算式 a ?? b 等於下方：
(a !== null && a !== undefined) ? a: b

// 若maxWidth是truthy，就用。 否則，就在preferences物件中尋找一個值。
// 如果那不是truthy的，就用一個寫定的常數
let max = maxWidth || preferences.maxWidth || 500;

// 若maxWidth有定義，就用。 否則，就在preferences物件中尋找一個值。
// 如果沒定義，就用一個寫定的常數
let max = maxWidth ?? preferences.maxWidth ?? 500;

// 第一個運算子是falsy ?? 怎麼運作
let options = {
    timeout: 0,
    title: "",
    verbose: false,
    n: null
};
options.timeout ?? 1000 // => 0 :如該物件中所定義的
options.title ?? "Untitled" // => "" :如該物件中所定義的
options.verbose ?? true // => false  :如該物件中所定義的
options.quiet ?? false // => false :特性無定義
options.n ?? 10 // => 10 :特性為null

(a ?? b) || c // ??先，然後||
a ?? (b || c) // ||先，然後??
a ?? b || c // SyntaxError :括弧是必要的
