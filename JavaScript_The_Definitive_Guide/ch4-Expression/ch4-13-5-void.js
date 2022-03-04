// void運算子
// 估算運算元後 捨棄該值 回傳undefined
let counter = 0;
const increment = () => void counter++;
increment() // => undefined
counter // => 1