'use strict';

// 复数: 实数和虚数的和, 并且虚数 i 是 -1 的平方根

function Complex(real, imaginary) {
    if (isNaN(real) || isNaN(imaginary)) { // 确保两个参数都是数字
        throw new TypeError();
    }
    this.r = real; // 复数的实部
    this.i = imaginary; // 复数的虚部
}

/*
* 类的实例方法定义为原型对象的函数值属性
* 这里定义的方法可以被所有实例继承, 并为它们提供共享的行为
* 需要注意的是, JS 的实例方法必须使用关键字 this 来存取实例的字段
* */
// 当前复数对象加上另外一个复数, 并返回一个新的计算和值后的复数对象
Complex.prototype.add = function (that) {
    return new Complex(this.r + that.r, this.i + that.i);
};

// 当前复数乘以另外一个复数, 并返回一个新的计算乘积之后的复数对象
Complex.prototype.mul = function (that) {
    return new Complex(this.r * that.r - this.i * that.i, this.r * that.i + this.i * that.r);
};

// 复数的模, 原点(0, 0) 到复平面的距离
Complex.prototype.mag = function () {
    return Math.sqrt(this.r * this.r + this.i * this.i);
};

// 负运算
Complex.prototype.neg = function () {
    return new Complex(-this.r, -this.i);
};

// 将复数对象转换为一个字符串
Complex.prototype.toString = function () {
    return "{" + this.r + "," + this.i + "}";
};

Complex.prototype.equals = function (that) {
    return that != null && that.constructor === Complex &&
        this.r === that.r && this.i === that.i;
};

// 预定义一些对复数匀速那有帮助的类字段
// 它们的命名全都是大写, 用以表明它们是常量
Complex.ZERO = new Complex(0, 0);
Complex.ONE = new Complex(1, 0);
Complex.I = new Complex(0, 1);

// 这个类方法将由实例对象的 toString 方法返回的字符串格式解析为一个 Complex 对象
// 或者抛出一个 TypeError
Complex.parse = function (s) {
    try {
        var m = Complex._format.exec(s); // 利用正则表达式进行匹配
        return new Complex(parseFloat(m[1]), parseFloat(m[2]));
    } catch (e) {
        throw new TypeError("Can't parse '" + s + "' as a complex number.");
    }
};

// 定义类的 '私有' 字段, 这个字段在 Complex.parse() 中用到
// 下划线前缀表明它是类内部使用的, 而不属于类的公有 API 的部分
Complex._format = /^{([^,]+),([^}]+)}$/;


var c = new Complex(2, 3); // 使用构造函数创建新的对象
var d = new Complex(c.i, c.r); // 用到了 c 的实例属性
console.log(c.add(d).toString());

//
console.log(Complex.parse(c.toString())
    .add(c.neg())
    .equals(Complex.ZERO));