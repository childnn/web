// constructor

'use strict';

var F = function () {}; // 这是一个函数对象

var p = F.prototype; // 这是 F 相关联的原型对象
var c = p.constructor; // 这是与原型关联的函数

// 对于任意函数: F.prototype.constructor === F
console.log(c === F);

// 构造函数的原型中存在预先定义好的 constructor 属性, 这意味着对象通常继承的 constructor 均指代它们的构造函数.
// 由于构造函数是 类的 '公共标识', 因此这个 constructor 属性为对象提供了类
var o = new F(); // 创建一个类 F 的一个对象
console.log(o.constructor === F); // constructor 属性指代这个类