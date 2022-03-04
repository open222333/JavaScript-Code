// typeof運算子
// 如果該值是一個字串，就把它包在引號中，否則就轉換它
(typeof value === "string") ? "'" + value + "'": value.toString()