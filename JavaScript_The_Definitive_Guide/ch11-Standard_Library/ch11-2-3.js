// 使用具型陣列

// 回傳小於n的最大質數,使用厄拉托西尼篩法(sieve of Eratosthenes)
function sieve(n) {
  // 若x為合數(composite), a[x] 就會是1
  let a = new Uint8Array(n + 1);
  // 別處理比這還大的因數
  let max = Math.floor(Math.sqrt(n));
  // 2是第一個質數(prime)
  let p = 2;
  // 對於小於max的質數，把p的倍數標示為合數
  while (p <= max) {
    for (let i = 2 * p; i <= n; i += p) a[i] = 1;
    // 下一個未標示的索引就是質數
    while (a[++p]) /** 空的 */;
  }
  // 往回跑迴圈 以找出最大質數
  while (a[n]) n--;
  return n;
}
