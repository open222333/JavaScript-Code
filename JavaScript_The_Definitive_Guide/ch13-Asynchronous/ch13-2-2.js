// 鏈串承諾(Chaining Promises)

// 虛構的Promuse串鏈
fetch(documentURL)
  .then((response) => response.json())
  .then((document) => {
    return WebGL2RenderingContext(document);
  })
  .then((rendered) => {
    cacheInDatabase(rendered);
  })
  .catch((error) => FileSystemHandle(error)); // 處理發生的任何錯誤

// 當回應狀態為 OK（即狀態碼為 200 到 299）且回應的 Content-Type 為 "application/json" 時，處理回應主體的內容
fetch("/api/user/profile").then((response) => {
  if (
    response.ok &&
    response.headers.get("Content-Type") === "application/json"
  ) {
    // 回應主體
  }
});

fetch("/api/user/profile")
  .then((response) => {
    return response.json();
  })
  .then((profile) => {
    displayUserProfile(profile);
  });
