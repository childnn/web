// 'use strict';

/**
 * 解释性语言的功能: 动态判断源代码中的字符串.
 * eval() 是一个函数还是一个运算符?
 *  eval() 是一个函数, 但它已经被当成运算符来对待了.
 *  JS 早期版本定义了 eval() 函数, 设计者和解释器的作者对其实施了更多限制,
 *  使其看起来更像运算符. 现代 JS 解释器进行了大量的代码分析和优化. 而 eval() 的问题在于,
 *  用于动态执行的代码通常来讲是不能分析的.
 *  而将 eval() 定义为函数的另一个问题是, 它可以被赋予其他的名字:
 *  var f = eval;
 *  var g = f;
 *  如果允许这种情况的话, 那么解释器将无法放心地优化任何调用 g() 的函数.
 *  而当 eval 是一个运算符(并作为一个保留字)的时候, 这种问题就可以避免.
 *  --
 *  eval() 只有一个参数, 如果传入不是字符串, 直接返回.
 *  如果是字符串, 会当成 JS 代码进行解析(parse). 如果解析失败则抛出 SyntaxError.
 *  成功则执行代码, 并返回字符串中的最后一个表达式或语句的值, 如果最后一个表达式或语句没有值,
 *  则最终返回 undefined. 如果字符串抛出一个异常, 这个异常将把该调用传递给 eval().
 */
console.log(eval(' 3 + 2'));

var geval = eval;
var x = 'global';
var y = 'global';

function f() {
    var x = 'local';
    eval('x += "changed";');
    return x;
}

function g() {
    // var y = 'local';
    eval('y += "changed";');
    // geval('y += "changed";'); // error.
    return y;
}

console.log(f(), x);
console.log(g(), y);