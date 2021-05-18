/*
* node 在使用模块名字来引入模块时，会首先在当前目录的 node_modules 中寻找是否有该模块
* 如果有则直接使用,如果没有则去上一级目录的 node_modules 中寻找, 依次往上,直到找到为止.
* 如果到磁盘的根目录依然没有对应的依赖,则报错
* */
let math = require("math");

console.log(math);