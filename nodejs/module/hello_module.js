/*exports.name = "孙悟空";
exports.age = 15;
exports.sayHello = function () {
    // console.log(name + ": " + age); // 无法访问
    console.log("你好");
};*/

// 在单个导出时 module.exports 和 exports 效果一致
/* 批量导出: 导出对象 */
module.exports = {
    name: "猪八戒",
    age: 14,
    sayHello: function () {
        console.log("nihao");
    }
};

var obj = {};
obj.a = {};
// a 和 obj.a 指向同一个对象
var a = obj.a;
console.log(a == obj.a);

a.name = "孙悟空";

console.log(obj.a.name);

// 对变量本身赋值, 对变量所指向的对象的属性赋值是不一样的.
// 将 a 指向新的对象
a = new Object();

console.log(a.name); // 新对象没有该属性
console.log(obj.a.name);

// 基本数据类型, 互不影响
var x = 10;
var y = x;

x++;
console.log(x);
console.log(y);

