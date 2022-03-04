// push() pop() shift() unshift()的堆疊與佇列
// push() 從結尾插入
// pop()  從結尾移除
console.log('====push pop====')
let stack = [];
stack.push(1, 2);
console.log(stack);
console.log(stack.pop());
console.log(stack);
stack.push(3);
console.log(stack);
console.log(stack.pop());
console.log(stack);
stack.push([4, 5]);
console.log(stack);
console.log(stack.pop());
console.log(stack);
console.log(stack.pop());
console.log(stack);

console.log('====shift====')
// shift() 從開頭開始移除
let q = [];
q.push(1, 2);
console.log(q.shift());
q.push(3);
console.log(q.shift());
console.log(q.shift());

console.log('====unshift====')
// unshift() 多個引數同時插入
// 一個個插入與同時插入 順序不同
let a = [];
console.log(a.unshift(1));
console.log(a.unshift(2));
console.log(a.unshift(3));
console.log(a.unshift(4));
console.log(a.unshift(5));
console.log(a)
a = [];
console.log(a.unshift(1, 2, 3, 4, 5));
console.log(a);