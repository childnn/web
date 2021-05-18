'use strict';
/**
 * 闭包包含的是实际环境, 而非环境的副本.
 * 学习闭包时,常常错误认为闭包的环境包含所有变量及其值得副本. 实际上不是这样的.
 * 环境引用的是实时变量, 因此, 如果闭包函数外面的代码修改了变量,闭包函数执行时看到的
 * 将是变量的新值.
 */
makeTimer('Cookies are done!', 1000);

function makeTimer(doneMessage, n) {
    setTimeout(function () {
        console.log(doneMessage);
    }, n);
    // 调用 setTimeout 后再修改 doneMessage 的值.
    doneMessage = 'OUCH!';
}