function morning(name){
     console.log("good morning, " + name);
}
function sayhi(name){
     console.log("Hellow, " + name);
}

//將function morning 放進 module 的exports 中 並命名文morning
//      命名      morning的function
exports.morning = morning;

//將function sayhi 放進 module 的exports 中 並命名文sayhi
//      命名    sayhi的function
exports.sayhi = sayhi