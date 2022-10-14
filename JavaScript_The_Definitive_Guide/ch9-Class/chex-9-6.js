/**
 * TypedMap 會檢查間值與值之型別的一個Map的子類別
 */


class TypedMap extends Map {
  constructor (keyType, valueType, entries) {
    if (entries) {
      for (let [k, v] of entries) {
        if (typeof k !== keyType || typeof v !== valueType) {
          throw new TypeError(`Worng type for entry [${k}, ${v}]`);
        }
      }
    }

    /**
     * 在建構器中使用super()注意事項:
     *
     * 1. 若以extends關鍵字定義一個類別，類別建構器必須使用super()來調用超類別的建構器
     *
     * 2. 若沒有在子類別中定義一個建構器，會有一個自動定義。
     */

    // 以(經過型別檢查的)初始項目初始化超類別
    super(entries);

    // 藉由儲存型別來初始化這個子類別，兩個引數是所要的鍵值與值型別
    this.keyType = keyType;
    this.valueType = valueType;
  }

  // 重新定義set()
  set (key, value) {
    // 若鍵值或值的型別不對，就擲出一個錯誤
    if (this.keyType && typeof key !== this.keyType) {
      throw new TypeError(`${key} is not of type ${this.keyType}`);
    }
    if (this.valueType && typeof value !== this.valueType) {
      throw new TypeError(`${value} is not of type ${this.valueType}`);
    }

    // 若型別正確 就用超類別版本的set()方法，以實際把項目新增到映射
    return super.set(key, value);
  }
}