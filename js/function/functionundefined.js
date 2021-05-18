'use strict';

var migrating = true;

/**
 * 为何 fly undefined?
 * 不同于函数声明 quack, 在第一遍处理代码时被定义,
 * fly 要等到第二遍从上到下执行代码时才被定义.
 * 在代码的任何地方,函数声明创建的函数都是已定义, 这被称为 提升(hoisting).
 * 函数表达式 显然不同,因为它创建的函数要等到它执行后才被定义. 因此,即便将函数表达式赋给
 * 全局变量(如 fly), 也要等到它创建的函数被定义后,才能使用这个全局变量来调用该函数.
 * 在此例中,两个函数的作用域都是全局. 这意味着这两个函数被定义后,在代码的任何地方都是可见的.
 */
if (migrating) {
    quack(4);
    fly(4);
}

var fly = function (num) {
    for (let i = 0; i < num; i++) {
        console.log('Flying!');
    }
};

function quack(num) {
    for (let i = 0; i < num; i++) {
        console.log('Quack!');
    }
}