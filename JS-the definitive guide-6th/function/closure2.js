'use strict';

/*
 这个函数给对象 o 增加了属性存取器方法
 方法名为 get<name> 和 set<name>. 如果提供了一个判定函数
 setter 方法就会用它来检测参数的合法性, 然后再存储它
 如果判定函数返回 false, setter 方法抛出一个异常
 这个函数有一个非同寻常之处, 就是 setter/getter 函数
 所操作的属性值并没有存储在对象 o 中
 相反, 这个值仅仅是保存在函数中的局部变量中
 getter/setter 方法同样是局部函数, 因此可以方法这个局部变量
 也就是说, 对于两个存取器方法来说这个变量是私有的
 没有办法绕过存取器方法来设置或修改这个值
 */
function addPrivateProperty(o, name, predicate) {
    var value; // 这是一个属性值

    // getter 方法简单地将其返回
    o['get' + name] = function () {
        return value;
    };

    // setter 方法首先检查值是否合法, 若不合法就抛出异常
    // 否则就将其存储起来
    o['set' + name] = function (v) {
        if (predicate && !predicate(v)) {
            throw Error('set' + name + ': invalid value ' + v);
        } else {
            value = v;
        }
    };
}

var o = {}; // empty object

// 增加属性存取器犯法 getName() 和 setName()
// 确保只允许字符串值
addPrivateProperty(o, 'Name', function (x) {
    return typeof x == 'string';
});

o.setName('Frank'); // 设置属性值
console.log(o.getName()); // 得到属性值
o.setName(0); // 试图设置一个错误类型地值