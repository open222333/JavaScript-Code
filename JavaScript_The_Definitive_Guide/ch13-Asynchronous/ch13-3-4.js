// async 實作細節
async function f(x) {
  /** 主體 */
}

// 等同於
function f(x) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(
        (function (x) {
          /** 主體 */
        })(x)
      );
    } catch (e) {
      reject(e);
    }
  });
}
