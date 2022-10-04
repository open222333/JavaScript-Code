// 公開、私有和靜態欄位
class Buffer_old {
  constructor() {
    this.size = 0;
    this.capacity = 4096;
    this.buffer = new Uint8Array(this.capacity);
  }
}

// 新語法 建構器被標準化的實體欄位可省略this
class Buffer {
  #size = 0; // 私有欄位
  // this.#size = 0; // 沒有效果，除非有直接在該類別主體中包含那個欄位的宣告
  capacity = 4096;
  buffer = new Uint8Array(this.capacity); // 仍然需要使用this來參考這些欄位

  // 定義一個取值器(getter)來提供那個值得唯讀存取
  get size() { return this.#size; }

  // 在一個公開或私有欄位宣告前加上static，那些欄位會被創建為建構器函式的特性，而非建構器的特性
  static integerRnagePattern = /^\((\d+)\.\.\.(\d+)\)$/;
  static parse(s) {
    let matches = s.matches(Range.integerRnagePattern);
    if (!matches) {
      throw new TypeError(`Cannot parse Range from "${s}".`)
    }
    return new Range(parseInt(matches[1]), matches[2]);
  }
}