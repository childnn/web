'use strict';

// makeTimer 中的 function 函数将在 makeTimer 调用完毕 1s 后执行.
/**
 * 这里向 函数 setTimeout 传入一个函数表达式,而这个函数表达式使用了自由变量 doneMessage.
 * 你知道,函数表达式的结果是一个函数引用,而该函数引用将被传递给 setTimeout.
 * 方法 setTimeout 存储该函数引用(这是一个函数及其环境,即闭包), 并在 1000 毫秒后调用它.
 * 再说一遍,传递给 setTimeout 的函数是一个闭包,因为它带有将自由变量 doneMessage 绑定到字符串
 * "Cookies are done!" 的环境.
 */
makeTimer('Cookies are done!', 1000);

/**
 * 并非只能通过从函数返回函数来创建闭包.
 * 如果函数使用了自由变量,则每当创建函数得上下文外面执行它时,都将创建一个闭包.
 * 将函数传递给函数时,也将创建闭包. 在这种情况下,传递得函数将在完全不同于定义它得上下文执行.
 */
function makeTimer(doneMessage, n) {
    // 这里的 function 是定义的一个函数
    // 它使用了 自由变量(doneMessage)
    // 将它用作 setTimeout 的处理程序.
    setTimeout(function () {
        console.log(doneMessage);
    }, n);
}