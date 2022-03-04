// break
for (let i = 0; i < a.length; i++) {
    if (a[i] === target) break;
}

// break labelname;
// 如果要跳出的不是最接近的外圍迴圈或switch的一個述句
// 可用袋標籤形式的break述句
let matrix = getData(); // 從某處取得2D的數字陣列
let sum = 0,
    success = false;
computeSum: if (matrix) {
    for (let x = 0; x < matrix.length; x++) {
        let row = matrix[x];
        if (!row) break computeSum;
        for (let y = 0; y < row.length; y++) {
            let cell = row[y];
            if (isNaN(cell)) break computeSum;
            sum += cell;
        }
    }
    success = true;
}