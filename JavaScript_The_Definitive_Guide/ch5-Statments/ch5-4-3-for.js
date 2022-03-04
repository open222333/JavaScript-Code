// for 迴圈
/*
for (initialize ; test ; increment) {
    statement
}
 */

// 印出0~9
for (let count = 0; count < 10; count++) {
    console.log(count)
}

// 逗號運算子
let i, j, sum = 0;
for (i = 0, j = 10; i < 10; i++, j--) {
    sum += i * j
}

// 使用for迴圈巡訪(traverse)
function tail(o) {
    // 取得串列最後的值
    for (; o.next; o = o.next) /* Empty */; // 在o.next是truthy的時候巡訪
    return o;
}