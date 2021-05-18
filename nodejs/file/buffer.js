/*
* buffer 缓冲区
*  - buffer 的结构和数组类似,操作的方法也和数组类似
*  - 数组不能存储二进制文件, buffer 专门用来存储二进制数据
*  - 使用 buffer 不需要引入模块, node 提供
*  - buffer 中每个元素从 00 - ff    8位 一个字节
* */

var str = "hello 缓冲区";

console.log(str.length); // 字符个数
let buf = Buffer.from(str);
console.log(buf); // 二进制数据,以十六进制展示
console.log(buf.length); // 字节数

// 分配连续的内存空间, 创建之后无法改变大小
let buffer = Buffer.alloc(10);
for (let i = 0; i < 10; i++) {
    buffer[i] = i;
}
console.log(buffer);
// 控制台输出的是十进制形式
console.log(buffer[0]);
console.log(buffer[2].toString(16)); // 16 进制输出

// unsafe 表示分配的内存可能有未清空的数据.
let bufU = Buffer.allocUnsafe(10);
console.log(bufU);