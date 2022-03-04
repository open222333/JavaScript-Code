// o.m() 一般特性存取 一般調用
// o?.m() 條件式特性存取 一般調用
// o.m?.() 一般特性存取 條件式調用

function square(x, log) { // 第二個引數是一個選擇性的函式
    if (log) { // 若有傳入選擇性的函式
        log(x) // 調用他
    }
    return x * x
}

function square2(x, log) {
    log?.(x); // 若有這個函式就呼叫
    return x * x
}

let f = null, x = 0;
try {
    f(x++); // 拋出TypeError 因為f是null
} catch(e) {
    x // => 1 因為例外拋出前被遞增
}
f?.(x++) // undefined
x // => 1 因為短路行為