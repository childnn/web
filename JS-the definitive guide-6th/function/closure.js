// closure
'use strict';

var scope = 'global scope';

function checkscope() {
    var scope = 'local scope';

    /*function f() {
        return scope;
    }
    return f();*/

    // 以上等价: 返回函数的返回值, 定义并调用匿名函数
    return (function () {
        return scope;
    })();
}

console.log(checkscope());

function checkscope1() {
    var scope = 'local scope';

    function f() {
        return scope;
    }

    return f; // 注意与上述的区别: 此处返回的是函数而不是函数本身, 而不是函数调用的结果
}

console.log(checkscope1());
console.log(checkscope1()());