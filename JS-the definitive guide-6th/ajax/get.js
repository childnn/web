'use strict';

/**
 * XMLHttpRequest 的 readyState 值
 * 常量                           值           含义
 * UNSET                        0            open() 尚未调用
 * OPENED                       1            open() 已调用
 * HEADERS_RECEIVED             2           接收到头信息
 * LOADING                      3           接收到响应主体
 * DONE                         4           响应完成
 * ---
 *  responseText 属性只能用于文本, 不能妥善处理二进制响应.
 *  假设你将下载 XML 文件, 而你计划把它当成纯文本对待, 可以使用 setOverrideMimeType() 方法,
 *  让 XMLHttpRequest 知道它不需要把文件解析成 XML 文档.
 *  // 不要把响应作为 XML 文档处理
 *  request.overrideMimeType('text/plain;charset=utf-8');
 *
 * @param url
 * @param callback
 */
function get(url, callback) {
    var request = new XMLHttpRequest(); // 创建新请求

    // 默认异步: 同步响应可以将 open 的三个参数设置为 false
    // 同步时, send() 会一直阻塞直到请求完成, 这种情况下不需要使用事件处理程序
    request.open("GET", url); // 指定待获取的 URL
    request.onreadystatechange = function () { // 定义事件监听器
        // 如果请求完成且成功
        if (request.readyState === 4 /*XMLHttpRequest.DONE*/ && request.status === 200) {
            // 获得响应的类型
            var type = request.getResponseHeader("Content-Type");
            // 检查类型
            if (type.indexOf(".xml") !== -1 && request.responseXML) {
                callback(request.responseXML); // Document 对象响应
            } else if (type === 'application/json') {
                callback(JSON.parse(request.responseText)); // JSON 响应
            } else {
                callback(request.responseText); // 字符串响应
            }
        }
    };
    // get 请求, 无请求体
    request.send(null); // 立即发送请求
}

// 发起同步的 HTTP-GET 请求以获得指定 URL 的内容
// 返回响应文本, 或如果请求不成功或响应不是文本就报错
function getTextSync(url) {
    var request = new XMLHttpRequest(); // 创建新请求
    request.open("GET", url, false); // 传递 false 实现同步
    request.send(null); // 立即发送请求

    // 如果请求不是 200 OK, 就报错
    if (request.status !== 200) {
        throw new Error(request.statusText);
    }

    // 如果类型错误, 报错
    var type = request.getResponseHeader('Content-Type');
    if (!type.match(/^text/)) {
        throw new Error('Expected textual response; got: ' + type);
    }
    return request.responseText;
}