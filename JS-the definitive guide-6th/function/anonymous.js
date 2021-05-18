'use strict';

// anonymous function
// function 之前的左圆括号是必需的, 因为如果不写左圆括号, JS 解释器会试图将关键字 function 解析为 函数声明语句
// 使用圆括号 JS 解释器才会正确地将其解析为 函数定义表达式.
// 这里定义的函数会立即调用

// 定义一个返回 extend() 函数的匿名函数, 匿名函数中的代码检测了是否出现有一个 IE bug, 如果出现了这个 bug,
// 就返回一个带补丁的函数版本.
// ----
// 定义一个扩展函数, 用来将第二个以及后续参数复制至第一个参数
// 这里处理了 IE bug: 在多数 IE 版本中
// 如果 o 的属性拥有一个不可枚举的同名属性, 则 for/in 循环
// 不会枚举对象 o 的可枚举属性, 也就是说, 将不会正确地处理诸如 toString 的属性
// 除非我们显式检测它
var extend = (function () { // 将此函数的返回值赋值给 extend
    // 在修复它之前, 首先检查是否存在 bug
    for (var p in {toString: null}) {
        // 如果代码执行到这里, 那么 for/in 循环会正确工作并返回
        // 一个简单版本的 extend() 函数
        return function extend(o) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var prop in source) {
                    o[prop] = source[prop];
                }
            }
            return o;
        };
    }

    // 如果代码执行到这里, 说明 for/in 循环不会枚举测试对象的 toString 属性
    // 因此返回另一个版本的 extend() 函数, 这个函数显式测试
    // Object.prototype 中的不可枚举属性
    return function patched_extend(o) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            // 赋值所有的可枚举属性
            for (var prop in source) {
                o[prop] = source[prop];
            }
            // 检查特殊属性
            for (var j = 0; j < protoprops.length; j++) {
                prop = protoprops[i];
                if (source.hasOwnProperty(prop)) {
                    o[prop] = source[prop];
                }
            }
        }
        return o;
    };

    // 这个列表列出了需要检查的特殊属性
    var protoprops = ['toString', 'valueOf', 'constructor', 'hasOwnProperty',
        'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString'];

}());