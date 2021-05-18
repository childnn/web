/*
* 注: 文件操作方法, 各浏览器不一定支持.
* 操作本地文件系统中的文件分为以下几步:
*  1. 必须获取一个表示本地文件系统对象
*  2. 通过该对象的根目录来查找(创建)需要的文件的 FileEntry 对象.
*  3. 使用 FileEntry 对象获取 File 或者 FileWriter 对象来进行 read/write 操作.
*     在 Worker 线程中可以使用一个同步 API 来获取该对象, 相应地在主线程中也有对应地异步 API
*     // 同步获取一个文件系统. 传递文件系统地有效期和大小参数
*     // 返回一个文件系统对象或者抛出错误
*     var fs = requestFileSystemSync(PERSISTENT, 1024 * 1024);
*     // 异步版本地 API 需要使用回调函数来处理成功和失败地情况
*      requestFileSystem(TEMPORARY,  // 有效期
*               50 * 1024 * 1024,   // 大小: 50MB
*               function(fs) {      // fs 就是该文件系统对象
*                   // 这里使用 fs 进行一些操作
*               },
*               function(e) { // 这里 e 是一个错误对象
*                   console.log(e); // 或者以其他方式处理它.
*               }
*           );
*  不论是同步版本还是异步版本 API, 都可以指定文件系统地有效期和大小. 一个 永久的(PERSISTENT) 文件系统适用于想要
*  永久存储用户数据地 Web 应用. 除非用户显式要求删除这些数据, 否则浏览器永远都不会删除这些数据.
*  一个临时地(TEMPORARY) 文件系统适用于想要缓存数据, 在浏览器删除该文件系统仍然可以次操作这些数据的 Web 应用.
*  文件系统的大小是以字节为单位指定的, 并且其大小应该是一个保证足够存储所需数据的合理上限.
*  使用这些方法获取的文件系统依赖于包含它的文档源. 所有同源(协议,主机,端口)的文档或者 Web 应用共享一个文件系统.
*  两个非同源的文档或者 Web 应用拥有完全独立的文件系统. 同时, 文件系统和用户硬盘上其他的文件也是互相隔离的: Web 应用无法拥有
*  整个硬盘的 root 权限, 即无法访问任意文件.
*  通过上述方法获取到的文件系统对象有一个 root 属性, 该属性指向文件系统的根目录. 这是一个 DirectoryEntry 对象, 并且它可能还有嵌套的目录,
*  这些嵌套的目录也用 DirectoryEntry 对象表示. 文件系统的每个目录中包含的文件都用 FileEntry 对象表示. DirectoryEntry 对象定义
*  一些通过路径名 pathname (如果指定的名字不存在, 它们会根据指定的情况来创建新的目录或者文件) 获取 DirectoryEntry 对象和 FileEntry
*  对象的方法. DirectoryEntry 对象还定义了一个 createReader() 工厂方法, 用于返回一个列出目录内容列表的 DirectoryReader 对象.
*  FileEntry 类定义一个获取表示文件内容的 File 对象(一个 Blob)的方法. 然后, 可以使用 FileReader 对象读取该文件. 除此之外, FileEntry
*  还定义一个方法, 该方法返回一个 FileWriter 对象, 用该对象可以将内容写入到文件中.
*   使用异步 API:
*    // 读取文本文件 'hello.txt', 并将其内容以日志的形式输出
*   // 由于使用了异步 API, 因此出现了 4 层函数嵌套
*   // 此例不包括任何错误回调处理
*    requestFileSystem(PERSISTENT, 10 * 1024 * 1024, function(fs) { // 获取文件系统
*         fs.root.getFile('hello.txt', {}, function(entry) { // 获取 FileEntry 对象
*             entry.file(function(file) { // 获取 File 对象
*                var reader = new FileReader();
*                reader.readAsText(file);
*                reader.onload = function() { // 获取文件内容
*                    console.log(reader.result);
*                };
*             });
*         });
*   });
* */

// 使用异步文件系统 API
/*
* 这些函数在 Google Chrome10.0 开发板测试过
* 启动 Chrome 的时候需要开启这些选项:
*  --unlimited-quote-for-files: 启用文件系统访问
*  --allow-file-access-from-files: 允许通过 file://URL 进行测试
*
* */

// 处理错误信息的回调函数
function logger(e) {
    console.log(e);
}

// requestFileSystem() 方法创建了一个在沙箱环境中的本地文件系统
// 并只有同源的应用才可以访问
// 可以在该文件系统中进行文件 read/write, 但是只能限定在该沙箱中
// 不能访问其他的文件系统
var filesystem; // 假设在下面的函数之前, 已经初始化完毕
requestFileSystem(PERSISTENT, // 或者采用用于缓存文件的临时 TEMPORARY 文件系统
    10 * 1024 * 1024, // 10 MB. 参数单位为字节 byte
    function (fs) { // 完成后, 调用此方法
        filesystem = fs; // 将文件系统保存到一个全局变量中
    },
    logger); // 错误回调

// 以文本形式读取指定文件的内容, 并将它们传递给回调函数
function readTextFile(path, callback) {
    // 根据指定的文件名, 调用 getFile() 获取相应的 FileEntry 对象
    filesystem.root.getFile(path, {}, function (entry) {
            // 使用 FileEntry 调用此方法来获得文件
            // 现在调用 FileEntry.file() 方法获取 File 对象
            entry.file(function (file) { // file 就表示 File 对象
                var reader = new FileReader(); // 创建一个 FileReader 对象
                reader.readAsText(file); // 读取文件
                reader.onload = function () { // 当读取成功时
                    callback(reader.result); // 将其内容传递给回调函数
                };
                reader.onerror = logger; // 记录调用 readAsText() 时发生的错误
            }, logger); // 记录调用 file() 方法时发生的错误.
        },
        logger); // 记录调用 getFile() 方法时发生的错误.
}

// 将指定的内容添加到指定路径的文件中,
// 如果指定路径的文件不存在, 则使用该文件名创建一个新的文件
// 完成之后, 调用回调函数
function appendToFile(path, contents, callback) {
    // filesystem.root 指根目录
    filesystem.root.getFile( // 获取 FileEntry 对象
        path, // 想要获取的文件的名字和路径
        {create: true}, // 不存在则创建
        function (entry) { // 完成之后调用此函数
            entry.createWriter( // 为该文件创建一个 FileWriter 对象
                function (writer) { // 创建完成之后调用此函数
                    // 默认情况下, 从文件最开始写入
                    // 这里指定从文件最后开始写
                    writer.seek(writer.length); // 移动到文件最后

                    // 将文件内容转换成 Blob
                    // contents 参数可以是字符串, Blob 或者 ArrayBuffer
                    var bb = new BlobBuilder();
                    bb.append(contents);
                    var blob = bb.getBlob();

                    // 现在将该 blob 写入到文件中
                    writer.write(blob);
                    writer.onerror = logger; // 记录调用 writer() 方法时发生的错误
                    if (callback) { // 如果有回调
                        writer.onwrite = callback; // 则成功的时候调用
                    }
                },
                logger); // 记录调用 createWriter() 方法时发生的错误

        },
        logger); // 记录调用 getFile() 方法时发生的错误
}

// 删除指定的文件, 完成后调用指定的回调函数
function deleteFile(name, callback) {
    filesystem.root.getFile(name, {}, // 根据指定的名字获取相应的 FileEntry 对象
        function (entry) { // entry 就是该 FileEntry 对象
            entry.remove(callback, // 删除 FileEntry 对象
                logger); // 或者记录调用 remove() 方法时发生的错误

        },
        logger); // 记录调用 getFile() 方法时发生的错误
}

// 根据指定的名字创建一个新的目录
function makeDirectory(name, callback) {
    filesystem.root.getDirectory(name, // 要创建的目录的名字
        {       // 选项
            create: true, // 不存在则创建
            exclusive: true // 存在则报错
        },
        callback, // 完成后调用此方法
        logger) // 记录错误
}

// 读取指定目录的内容, 并以字符串数组的形式将内容传递给指定的回调函数
function listFiles(path, callback) {
    // 如果指定的内容共不存在, 则列出根目录
    // 否则, 根据名字查找目录并将目录内容列出来(或者如果发生错误就记录错误)
    if (!path) {
        getFiles(filesystem.root);
    } else {
        filesystem.root.getDirectory(path, {}, getFiles, logger);
    }

    function getFiles(dir) { // 此方法在之前也使用过
        var reader = dir.createReader(); // 一个 DirectoryReader 对象
        var list = []; // 用来存储文件名
        reader.readEntries(handleEntries, // 将每项都传递给下面的函数
            logger); // 或者记录错误

        // 读取目录可以分成很多步
        // 必须一直调用 readEntries() 方法直到获取到空数组为止
        // 完成之后可以将整个列表传递给回调函数
        function handleEntries(entries) {
            if (entries.length === 0) { // 完成
                callback(list);
            } else {
                // 否则, 将这些项添加到列表中, 并继续读取
                // 此类数组对象包含 FileEntry 对象
                // 这里需要挨个获取它们的名字
                for (var i = 0; i < entries.length; i++) {
                    var name = entries[i].name; // 获取名字
                    if (entries[i].isDirectory) { // 标记目录
                        name += "/"; // 添加到列表中
                    }
                    list.push(name); // 添加到列表中
                }
                // 获取下一批项
                reader.readEntries(handleEntries, logger);
            }
        }
    }
}

// 同步文件系统 API
/*
* 在 Worker 线程中操作文件和文件系统会更加容易些, 由于 Worker 线程中都是阻塞调用, 因此可以使用同步的 API.
* */
// 在 Worker 线程中使用同步 API 实现的文件系统工具函数
var filesystem = requestFileSystemSync(PERSISTENT, 10 * 1024 * 1024);

function readTextFile(name) {
    // 从根 DirectoryEntry 中获取 FileEntry 对象, 再从 FileEntry 中获取 File
    var file = filesystem.root.getFile(name).file();
    // 使用同步 FileReader API 读取
    return new FileReaderSync().readAsText(file);
}

function appendToFile(name, contents) {
    // 从跟 DirectoryEntry 中获取 FilEntry 对象, 再从 FileEntry 中获取 FileWriter
    var writer = filesystem.root.getFile(name, {create: true}).createWriter();
    writer.seek(writer.length); // 从文件最后开始
    var bb = new BlobBuilder(); // 将文件内容构造进 Blob 中
    bb.append(contents);
    writer.write(bb.getBlob()); // 将 Blob 写入文件中
}

function deleteFile(name) {
    filesystem.root.getFile(name).remove();
}

function makeDirectory(name) {
    filesystem.root.getDircetory(name, {create: true, exclusive: true});
}

function listFiles(path) {
    var dir = filesystem.root;
    if (path) {
        dir = dir.getDirectory(path);
    }

    var lister = dir.createReader();
    var list = [];
    do {
        var entries = lister.readEntries();
        for (var i = 0; i < entries.length; i++) {
            var name = entries[i].name;
            if (entries[i].isDirectory) {
                name += '/';
            }
            list.push(name);
        }
    } while (entries.length > 0)

    return list;
}

// 允许主线程通过发送消息来使用这些工具函数
onmessage = function (e) {
    // 消息是如下形式的对象
    // {function: 'appendToFile', args: ['test', 'testing, testing']}
    // 根据指定的 args 调用指定的函数
    // 再将结果消息发送回去
    var f = self[e.data.function];
    var result = f.apply(null, e.data.args);
    postMessage(result);
};