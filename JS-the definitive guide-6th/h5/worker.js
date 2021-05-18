// JS 的基本特征之一就是单线程。 比如 浏览器无法同时运行两个事件处理程序, 也无法在一个事件处理程序运行时
// 触发一个定时器. 之所以设计成单线程的理论就是, JS 函数必须不能运行太长时间, 否则会导致循环事件, Web 浏览器无法
// 对用户输入做出响应. 这也是为什么 Ajax 的 API 都是异步的, 以及为什么客户端 JS 不能使用一个简单的异步 load() 函数或者
// require() 函数来加载 JS 库.
// 在 Web Workers 标准中(WebWorkers 起初作为 H5 标准的一部分, 但是后来独立成一份相近的标准. http://dev.w3.org/html5/workers/;
// http://whatwg.org/ww), 定义了解决客户端 JS 无法多线程的问题. 其中定义的 "Worker" 是指执行代码的并行线程.
// 不过, Web Workers 处在一个自包含的执行环境中, 无法访问 Window 对象和 Document 对象, 和主线程之间的通信也只能通过
// 异步消息传递机制来实现. 这就意味着, 并行地修改 DOM 是不可能地, 不过, 它提供了一种使用异步 API 的方式, 同时允许书写需要长时间
// 运行的函数而不会带来循环事件和导致浏览器崩溃的问题. 创建一个新的 Worker 并不像打开一个新的浏览器窗口那样属于重量级的操作,
// 不过, Worker 本身也不是轻量级的线程, 因此创建一些新的 Worker 去处理次要的操作是不划算的. 一个复杂的 Web 应用一般包含几十个 Worker.
// 和任何线程 API 一样, Web Workers 标准包含两部分, 第一部分是 Worker 对象, 该对象是暴露给创建该线程的线程的. 第二部分是 WorkerGlobalScope,
// 这是一个用来表示新创建的 Worker 的全局对象, 也是 Worker 线程内部使用的对象.
/*
* Worker 对象
* 要创建一个新的 Worker, 只需使用 Worker() 构造函数, 并指定在 Worker 中运行的 JS 脚本的 URL 传递给该构造函数即可
*    var loader = new Worker("utils/loader.js");
* 如果 URL 采用的是相对路径, 那么是以包含调用 Worker() 构造函数脚本的文档的 URL 为参照的. 而如果指定的 URL 采用的是绝对路径,
* 那么必须和包含该脚本的文档是同源的(协议,主机名,端口).
* 一旦获取到 Worker 对象后, 就可以通过 postMessage() 方法来传递参数了. 传递给 postMessage() 方法的值会复制, 最终的副本会通过
* message 事件传递给 Worker.
*    loader.postMessage("file.txt");
*
* 参见:
*    js\worker\manager.js
* */
/*
* Worker 线程从上到下同步运行它们的代码(以及所有导入的脚本), 然后进入一个异步阶段, 来对事件以及计时器做出响应.
* 如果 Worker 注册了 onmessage 事件处理程序, 只要 message 事件有可能触发, 那么它将永远不会退出.
* 但是, 如果 Worker 没有监听消息, 那么一直到所有任务相关的回调函数都调用以及再也没有挂起的任务(比如下载和计时器)
* 之后, 它就会退出. 一旦所有注册的回调函数都已经调用之后, Worker 也不再创建新任务了, 这个时候线程就可以安全退出了.
* 想象这样一个 Worker, 它通过 XMLHttpRequest 下载一个文件, 但是没有任何 onmessage 事件处理程序. 如果该下载任务的
* onload 处理程序开始一个新的下载任务或者通过 setTimeout() 方法注册一个超时的程序, 那么线程有了新的任务并保持运行状态;
* 否则, 线程就会退出.
*
* */

// 创建一个 WebWorker 线程处理图片
// 异步地将图片内容替换成动态模糊版本
// 以这种方式使用: <img src="testimage.jpg" onclick="smear(this)"/>
function smear(img) {
    // 创建一个和图片尺寸相同的屏幕外 <canvas>
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    // 将图片复制到画布中, 随后提取其像素
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    var pixels = context.getImageData(0, 0, img.width, img.height);

    // 将像素信息传递给 Worker 线程
    var worker = new Worker('SmearWorker.js'); // 创建 Worker 线程
    worker.postMessage(pixels); // 复制和传递像素信息

    // 注册事件处理程序来获取 Worker 的响应
    worker.onmessage = function (e) {
        // Worker 线程不能输出日志, 也不能和文档进行交互, 因此想要调试, 就要采用
        // 更加巧妙的方法. 如果 Worker 抛出错误, 那么主线程在 Worker 对象上会
        // 接收到一个 error 事件. 但是, 通常情况下, 需要一种方式能够让 Worker 将调试
        // 消息输出到浏览器的 web 控制台中. 其中最直接的方式就是通过修改和 Worker 间
        // 的消息传递协议, 来让 Worker 将调试消息传递出来.
        if (typeof e.data === 'string') {
            console.log('Worker: ' + e.data);
            return;
        }

        var smeared_pixels = e.data; // 从 Worker 获取的像素信息
        context.putImageData(smeared_pixels, 0, 0); // 将它们复制到画布中
        img.src = canvas.toDataURL(); // 添加到 img 中
        worker.terminate(); // 关闭 worker 线程
        canvas.width = canvas.height = 0; // 将周围像素清空

    };

}