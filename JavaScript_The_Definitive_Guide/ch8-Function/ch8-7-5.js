// bind()方法
function f(y) { return this.x + y; };
let o = { x: 1 };
let g = f.bind(o); // 呼叫g(x)會在o上調用f()
g(2)
let p = { x: 10, g };
p.g(2)

// currying
let sum = (x, y) => x + y; // 回傳2個引數的總和
let succ = sum.bind(null, 1);
succ(2) // => 3:x 被繫結至1 傳入2作為y引數

function f(y, z) { return this.x + y + z; }
let g_ = f.bind({ x: 1 }, 2);
g_(3) // => 6