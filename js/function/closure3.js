'use strict';

// 在需要使用函数引用的地方使用函数表达式, 将代码简化到极致.
// 匿名函数: 如果不用圆括号括起, JS 解释器将认为它是一个函数声明,而不是函数表达式.
(function (food) {
    if (food === 'cookies') {
        console.log('More please');
    } else if (food === 'cake') {
        console.log('Yum yum');
    }
})('cookies');

// 还原.
var cook = function (food) {
    if (food === 'cookies') {
        console.log('More please');
    } else if (food === 'cake') {
        console.log('Yum yum');
    }
};

(cook)('cookies');
