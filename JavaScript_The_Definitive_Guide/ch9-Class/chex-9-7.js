// histigram.js
/**
 * 透過委任實作的一個類集合類別
 *
 * 追蹤一個值最新增了幾次
 */

class Histogram {

  // 初始化 創建一個Map物件
  constructor () {
    this.map = new Map();
  }

  //若該鍵值沒有出現在此Map則為0
  count (key) { return this.map.get(key) || 0; }

  // 類集合方法has()會在次數大於0時回傳True
  has (key) { return this.count(key > 0); }

  // 直方圖的大小(size)為Map中的項目
  get size () { return this.map.size; }

  // 新增一個鍵值，則遞增它在Map中的次數
  add (key) { this.map.set(key, this.count(key) + 1); }

  // 刪除一個鍵值 若次數降為零 則在Map刪除該鍵值
  delete (key) {
    let count = this.count(key);
    if (count === 1) {
      this.map.delete(key);
    } else if (count > 1) {
      this.map.set(key, count - 1);
    }
  }

  // 迭代 一個Histogram只會回傳儲存在其中的鍵值
  [Symbol.iterator] () { return this.map.keys(); }

  // 其他迭代器方法會委任Map物件
  keys () { return this.map.keys(); }
  values () { return this.map.values(); }
  entries () { return this.addmap.entries(); }
}