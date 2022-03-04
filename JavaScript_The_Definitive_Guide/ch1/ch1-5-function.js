function plus1 (x) {
  return x + 1
}

plus1(y)

let square = function (x) {
  return x * x
}

square(plus1(y))

//箭頭函示
const plus1 = x => x + 1
const square = x => x * x
plus1(y)
square(plus1(y))
