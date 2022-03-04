// do/while 與while 相似 但在底部表示至少執行一次
function printArray(a) {
    let len = a.length,
        i = 0;
    if (len === 0) {
        console.log("Empty Array");
    } else {
        do {
            console.log(a[i])
        } while (++i < len)
    }
}