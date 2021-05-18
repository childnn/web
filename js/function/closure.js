/**
 * 闭包: closure. 名词, 指的是 函数和引用环境.
 * 包含 自由变量的函数 与 为所有这些自由变量提供了变量绑定的环境一起, 被称为 闭包.
 * 函数通常包含局部变量(它们在函数体中定义,包括形参),还可能包含不是在本地定义的变量,
 * 这些变量被称为 自由变量. 自由 一词源于这样一点: 在函数体内,自由变量没有绑定到任何值(换言之,它们不是在
 * 本地声明的). 有了给每个自由变量都提供了值得环境后,便将函数敲定(close)了; 而函数和环境一起被称为 闭包.
 * ---
 * 自由变量是指函数体内未绑定的变量.
 */
'use strict';

// 如果将 count 定义为全局变量, 取消 makeCounter 方法, 会导致 count 变量暴露, 可能引起冲突.
function makeCounter() {
    var count = 0; // 受保护得局部变量.

    function counter() {
        count++;
        return count;
    }

    return counter; // 闭包.
}

var doCount = makeCounter();
console.log(doCount());
console.log(doCount());
console.log(doCount());
console.log(doCount); // 注意方法调用与方法本身得区别