/**
 * Intl.Collator
 * 比較字串
 * 使用compare()比較字串，會回傳數字，大於0:第一字串在第二字串之前，小於0:第一字串在第二字串之後，等於0:這兩個字串對collator而言相等。
 *
 * usage: 此collator物件要如何使用，預設值"sort"。可選值:"search"。
 * sensitivity: 是否區分字母大小寫。預設值"base"，usage特性若是"sort"時預設會是"variant"，若usage特性是"search"時預設取決於地區。"base"忽略大小寫與重音。"accent"考慮重音，忽略大小寫。"case"考慮大小寫，忽略重音。"variant"大小寫、重音都比較。
 * ignorePunctuation: 若為true則忽略空白與標點符號。
 * numeric: 若比較的字串有整數或含有整數，依照數值排列而非字母則設為true。
 * caseFirst: "upper"依照大寫優先排序。"lower"依照小寫優先排序。
 */

// 基本的比較器(comparator)用於使用者所在地區的排序
const collator = new Intl.Collator().compare;
["a", "z", "A", "Z"].sort(collator); // => [ 'a', 'A', 'z', 'Z' ]
console.log(["a", "z", "A", "Z"].sort(collator));

// 依照檔案名稱內的數字排列
const filenameOrder = new Intl.Collator(undefined, {numeric: true}).compare;
["page10", "page9"].sort(filenameOrder); // => [ 'page9', 'page10' ]
console.log(["page10", "page9"].sort(filenameOrder));

// 找出大致匹配目標字串的所有字串
const fuzzyMatcher = new Intl.Collator(undefined, {
  sensitivity: "base",
  ignorePunctuation: true,
}).compare;
let strings = ["food", "fool", "Føø Bar"];
strings.findIndex((s) => fuzzyMatcher(s, "foobar") === 0); // => 2
console.log(strings.findIndex((s) => fuzzyMatcher(s, "foobar") === 0));

// "de-DE-uco-phonebk": 德國電話順序
// "zh-TW-u-copinyin": 台灣拼音順序
// 1994以前 CH LL 在西班牙被視為分別的字母
const modernSpanish = Intl.Collator("es-ES").compare;
const traditionalSpanish = Intl.Collator("es-ES-u-co-trad").compare;
let palabras = ["luz", "llama", "como", "chico"];
palabras.sort(modernSpanish); // => [ 'chico', 'como', 'llama', 'luz' ]
console.log(palabras.sort(modernSpanish));
palabras.sort(traditionalSpanish); // => [ 'como', 'chico', 'luz', 'llama' ]
console.log(palabras.sort(traditionalSpanish));
