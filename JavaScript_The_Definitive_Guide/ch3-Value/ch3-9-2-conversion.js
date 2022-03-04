// == 轉換為數字在比較

Number('3')
String(false)
Boolean([])

let n = 17
let binary = '0b' + n.toString(2) // 0b10001
let octal = '0o' + n.toString(8) // 0o21
let hex = 'ox' + n.toString(16) // 0x11

// 數字格式化
let n2 = 123456.789
r1 = n2.toFixed(0) // 123456
r2 = n2.toFixed(2) // 123456.79
r3 = n2.toFixed(5) // 123456.78900

r4 = n2.toExponential(1) // 1.2e+5
r5 = n2.toExponential(3) // 1.235e+5

r6 = n2.toPrecision(4) // 1.235e+5
r7 = n2.toPrecision(7) // 123456.8
r8 = n2.toPrecision(10) // 123456.7890
// console.log(r6)

// 解析整數與俘點數
r9 = parseInt('3 blind mice') // 3
r10 = parseFloat('3.14 meters') // 3.14
r11 = parseInt('-12.34') // -12
r12 = parseInt('0xFF') // 255
r13 = parseInt('0xff') // 255
r14 = parseInt('-0XFF') // -255
r15 = parseFloat('.1') // 0.1
r16 = parseInt('0.1') // 0
r17 = parseInt('.1') // NaN
r18 = parseFloat('$72.47') // NaN

r19 = parseInt('11', 2) // 3 : (1 * 2) + 1
r20 = parseInt('ff', 16) // 255 : (15 * 16) + 15
r21 = parseInt('zz', 36) // 1295 : (35 * 36) + 35
r22 = parseInt('077', 8) // 63 : (7 * 8) + 7
r23 = parseInt('077', 10) // 77 : (7 * 10) + 7
