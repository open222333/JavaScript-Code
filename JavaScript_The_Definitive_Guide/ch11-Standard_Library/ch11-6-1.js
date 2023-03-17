// 使用reviver函式過濾某些特性
let data = JSON.parse(text, function (key, value) {
  // 移除特性名稱以一個底線開頭的任何值
  if (key[0] === "_") return undefined;

  // 若值是 ISO 8601 日期格式的一個字串，就轉為一個Date。
  if (
    typeof value === "string" &&
    /^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d\d\dZ$/.test(value)
  ) {
    return new Date(value);
  }

  return value;
});

// 指定要序列化什麼欄位，以及要以什麼順序序列化他們
let text = JSON.stringify(address, ["city", "state", "country"]);

// 指定一個 replacer函式，略過值為RegExp的特性
let json = JSON.stringify(o, (k, v) => (v instanceof RegExp ? undefined : v));
