// 'use strict';

function f(x, y, z) {
    if (arguments.length !== 3) {
        throw new Error("expects 3 arguments.")
    }
}

/**
 * arguments 的属性 callee, caller
 * callee: 当前正在执行的函数
 * caller: 当前正在执行的函数的函数
 * @param x
 * @returns {number}
 */
var factorial = function (x) {
    if (x <= 1) {
        return 1;
    }
    // callee 指当前正在执行的函数: 此处位匿名函数, 递归调用
    return x * arguments.callee(x - 1);
};

/**
 * 将原始数组的 length 元素复制至目标数组
 * 开始复制原始数组的 fromStart 元素
 * 并且将其复制至目标数组的 toStart 中
 * 要记住实参的顺序并不容易
 * @param from
 * @param fromStart
 * @param to
 * @param toStart
 * @param length
 */
function arrayCopy(/*array*/ from, /*index*/ fromStart,
                   /*array*/to, /*index*/ toStart,
                   /*integer*/length) {
    // code...
}

function easyCopy(args) {
    arrayCopy(args.from, args.fromStart || 0, // 设置默认值
        args.to, args.toStart || 0,
        args.length)
}

var a = [1, 2, 3, 4], b = [];

easyCopy({from: a, to: b, length: a.length})