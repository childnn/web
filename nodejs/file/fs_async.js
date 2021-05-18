/**
 * 异步:
 *      1. 无返回值: 通过回调函数的参数返回
 *      2. 回调函数
 *        两个参数:
 *         err : 错误对象, 如果没有错误则为 null
 *         fd: 文件描述符
 *
 *
 * */
'use strict';

let fs = require('fs');

/**
 * 异步执行
 */
fs.open("hello2.txt", "w", function (err, fd) {
    console.log("回调函数");
    // console.log(arguments);
    // 判断是否出错
    // console.log(err);
    if (!err) {
        // console.log(fd);
        // 如果没有出错, 执行写入操作
        fs.write(fd, "这是异步写入的内容", function (err) {
            if (!err) {
                console.log("写入成功")
            }
            // 关闭文件
            fs.close(fd, function (err) {
                if (!err) {
                    console.log("文件已关闭");
                }
            });
        });
    } else {
        console.log(err);
    }
});

console.log("我先于回调函数执行");