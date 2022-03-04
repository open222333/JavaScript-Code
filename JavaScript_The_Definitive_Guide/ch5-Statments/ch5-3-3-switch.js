// switch
/*
switch (n) {
    case 1: // 若n === 1 從這開始
        // 程式區塊1
        break; // 停止於此
    case 2: // 若n === 2 從這開始
        // 程式區塊2
        break; // 停止於此
    case 3: // 若n === 3 從這開始
        // 程式區塊3
        break; // 停止於此
    default:
        // 程式區塊4
        break;
}
*/

// 範例
function convert(x) {
    switch (typeof x) {
        case "number": // 將數字轉成一個十六進位整數
            return x.toString(16);
        case "string": // 回傳包在引號中的字串
            return '"' + x + '"';
        default: // 以一般方式轉換任何其他型別的值
            return String(x);
    }
}