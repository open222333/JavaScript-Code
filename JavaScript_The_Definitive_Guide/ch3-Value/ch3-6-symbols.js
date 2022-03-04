let strname = 'string name' // 用作特性名稱的一個字串
let symname = Symbol('propname') // 用作特性名稱的一個Symbol
typeof strname // => "string" strname是一個字串
typeof symname // => "symbol" symname是一個符號
let o = {}
o[strname] = 1
o[symname] = 2
r1 = o[strname]
r2 = o[symname]

let s = Symbol('sym_x')
r3 = s.toString() // 輸出 "Symbol(sym_x)"

//Symbol 註冊與取用
let s2 = Symbol.for('shared')
let t2 = Symbol.for('shared')
s === t // => true
s.toString() // => "Symbol(shared)"
Symbol.keyFor(t) // => "shared"
