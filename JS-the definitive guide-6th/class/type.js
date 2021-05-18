'use strict';

/**
 * 以字符串形式返回 o 的类型
 * - 如果 o 是 null, 返回 'null'; 如果 o 是 NaN, 返回 'nan'
 * - 如果 typeof 所返回的值不是 'object', 则返回这个值
 *   (注意, 有一些 JS 的实现将正则识别为函数)
 * - 如果 o 的类不是 'Object', 则返回这个值
 * - 如果 o 包含构造函数并且这个构造函数具有名称, 则返回这个名称
 * - 否则, 一律返回 'Object'
 */
function type(o) {
    var t, c, n; // type, class, name

    // 处理 null 值的特殊情形
    if (o === null) {
        return 'null';
    }

    // NaN 和它自身不等
    if (o !== o) {
        return 'nan';
    }

    // 如果 typeof 的值不是 'object', 则使用这个值
    // 这可以识别出原始值的类型和函数
    if ((t = typeof o) !== 'object') {
        return t;
    }

    // 返回对象的类名, 除非值为 'Object'
    // 这种方式可以识别出大多数的内置对象
    if ((c = classOf(o)) !== 'Object') {
        return c;
    }

    // 如果对象构造函数的名字存在的话, 则返回ta
    if (o.constructor && typeof o.constructor === 'function' && (n = o.constructor.getName())) {
        return n;
    }

    // 其他的类型都无法识别, 一律返回 'Object'
    return 'Object';
}

// 返回对象的类
function classof(o) {
    return Object.prototype.toString.call(o).slice(8, -1);
}

// 返回对象的名字(可能是空串), 不是函数的话返回 null
Function.prototype.getName = function () {
    if ('name' in this) {
        return this.name;
    }
    return this.name = this.toString().match(/function\s*([^(]*)\(/)[1];
};