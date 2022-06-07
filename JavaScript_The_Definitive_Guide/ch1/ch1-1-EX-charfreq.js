/**
 * 這個Node程式會從標準輸入讀取數字，計算那段文字中每個字母出現次數
 * 並用最常使用的字元顯示
 *
 * 一個直方圖。需要Node12或更高版本才能執行。
 *
 * Unix環境 可使用以下指令調用程式
 * node charfreq.js < corpus.js
 */

class DefaultMap extends Map {
  // 這個類型擴充Map以讓get()方法在鍵值(key)
  // 不在映射(Map)中時，回傳指定的值而非Null
  constructor (defaultValue) {
    super() // 調用超類別(superclass)的建構器
    this.defaultValue = defaultValue // 記住預設值
  }

  get (key) {
    if (this.has(key)) {
      // 如果該鍵值已經在映射中
      return super.get(key) //從超類別回傳其值
    } else {
      return this.defaultValue //否則回傳預設值
    }
  }
}

class Histogram {
  constructor () {
    this.letterCounts = new DefaultMap(0) // 從字母到次數的映射
    this.totalLetters = 0 // 總共有多少字母
  }

  add (text) {
    // 這個函式會以文字更新直方圖
    text = text.replace(/\s/g, '').toUpperCase() // 移除空白 並轉為大寫

    for (let character of text) {
      // 以迴圈處理過文字的字元
      let count = this.letterCounts.get(character) // 取的舊的次數
      this.letterCounts.set(character, count + 1) //遞增
    }
  }
}
// 把這個直方圖轉換為一個字串，顯示一個ASCII圖形
toString()
{
  let entries = [...this.letterCounts]
  // 把這個Map轉換為由[key, value]陣列所構成的一個陣列

  // 以次數(count) 排序此陣列，然後再以字母順序排列
  entries.sort((a, b)) // 定義排列順序的一個函式
  {
    if (a[1] === b[1]) {
      // 如果次數相同
      return a[0] < b[0] ? -1 : 1 // 依照字母順序排序
    } else {
      return b[1] - a[1] //以最大的次數排序
    }

    // 將次數轉為百分比(percentages)
    for (let entry of entries) {
      entry[1] = (entry[1] / this.totalLetters) * 100
    }

    //捨棄小於1%的任何項目
    entries = entries.filter(entry => entry[1] >= 1)

    // 現在把每個項目轉換為一行文字
    let lines = entries.map(
      ([l, n]) => '${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%'
    )

    // 並回傳串接起來的文字行，以newline(換行)字元分隔
    return lines.join('\n')
  }
}

// 這個async(回傳Promise) 函式會創建一個Histogram物件
// 非同步從標準輸入讀取成塊的文字，並把那些文字塊加到直方圖
// 抵達串流結尾時，會回傳這個直方圖
async function histogramFromStdin () {
  process.stdin.setEncoding('utf-8') // 讀取Unicode字串，而非位元組(bytes)
  let histogram = new Histogram()
  for await (let chunk of process.stdin) {
    histogram.add(chunk)
  }
  return histogram
}

// 最後的程式碼是主要的部分
// 它從標準輸入製作出一個Histogram物件，然後印出那個直方圖
histogramFromStdin().then(histogram => {
  console.log(histogram.toString())
})
