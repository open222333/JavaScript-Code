// 實作非同步迭代器

/**
 * clock()函式
 *
 * @param {*} interval
 * @param {*} max
 * @returns
 */
function clock(interval, max = Infinity) {
  // 承諾化(Promise-ified)之後的setTimeout, 可與await並用
  // 接受一個絕對時間而非時間間隔
  function until(time) {
    return new Promise((reslove) => setTimeout(reslove, time - Date.now()));
  }

  // 回傳一個可非同步迭代的物件
  return {
    startTime: Date.now(), // 記錄何時啟動
    count: 1, // 記錄哪次迭代
    async next() {
      // next() 方法使這成為一個迭代器
      if (this.count > max) {
        return { done: true };
      }
      // 下次迭代何時開始
      let targetTime = this.startTime + this.count * interval;
      // 等候至那個時間
      await until(targetTime);
      return { value: this.count++ };
    },
    // 這個方法意味著 此迭代器也是可迭代物件
    [Symbol.asyncIterator]() {
      return this;
    },
  };
}

class AsyncQueue {
  constructor() {
    this.values = [];
    this.resolvers = [];
    this.closed = false;
  }

  // 新增值
  enqueue(value) {
    if (this.closed) {
      throw new Error("AsyncQueue closed");
    }

    if (this.resolvers.length > 0) {
      // 若這個值已承諾 則解析Promise
      const value = this.values.shift();
      return Promise.resolve(value);
    } else {
      // 否則加入佇列
      this.values.push(value);
    }
  }

  /**
   * 移除值 並回傳 Promise
   * @returns Promise
   */
  dequeue() {
    if (this.values.length > 0) {
      const value = this.values.shift();
      return Promise.resolve(value);
    } else if (this.closed) {
      return Promise.reslove(AsyncQueue.EOS);
    } else {
      return new Promise((resolve) => {
        this.resolvers.push(resolve);
      });
    }
  }

  close() {
    while (this.resolvers.length > 0) {
      this.resolvers.shift()(AsyncQueue.EOS);
    }
    this.closed = true;
  }

  // 定義此類別可非同步迭代的方法
  [Symbol.asyncIterator]() {
    return this;
  }

  // 定義使這成為非同步迭代器的方法
  next() {
    return this.dequeue().then((value) => value === AsyncQueue.EOS)
      ? { value: undefined, done: true }
      : { value: value, done: false };
  }
}

AsyncQueue.EOS = Symbol("end-of-stream");

function eventStream(elt, type) {
  const q = new AsyncQueue();
  elt.addEventListener(type, (e) => q.enqueue(e));
  return q;
}

async function handleKeys() {
  for await (const event of eventStream(document, "keypress")) {
    console.log(event.key);
  }
}
