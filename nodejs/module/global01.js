/*
* 在 node 中有一个全局对象 global, 它的作用和网页中 window 类似
* 在全局中创建的变量都会作为 global 的属性保存
* 在全局中创建的函数都会作为 global 的方法保存
*
* 全局函数的参数 5 个
* exports,
*    该对象用来将变量或函数暴露到外部
* require,
*    函数, 用来引入外部模块
* module,
*    当前模块本身
*    exports 是 module 的一个属性
*    既可以使用 exports 导出, 也可以使用 module.exports 导出
* __filename,
*   当前模块的绝对路径
*  __dirname
*   当前模块所在目录
*
* */

// 'use strict'; // 严格语法无法直接定义全局变量 b

var a = 10; /* 局部变量 */
b = 30; /* 全局变量 */

console.log(global.b);
console.log(global.a); // 未定义, 无法访问局部变量
/* arguments.callee: 获取当前执行的函数对象, 拼接字符串调用 toString */
//  证明当前文件就是在一个函数中执行.
console.log(arguments.callee + "");
console.log(arguments.length);
console.log(module.exports == exports); /* 等价 */
console.log(__filename);
console.log(__dirname);