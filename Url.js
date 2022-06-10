//另一種module  url

const url = require("url")

const data = "https://tailwindcss.com/docs/overflow#hiding-content-that-overflows"

const parsedURL = url.parse(data, true)
console.log(parsedURL.host); //tailwindcss.com
console.log(parsedURL.hostname); //tailwindcss.com 重點在於有沒有port 這裡沒有
console.log(parsedURL.pathname); ///docs/overflow
console.log(parsedURL.path); ///docs/overflow  應該要式後面剩餘的網址
console.log(parsedURL.query); ///[Object: null prototype] {}  裡面沒東西
console.log(typeof parsedURL.query); // objective
