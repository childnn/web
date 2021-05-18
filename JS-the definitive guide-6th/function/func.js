'use strict';

var o = { // 对象 o
    m: function () { // 对象中的方法
        var self = this; // 将 this 的值保存至一个变量中
        console.log(this === o); // 输出 true, this 就是这个对象 o
        f(); // 调用辅助函数 f()

        function f() { // 定义一个嵌套函数 f()
            console.log(this === o); // this: 的值是全局对象或 undefined
            console.log(self === o); // true: self 指外部函数的 this 值
        }
    }
};

o.m();

// 构造函数: 使用没有形参的构造函数, 可以省略括号
var obj1 = new Object();
var obj2 = new Object;