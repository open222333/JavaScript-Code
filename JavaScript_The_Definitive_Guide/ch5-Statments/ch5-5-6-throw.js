function factorial(x) {
    // 如果輸入引數無效，就拋出一個例外
    if (x < 0) throw new Error("x must not be negative");
    // 否則，計算出一個值，並正常回傳
    let f;
    for (f = 1; x > 1; f *= x, x--) /* empty */;
    return f;
}