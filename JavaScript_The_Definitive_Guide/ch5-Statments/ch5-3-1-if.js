// 條件式 if
if (username == null) // 若username是null或undefined
    username = "Jhon Doe"; // 就定義他

// 若username是null,undefined,false,0,"",NaN 就給他一個值
if (!username) username = "John";

if (!address) {
    // 述句區塊
    address = "";
    message = "Please specify a mailing address."
}

// if else
if (n === 1)
    console.log("You have 1 new message.");
else
    console.log("You have $(n) new messages.");

// 建議使用{}曲括號 原則上 else作用於最近的if
if (i === j) {
    if (j === k) {
        console.log("");
    }
} else { // 曲括號的位置
    console.log("")
}