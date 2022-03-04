// 範本字面值
let name = 'Bill'
let greeting = `Hello ${name}.`

console.log(greeting)

// let errorMessage = `\
// \u2718 Test failure at${filename}:${linenumber}:
// ${exception.message}
// Stack trace:
// ${exception.stack}
// `

r1 = `\n`.length // 這個字串有一個 newline 字元
r2 = String.raw`\n`.length // 一個反斜線字元以及字母n
console.log(r1)
