 //內建  預設  的module
 //1. path
 

 let path = require("path")

//  console.log(path.join(__dirname, "try.js"));
//c:\Users\User\Desktop\nodejs_udemy\try.js
//  __dirname: nodejs_udemy
//  path.join: try.js

let newPath = path.join(__dirname, "try.js")
console.log(newPath);
