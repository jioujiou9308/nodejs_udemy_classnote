// 使用extname(__filename)

let path = require("path")

//會回傳檔案的類型給你
let newPath = path.extname(__filename)
console.log(newPath);  //  .js

//回傳檔案的名稱給你
let newPath2 = path.basename(__filename)
console.log(newPath2);  // File.js

//回傳所在的資料夾
console.log(__dirname);  //c:\Users\User\Desktop\nodejs_udemy
//回傳全部(資料夾+檔案)
console.log(__filename); //c:\Users\User\Desktop\nodejs_udemy\File.js