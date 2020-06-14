/*exports.name = "孙悟空";
exports.age = 15;
exports.sayHello = function () {
    // console.log(name + ": " + age); // 无法访问
    console.log("你好");
};*/


/* 批量导出: 导出对象 */
module.exports = {
    name: "猪八戒",
    age: 14,
    sayHello: function () {
        console.log("nihao");
    }
};