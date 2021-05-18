'use strict';

// 定义类的一种方法. 但此方法并不常用, 它没有定义构造函数, 构造函数是用来初始化新创建的对象的.

// 这个工厂方法返回一个新的 ‘范围对象’
function range(from, to) {
    // 使用 inherit() 函数来创建对象, 这个对象继承自在下面定义的原型对象
    // 原型对象作为函数的一个属性存储, 并定义所有 '范围对象' 所共享的方法/行为
    var r = inherit(range.methods);

    // 存储新的 '范围对象' 的起始位置和结束位置/状态
    // 这两个属性是不可继承的, 每个对象都拥有唯一的属性
    r.from = from;
    r.to = to;

    // 返回这个新创建的对象
    return r;
}

// 原型对象定义方法, 这些方法为每个返回对所继承
range.methods = {
    // 如果 x 在范围内, 则返回 true, 否则返回 false
    // 这个方法可以比较数字范围, 也可以比较字符串和日期范围
    includes: function (x) {
        return this.from <= x && x <= this.to;
    },

    // 对于范围内的每个整数都调用一次 f
    // 这个方法只可用做数字范围
    foreach: function (f) {
        for (var x = Math.ceil(this.from); x <= this.to; x++) {
            f(x);
        }
    },

    // 返回表示这个范围的字符串
    toString: function () {
        return "(" + this.from + "..." + this.to + ")";
    }
};

// 这里是使用 '范围对象' 的一些例子
var r = range(1, 3); // 创建一个范围对象
console.log(r.includes(2)); // 指定数字是否在范围内
r.foreach(console.log); //
console.log(r.toString()); // toString
console.log(r); // 对象本身



/**
 * inherit() 返回一个继承自原型对象 p 的属性的新对象
 * 这里使用 ECMAScript 5 中的 Obejct.create() 函数(如果存在的话)
 * 如果不存在 Object.create(), 则退化使用其他方法
 * -----
 * inherit() 函数的其中一个用途就是防止库函数无意间修改那些不受你控制的对象.
 * 不是将对象直接作为参数传入函数,而是将它的继承对象传入函数. 当函数读取继承对象的属性时,
 * 实际上读取的是继承来的值. 如果给继承对象的属性赋值,则这些属性只会影响这个继承对象自身,而不是原始对象.
 */
function inherit(p) {
    // p 是一个对象, 但不能是 null
    if (p == null) {
        throw TypeError();
    }
    // 如果存在方法 create, 直接使用.
    if (Object.create) {
        return Object.create(p);
    }
    // 否则进一步检测
    var t = typeof p;
    if (t !== 'object' && t !== 'function') {
        throw TypeError();
    }

    // 定义空构造
    function Obj() {
    }

    // 将原型属性设置为 p
    Obj.prototype = p;
    // 使用 f() 创建 p 的继承对象.
    return new Obj();
}