'use strict';

// 使用闭包, 需要特别小心不希望共享地变量往往不经意间共享给了其他闭包

// 这个函数返回一个总是返回 v 的函数
function constfunc(v) {
    return function () {
        return v;
    }
}

// 创建一个数组来存储常数函数
var funcs = [];

for (var i = 0; i < 10; i++) {
    funcs[i] = constfunc(i);
}

// 在第 5 个位置的元素所表示的函数返回值为 5
console.log(funcs[5]());

/*
* 上述代码利用循环创建了很多闭包, 当写类似这种代码的时候往往会犯一个错误:
* 那就是试图将循环代码移入定义这个闭包的函数之内
* */

/*
* 这段代码创建了 10 个闭包, 并将它们存储在一个数组中. 这些闭包都是在同一个函数调用中定义的,
* 因此它们可以共享变量 i. 当 constfuncs() 返回时, 变量 i 的值是 10, 所有的闭包都共享这一个值.
* 因此, 数组中的函数的返回值都是同一个值, 这不是我们想要的结果. 关联到闭包的作用域链都是 "活动的",
* 记住这一点非常重要. 嵌套的函数不会将作用域内的私有成员复制一份, 也不会对所绑定的变量生成静态快照(static snapshot)
*
*
* */
// 返回一个函数组成的数组, 它们的返回值是 0~9
function constfuncs() {
    var funcs = [];
    for (var i = 0; i < 10; i++) {
        funcs[i] = function () {
            return i;
        }
    }
    return funcs;
}

var funcs = constfuncs();
console.log(funcs[5]());