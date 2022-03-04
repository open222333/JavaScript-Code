// 物件 以{}圍起
let book = {
  // 特性
  topic: 'JavaScript',
  edition: 7
}
//使用.或[]來存取一個物件的特性
book.topic
book['edition']
book.author = 'Flanagan' //創建新的特性
book.contents = {} //{}沒有特性的空物件

//以？.為條件式存取特性(ES2020)
book.content?.ch01?.sect1 //=> undefined:book.contents沒有ch01特性

let primes = [2, 3, 5, 7] // 有四個值的一個陣列，以「和」界定。
primes[0] // 陣列第一個元素
primes.length //陣列中有幾個元素
primes[primes.length - 1] //陣列中最後一個元素
primes[4] = 9 //藉由指定新增一個新元素
primes[4] = 11 //透過指定更動一個現有的元素
let empty = [] //沒有元素的空陣列
empty.length // => 0

//陣列和物件可以存放其他陣列和物件
let points = [
  { x: 0, y: 0 },
  { x: 1, y: 0 }
]
let data = {
  trial: [
    [1, 2],
    [3, 4]
  ],
  trial: [
    [2, 3],
    [4, 5]
  ]
}
