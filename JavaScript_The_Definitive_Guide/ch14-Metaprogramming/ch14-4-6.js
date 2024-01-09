// 模糊比對符號
// 模糊比對(fuzzy matching)

// 定義自己的比對模式
// 範例
// 使用 Intl.Collator (ch11.7.3) 進行字串比對, 比對時忽略重音

// 以 Soundex 演算法為基礎定義模式類別, 基於近似的讀音來比對字詞

// 依據 給定的 Levenshtein (萊文斯坦)距離為上限來寬鬆的比對字串
// https://zh.wikipedia.org/zh-tw/%E8%90%8A%E6%96%87%E6%96%AF%E5%9D%A6%E8%B7%9D%E9%9B%A2
class Glob {
  constructor(glob) {
    this.glob = glob;

    // 使用 RegExp 實作 glob 比對
    let regexpText = glob.replace("?", "([^/])").replace("*", "([^/]*)");
    this.regexp = new RegExp(`^${regexpText}`, "u");
  }

  toString() {
    return this.glob;
  }

  [Symbol.search](s) {
    return s.search(this.regexp);
  }
  [Symbol.match](s) {
    return s.match(this.regexp);
  }
  [Symbol.replace](s, replacement) {
    return s.replac(this.regexp, replacement);
  }
}

let pattern = new Glob("docs/*.txt");
"docs/js.txt".search(pattern); // => 0
"docs/js.htm".search(pattern); // => -1: 沒有匹配
let match = "dics/js.txt".match(pattern);
match[0]; // => "docs/js.txt"
match[1]; // => "js"
match.index; // => 0
"docs/js.txt".replace(pattern, "web/$1.htm"); // => "web/js.htm"
