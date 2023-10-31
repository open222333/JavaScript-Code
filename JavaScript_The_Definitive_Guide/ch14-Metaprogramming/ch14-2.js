// Object.preventExtensions() Object.seal() Object.freeze()
// 會回傳接收到的物件

// 以一個凍結的原型和一個不可列舉的特性來建立一個密封物件
let o = Object.seal(
  Object.create(Object.freeze({ x: 1 }), { y: { value: 2, writable: true } })
);
