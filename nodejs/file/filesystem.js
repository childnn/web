/*
* 在 node 中, 与文件系统的交互是非常重要的
* 服务器的本之就是将本地的文件发送给远程的客户端
* node 通过 fs 模块来和文件系统进行交互
* 该模块提供了一些标准文件访问 API 来打开, 读取, 写入文件,以及与其交互.
* 要使用 fs 模块,首先要对其进行加载
*  const fs = require("fs");
* fs 的所有方法都有 同步 和 异步 两种可选操作
* 同步文件系统会阻塞程序的执行,也就是除非操作完毕,否则不会向下执行代码
* 异步文件系统不会阻塞程序的执行,而是在操作完成时,通过回调函数将结果返回.
* 写入:
*   1. 打开文件
*   openSync(path, flags, mode)
*      - path: 要打开的路径
*      - flags: 打开文件要做的操作类型
*         r : 只读
*         w : 写
*         a : append
*     - mode
*       设置文件操作权限, 一般不用
*    返回值:
*     返回一个文件描述符作为结果, 通过该描述符对文件进行操作
*   2. 写入
*       writeSync(fd, buffer, offset, length, position)
*       writeSync(fd, string[, position[, encoding]]);
*          - fd: 文件描述符.
*          - string: 写入内容
*          - position: 写入起始位置
*          - encoding: 编码
*   3. 保存并关闭
* */
'use strict';
let fs = require('fs');

// 文件写入
// 1. 打开文件: 默认当前目录
let fd = fs.openSync("hello.txt", "a");
// 2. 向文件写入
fs.writeSync(fd, "今天天气好晴朗", 20);
// 3. 保存并关闭: 释放内存
fs.closeSync(fd);

/**
 * 当 flag 选项采用字符串时，则以下标志均可用：

 'a': 打开文件用于追加。 如果文件不存在，则创建该文件。

 'ax': 类似于 'a'，但如果路径存在，则失败。

 'a+': 打开文件用于读取和追加。 如果文件不存在，则创建该文件。

 'ax+': 类似于 'a+'，但如果路径存在，则失败。

 'as': 打开文件用于追加（在同步模式中）。 如果文件不存在，则创建该文件。

 'as+': 打开文件用于读取和追加（在同步模式中）。 如果文件不存在，则创建该文件。

 'r': 打开文件用于读取。 如果文件不存在，则会发生异常。

 'r+': 打开文件用于读取和写入。 如果文件不存在，则会发生异常。

 'rs+': 打开文件用于读取和写入（在同步模式中）。 指示操作系统绕过本地的文件系统缓存。

 这对于在 NFS 挂载上打开文件时非常有用，因为它可以跳过可能过时的本地缓存。 它对 I/O 性能有非常实际的影响，因此不建议使用此标志（除非真的需要）。

 这不会把 fs.open() 或 fsPromises.open() 变成同步的阻塞调用。 如果需要同步的操作，则应使用 fs.openSync() 之类的。

 'w': 打开文件用于写入。 如果文件不存在则创建文件，如果文件存在则截断文件。

 'wx': 类似于 'w'，但如果路径存在，则失败。

 'w+': 打开文件用于读取和写入。 如果文件不存在则创建文件，如果文件存在则截断文件。

 'wx+': 类似于 'w+'，但如果路径存在，则失败。

 flag 也可以是数字，参见 open(2) 文档。 常用的常量可以从 fs.constants 获取。 在 Windows 上，标志会被转换为合适的等效标志，例如 O_WRONLY 转换为 FILE_GENERIC_WRITE、 O_EXCL|O_CREAT 转换为能被 CreateFileW 接受的 CREATE_NEW。

 排他性标志 'x'（ open(2) 中的 O_EXCL 标志）可以确保路径是新创建的。 在 POSIX 系统上，即使路径是符号链接（指向不存在的文件），该路径也会被视为存在。 排他性标志不一定适用于网络文件系统。

 在 Linux 上，当以追加模式打开文件时，则写入时无法指定位置。 内核会忽略位置参数，并始终追加数据到文件的末尾。

 如果要修改文件而不是覆盖文件，则 flag 选项需要被设置为 'r+' 而不是默认的 'w'。

 有些标志的行为是特定于平台的。 例如，在 macOS 和 Linux 上使用 'a+' 标志打开目录会返回错误。 但是，在 Windows 和 FreeBSD 上，则会返回文件描述符或 FileHandle。

 // 在 macOS 和 Linux 上：
 fs.open('<目录>', 'a+', (err, fd) => {
  // => [Error: EISDIR: illegal operation on a directory, open <目录>]
});

 // 在 Windows 和 FreeBSD 上：
 fs.open('<目录>', 'a+', (err, fd) => {
  // => null, <fd>
});
 在 Windows 上，使用 'w' 标志打开（通过 fs.open()、 fs.writeFile() 或 fsPromises.open()）现有的隐藏文件，则会抛出 EPERM。 现有的隐藏文件可以使用 'r+' 标志打开用于写入。

 调用 fs.ftruncate() 或 fsPromises.ftruncate() 可以用于重置文件的内容
 */