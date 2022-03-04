// continue
for (let i = 0; i < DataTransfer.length; i++) {
    if (!data[i]) continue; // 無法以未定義的資料繼續進行
    total += data[i];
}