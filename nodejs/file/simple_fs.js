/**
 * 简单文件写入
 *  fs
 */
'use strict';

let fs = require('fs');

/**
 * 封装了异步代码: 不需要手动关闭
 */
fs.writeFile("simple.txt", "简单文件写入", function (err) {
    if (!err) {
        console.log("写入成功");
    }
});