// 特性存取錯誤
// book.subtitle // => undefined不存在
// let len = book.subtitle.length; // TypeError: indefined 沒有length

// 防止錯誤
let surname = undefined;
if (book) {
  if (book.author) {
    surname = book.author.surname;
  }
}

// 取得surname 或 null 或 undefined 的一種簡介且慣用的替代方式
surname = book && book.author && book.author.surname;

let surname = book?.author?.surname;