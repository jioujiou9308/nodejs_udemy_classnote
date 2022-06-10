// fs => file system
//創建檔案 紀錄資料 保存紀錄

const fs = require("fs")


// 1.  try.txt => 要創建檔案的檔案名稱
// 2.  "Today is a good day." => 要寫進去的文字
// 3.   放入一個function 什麼類error or normal  
fs.writeFile("try.txt", "Today is a good day.", e=>{
     if(e) throw e;
     console.log("File has been written.");
})