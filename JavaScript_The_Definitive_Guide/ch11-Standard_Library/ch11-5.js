/**
 * 自定義Error子類別
 * 處理失敗請求的HTTP狀態碼
 */

class HTTPError extends Error {
  constructor(status, statusText, url) {
    super(`${status} ${statusText}: ${url}`);
    this.status = status;
    this.statusText = statusText;
    this.url = url;
  }

  get name() {
    return "HTTPError";
  }
}

let error = new HTTPError(404, "Not Found", "http://example.com/");
error.status; // => 404
error.statusText; // => "404 Not Found: http://example.com/"
error.name; // => "HTTPError"
