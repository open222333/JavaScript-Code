// 創建具型陣列

// 陣列元素會被初始化為 0, 0n, 0.0
let bytes = new Uint8Array(1024); // 1024位元組
let matrix = new Float64Array(9); // 3*3矩陣
let point = new Int16Array(3); // 3D空間中的一個點
let rgba = new Uint8ClampedArray(4); // 一個4位元組的RGBA像素值
let sudoku = new Int8Array(81); // 一個9*9的數獨板

// 指定元素值 of
let white = Uint8ClampedArray.of(255, 255, 255, 0); // RGBA不透明的白色

// 拷貝既存的具型陣列 from
let ints = Uint32Array.from(white);

// 值被截斷(truncated)以符合具型陣列的型別限制，不會有警告或錯誤
// 浮點數被截斷為整數 較長的整數被截斷為8位元
Uint8Array.of(1.23, 2.99, 45000); // => new Uint8Array([1, 2, 200])

// ArrayBuffer類別 
let buffer = new ArrayBuffer(1024 * 1024);
buffer.byteLength // => 1MB 記憶體
