/*
* JS 提供的对象: JSON, Math, Date, RegExp.
* 浏览器提供的对像: Document, Window, Console.
*
* */

let date = new Date();
console.log(date);

let number = Math.random();
console.log(number);

// 字符串中的 JSON 必须使用严格的 JSON 语法.
let obj = JSON.parse('{"name": "jack", "age": 18}');
for (let key in obj) {
    console.log(key + ': ' + obj[key]);
    // console.log(`${key}: ${obj[key]}`);
}

// RegExp.
