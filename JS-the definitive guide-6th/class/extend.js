'use strict';

/*
* 把 p 中的可枚举属性复制到 o 中, 并返回 o.
* 如果 o 和 p 中含有同名属性, 则覆盖 o 中的属性
* 这个函数并不处理 getter/setter 以及复制属性
* */
function extend(o, p) {
    for (var prop in p) { // 遍历 p 中的所有属性
        o[prop] = p[prop]; // 将属性添加至 o 中
    }
    return o;
}

// 定义一个返回 extend() 函数的匿名函数, 匿名函数中的代码检测了是否出现有一个 IE bug, 如果出现了这个 bug,
// 就返回一个带补丁的函数版本.
// ----
// 定义一个扩展函数, 用来将第二个以及后续参数复制至第一个参数
// 这里处理了 IE bug: 在多数 IE 版本中
// 如果 o 的属性拥有一个不可枚举的同名属性, 则 for/in 循环
// 不会枚举对象 o 的可枚举属性, 也就是说, 将不会正确地处理诸如 toString 的属性
// 除非我们显式检测它
var extend1 = (function () { // 将此函数的返回值赋值给 extend
    // 在修复它之前, 首先检查是否存在 bug
    for (var p in {toString: null}) {
        // 如果代码执行到这里, 那么 for/in 循环会正确工作并返回
        // 一个简单版本的 extend() 函数
        return function extend(o) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var prop in source) {
                    o[prop] = source[prop];
                }
            }
            return o;
        };
    }

    // 如果代码执行到这里, 说明 for/in 循环不会枚举测试对象的 toString 属性
    // 因此返回另一个版本的 extend() 函数, 这个函数显式测试
    // Object.prototype 中的不可枚举属性
    return function patched_extend(o) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            // 赋值所有的可枚举属性
            for (var prop in source) {
                o[prop] = source[prop];
            }
            // 检查特殊属性
            for (var j = 0; j < protoprops.length; j++) {
                prop = protoprops[i];
                if (source.hasOwnProperty(prop)) {
                    o[prop] = source[prop];
                }
            }
        }
        return o;
    };

    // 这个列表列出了需要检查的特殊属性
    var protoprops = ['toString', 'valueOf', 'constructor', 'hasOwnProperty',
        'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString'];

}());

/**
 * 将 p 中的可枚举属性复制至 o 中, 并返回 o
 * 如果 o 和 p 中有同名的属性, o 中的属性将不受影响
 * 这个函数并不处理 getter/setter 以及复制属性
 */
function merge(o, p) {
    for (var prop in p) { // 遍历 p 中的所有属性
        if (o.hasOwnProperty(prop)) { // 过滤掉已经在 o 中存在的属性
            continue;
        }
        o[prop] = p[prop]; // 将属性添加至 o 中
    }
    return o;
}

/**
 * 如果 o 中的属性在 p 中没有同名属性, 则从 o 中删除这个属性
 * 返回 o
 */
function restrict(o, p) {
    for (var prop in o) { // 遍历 o 中的所有属性
        if (!(prop in p)) {
            delete o[prop]; // 如果在 p 中不存在, 则删除之
        }
    }
    return o;
}

/**
 * 如果 o 中的属性在 p 中存在同名属性, 则从 o 中删除这个属性
 * 返回 o
 */
function subtract(o, p) {
    for (var prop in p) {
        delete o[prop]; // 从 o 中删除(删除一个不存在的属性不会报错)
    }
    return o;
}

/**
 * 返回一个新对象, 这个对象同时拥有 o 的属性和 p 的属性
 * 如果 o 和 p 中有重名属性, 使用 p 中的属性值
 */
function union(o, p) {
    return extend(extend({}, o), p);
}

/**
 * 返回一个新对象, 这个属性拥有同时在 o 和 p 中出现的属性
 * 很像求 o/p 的交集, 但 p 中属性的值被忽略
 */
function intersection(o, p) {
    return restrict(extend({}, o), p);
}

function keys(o) {
    if (typeof o !== 'object') {
        throw TypeError(); // 参数必须是对象
    }
    var result = []; // 将要返回的数组
    for (var prop in o) {
        if (o.hasOwnProperty(prop)) { // 是否是自有属性
            result.push(prop); // 将属性名添加至数组中
        }
    }
    return result;
}

//----------------------------------------------

// 一个用以定义简单类的函数
function defineClass(constructor, // 用以设置实例的属性的函数
                     methods, // 实例的方法, 复制至原型中
                     statics) { // 类属性, 复制至构造函数中
    if (methods) {
        extend(constructor.prototype, methods);
    }
    if (statics) {
        extend(constructor, statics);
    }
    return constructor;
}

// 这是 Range 类的另一个实现
var SimpleRange = defineClass(function (f, t) {
    this.f = f;
    this.t = t;
}, {
    includes: function (x) {
        return this.f <= x && x <= this.t;
    },
    toString: function () {
        return this.f + "..." + this.t;
    }
}, {
    upto: function (t) {
        return new SimpleRange(0, t);
    }
});