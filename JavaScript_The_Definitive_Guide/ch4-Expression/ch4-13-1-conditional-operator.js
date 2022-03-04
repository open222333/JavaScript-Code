// 條件運算子(?:)

x > 0 ? x : -x // x的絕對值


greeting = "hello " + (username ? username : "there");
// 等同於 以下函式
greeting = "hello ";
if (username) {
    greeting += username;
} else {
    greeting += "there";
}