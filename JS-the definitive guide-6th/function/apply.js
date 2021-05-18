'use strict';

// 将对象 o 中名为 m() 的方法替换为另一个方法
// 可以在调用原始的方法之前和轴记录日志消息
function trace(o, m) {
    // 在闭包中保存原始方法
    var original = o[m];
    o[m] = function () {
        // 日志
        console.log(new Date(), 'Entering:', m);
        var result = original.apply(this, arguments); // 调用原始函数
        console.log(new Date(), 'Exiting:', m); // 日志
        return result; // 返回结果
    };
}

/*
* trace() 方法接收两个参数, 一个对象和一个方法名, 它将指定的方法替代为一个新方法, 这个新方法
* 是 '包裹' 原始方法的另一个泛函数(泛函数也叫泛函, 在这里特指一种变换, 以函数为输入, 输出可以是值也可以是另一个函数).
* 这种动态修改已有方法的作法有时称为 "monkey-patching"
* */
