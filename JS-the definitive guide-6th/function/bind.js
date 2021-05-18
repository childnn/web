/*
* bind() 是在 ECMAScript 5 中新增的方法. 这个方法的主要作用就是将函数绑定至某个对象.
* 当在函数 f() 上调用 bind() 方法并传入一个对象 o 作为参数, 这个方法将返回一个新的函数.
* (以函数调用的方式) 调用新的函数将会把原始的函数 f() 当作 o 的方法来调用.
* 传入新函数的任何实参都将传入原始函数
* */

function f(y) { // 这个是待绑定的函数
    return this.x + y;
}

var o = {x: 1}; // 将要绑定的对象
var g = f.bind(o); // 通过调用 g(x) 来调用 o.f(x)
console.log(g(2));

//--------------------------
// 自定义 bind()
// 返回一个函数, 通过调用它来调用 o 中的方法 f(), 传递它所有的参数
function bind(f, o) {
    // 如果 bind 存在的话, 直接使用
    if (f.bind) {
        return f.bind(o);
    } else { // 否则, 这样绑定
        return function () {
            return f.apply(o, arguments);
        };
    }
}

