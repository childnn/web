/*
* 模块化：
*   在 node 中， 一个 js 文件就是一个 模块
*   require() 引入外部模块
*   方法传入一个文件路径, 相对路径必须以 . 或 .. 开头
*  使用 require() 引入模块后, 该函数会返回一个对象, 这个对象代表的就是引入的模块
*  模块标识: require 指定的文件路径
*   核心模块:
*         由 node 引擎提供的模块
*        核心模块的标识就是模块的名字
*   文件模块:
*        用户自定义模块
*        使用绝对路径或相对路径表示
*  */

'use strict';

let hello = require("../hello");
let md = require("./require01");
let math = require("./math");
let fs = require("fs");  /* node 提供的文件模块, 直接使用文件名称即可 */

console.log(md);

console.log(math.add(123, 456));
console.log(math.sub(123, 456));
console.log(fs);