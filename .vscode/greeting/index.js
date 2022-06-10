let try1 = require("./try1")
let try2 = require("./try2")

//將try1 & try2 的資料拉近index中
//在index.js 中的 export物件中 加入以下三個元素
exports.morning = try1.morning
exports.sayhi = try1.sayhi
exports.night = try2.night

// console.log(exports);
// {
//      morning: [Function: morning],
//   sayhi: [Function: sayhi],
//   night: [Function: night]
// }