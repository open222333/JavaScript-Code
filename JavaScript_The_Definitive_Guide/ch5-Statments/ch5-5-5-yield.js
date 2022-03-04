// 產出一個範圍的整數的產生器函式
function* range(from, to) {
    for (let i = from; i <= to; i++) {
        yield i;
    }
}