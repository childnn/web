console.log("我是一个模块,被引入");

// 这些变量实际上在一个全局函数中(当前文件所代表的全局函数), 外部文件无法访问
var x = 10;
var y = 20;


/* 使用 exports 向外部暴露 变量/方法
*
*  */

exports.x = "我是 x";
exports.y = "我是 y";
exports.fn = function () {

};