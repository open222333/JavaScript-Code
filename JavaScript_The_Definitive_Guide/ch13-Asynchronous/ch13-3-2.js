// async函式
function getHighScore() {
  return getJSON("/api/user/profile").then((profile) => profile.highScore);
}

// 修改成

async function getHighScore() {
  let response = await fetch("/api/user/profile");
  let profile = await response.json();
  return profile.highScore;
}
