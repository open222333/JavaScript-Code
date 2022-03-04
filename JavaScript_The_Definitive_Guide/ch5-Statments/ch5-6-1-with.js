// with
// 效能不能最佳化 盡量避免使用 
/*
with (object)
    statement
 */

with(document.forms[0]) {
    // 在此直接存取表單元素
    name.value = "";
    address.value = "";
    email.value = "";
}

// 等同於
let f = document.forms[0]
f.name.value = "";
f.address.value = "";
f.email.value = "";