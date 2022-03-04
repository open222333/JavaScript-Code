// 述句區塊(statement block) 結合成單一複合述句
{
    x = Math.PI;
    cx = Math.cos(x);
    console.log("cos(π) = " + cx);
}

// 空述句 for迴圈都需要主體 可當不需要主體時 可用空述句
for (let i = 0; i < a.length; a[i++] = 0) /* 空述句 */;

// 當刻意使用空述句時 建議使用註解