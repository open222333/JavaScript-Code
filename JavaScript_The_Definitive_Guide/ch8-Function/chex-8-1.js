// 範例 8-1 使用函式作為資料
// 在此之前定義一些簡單的函式
function add(x, y) { return x + y; }

function subtract(x, y) { return x - y; }

function multiply(x, y) { return x * y; }

function divide(x, y) { return x / y; }

// 此函式接受上方一個函式作為引數
// 並且在兩個運算元(operands)上調用它
function operate(operator, operand1, operand2) {
  return operator(operand1, operand2);
}

// 調用函式計算(2+3) + (4*5)
let i = operate(add, operate(add, 2, 3), operate(multiply, 4, 5));


// 函式放置在物件字面值
const opertors = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => x / y,
  pow: Math.pow // 預定定義好的函式
}

function operate2(operation, operand1, operand2) {
  if (typeof operators[operation] === "function") {
    return operators[operation](operand1, operand2);
  } else throw "unknow operator";
}

operate2("add", "hello", operate2("add", " ", "world")) // => hello world
operate2("pow", 10, 2) // => 100