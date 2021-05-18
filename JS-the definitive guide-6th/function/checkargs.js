
// 陈韵如-李子伟/莫俊杰
// 黄雨萱-王诠胜

'use strict';

function check(args) {
    var actual = args.length; // 实参的真实个数
    var expected = args.callee.length; // 期望的实参个数
    if (actual !== expected) {
        throw Error('Expected ' + expected + 'args; got ' + actual);
    }
}

function f(x, y, z) {
    check(arguments); // 检查实参个数和期望的实参个数是否一致
    return x + y + z; // 再执行函数的后续逻辑
}