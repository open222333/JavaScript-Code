// 模糊比對符號
// 模糊比對(fuzzy matching)

// 定義自己的比對模式
// 範例
// 使用 Intl.Collator (ch11.7.3) 進行字串比對, 比對時忽略重音

// 以 Soundex 演算法為基礎定義模式類別, 基於近似的讀音來比對字詞

// 依據 給定的 Levenshtein (萊文斯坦)距離為上限來寬鬆的比對字串
// https://zh.wikipedia.org/zh-tw/%E8%90%8A%E6%96%87%E6%96%AF%E5%9D%A6%E8%B7%9D%E9%9B%A2