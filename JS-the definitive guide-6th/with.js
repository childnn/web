// 'use strict';

// 不建议使用 with
var obj = {name: 'jack', age: 18};

// not allowed in strict mode.
// with 只能访问对象的属性, 不能创建属性.
with (obj) {
    console.log(name);
    console.log(age);
}
