'use strict';

/**
 * 在函数内部的什么地方可引用嵌套函数的规则,与在整个代码的什么地方可引用
 * 全局函数的规则相同.
 */
var migrating = true;
var fly = function (num) {
    var sound = 'Flying';
    function wingFlapper() {
        console.log(sound);
    }

    for (let i = 0; i < num; i++) {
        wingFlapper();
    }
};

if (migrating) {
    quack(4);
    fly(4);
}


function quack(num) {
    var sound = 'Quack';
    var quacker = function () {
        console.log(sound);
    };
    for (let i = 0; i < num; i++) {
        quacker();
    }
}