let greeting = require("./.vscode/greeting")

//將greeting中的資料導入app.js中
//讀取的檔案會是index.js

//呼叫morning函式
greeting.morning("Daddy")
//good morning, Daddy

//呼叫night函式
greeting.night("steve")
//Good night, steve

//呼叫sayhi函式
greeting.sayhi("Mom")
//Hellow, Mom