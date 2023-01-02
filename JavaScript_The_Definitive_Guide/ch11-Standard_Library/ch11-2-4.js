// 具型陣列的方法與特性

/**
 * 具型陣列有固定長度，因此length特性是唯讀的
 * 改變陣列長度的方法都無實作，push() pop() unshift() shift() splice()
 * 改變內容但不改變長度都有實作，sort() reverse() fill()
 */

// set(陣列或具型陣列, 元素偏移量 預設為0) 拷貝一個普通陣列或具型陣列的元素至具型陣列來一次設定該具型陣列的多個元素
// slice(start, end) 回傳一個新陣列物件，為原陣列選擇之begin 至end（不含end）部分的淺拷貝（shallow copy）。而原本的陣列將不會被修改。
let bytes = new Uint8Array(1024); // 一個1K的緩衝區
let pattern = new Uint8Array([0, 1, 2, 3]); // 4個位元組的一個陣列
bytes.set(pattern);
bytes.set(pattern, 4);
bytes.set([0, 1, 2, 3], 8);
bytes.slice(0, 12); // => new Uint8Array([0,1,2,3,0,1,2,3,0,1,2,3])

// subarray(start, end) 回傳現有陣列一個新的view
let ints = new Int16Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
let last3 = ints.subarray(ints.length - 3, ints.length); // 取最後三個
last3[0]; // => 7 等於 ints[7]
ints[9] = -1; // 改變原陣列的值
last3[2]; // => -1 子陣列也會改變

/**
 * buffer特性 陣列的ArrayBuffer
 * byteOffset 該陣列的資料在底層緩衝區中的起始位置
 * byteLength 陣列的資料長度
 * 對於任何具型陣列a 以下不變式永遠為真
 * a.length * a.BYTES_PER_ELEMENT === a.byteLength // => true
 */
last3.buffer === ints.buffer // => true, 相同緩衝區的不同觀點
last3.byteOffset // => 14 這個view從該緩衝區的位元組14開始
last3.byteLength // => 6 這個view有6個位元組(3個16位元組)長
last3.buffer.byteLength // => 20 底層緩衝區有20個位元組

/**
 * ArrayBuffer 是隱藏起來的位元組塊
 * 能以具型陣列存取那些位元組
 */
let byte2s = new Uint8Array(8);
byte2s[0] = 1;
byte2s.buffer[0] // => undefined: 緩衝區沒有索引0
byte2s.buffer[1] = 255; // => 不正常的設定緩衝區的一個位元組
byte2s.buffer[1] // => 255 設定一個普通的js特性
byte2s[1] // => 0