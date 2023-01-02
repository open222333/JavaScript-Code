// DataView 和 位元組序(Endianness)

/**
 * 若整數0x00000001
 * 小端序平台 在記憶體中的安排方式為 01 00 00 00
 * 大端序平台 在記憶體中的安排方式為 00 00 00 01
 *
 * 大多數CPU架構為 小端序
 * 許多網路協定以及某些二進位為 大端序
 */
let littleEndian = new Int8Array(new Int32Array([1]).buffer)[0] === 1;

/**
 * 假設有二進位資料的位元組所構成的具型陣列要處理
 *
 * 建立DataView物件 使其可以彈性的讀寫來自位元組的值
 *
 * DataView 定義了10個get方法 10個set方法
 */
let view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
let int = view.getInt32(0); // 從位元組0讀取大端序的有號整數
int = view.getInt32(4, false); // 下一個整數也是大端序
int = view.getUint32(8, true); // 下一個整數小端序而且無號
view.setUint32(8, int, false); // 以大端序格式寫回
