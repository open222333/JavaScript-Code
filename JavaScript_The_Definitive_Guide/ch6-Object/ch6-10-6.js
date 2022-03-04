// 特性取值器和設值器
let value;
let o = {

  // 存取器設定只取得和設定一個資料特性
  dataProp: value,

  // 定義為一對函式的一個存取器特性
  get accessorProp() {
    return this.dataProp;
  },
  set accessorProp(value) {
    this.dataProp = value;
  }
};

let p = {
  x: 1.0,
  y: 1.0,

  get r() {
    return Math.hypot(this.x, this.y);
  },
  set r(newvalue) {
    let oldvalue = Math.hypot(this.x, this.y);
    let ratio = newvalue / oldvalue;
    this.x *= ratio;
    this.y *= ratio;
  },

  // theta 是只有取值器的一個唯讀的存取器特性
  get theta() {
    return Math.atan2(this.y, this.x);
  }
};
console.log(p.r);
console.log(p.theta);

let q = Object.create(p);
q.x = 3;
q.y = 4;
console.log(q.r); // 繼承 的存取器可以用
console.log(q.theta); // Math.atan2(4,3)

// 此物件會產生嚴格遞增的序號(serial number)
const serialnum = {
  _n: 0, // _表示僅內部使用
  // 回傳目前的值並遞增他
  get next() {
    return this._n++;
  },
  // 為n設定一個新的值，但只在他比目前的值還要大時那麼做
  set next(n) {
    if (n > this._n) this._n = n;
    else throw new Error("serial number can only be set to a larger value");
  }
};
serialnum.next = 10; // 設定起始的序號
console.log(serialnum.next);
console.log(serialnum.next);

// 此物件會回傳隨機數字
const random = {
  get octet() {
    return Math.floor(Math.random() * 256);
  },
  get uint16() {
    return Math.floor(Math.random() * 65536);
  },
  get int16() {
    return Math.floor(Math.random() * 65536) - 32768;
  }
};
console.log(random.octet)