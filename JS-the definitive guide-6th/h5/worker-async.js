/*
* 在 Worker 线程中进行同步请求.
* onmessage 事件处理程序接受一个待获取的 URL 数组. 它通过同步
* XMLHttpRequest API 来进行获取, 然后, 将获取到的文本内容以
* 字符串的形式, 组成一个数组, 传递会主线程.
* 或者, 如果在 HTTP 请求过程中失败了, 则会抛出错误, 并会将其传递给 Worker 对象的 onerror 处理程序.
* */
// 此文件会通过一个新的 Worker() 来载入, 因此, 它是运行在独立的线程中的
// 可以放心使用同步的 XMLHttpRequest API
// 消息是 URL 数组形式. 以字符串形式同步获取每个 URL 指定的内容
// 并将这些字符串数组传递回去.
onmessage = function (e) {
    var urls = e.data; // 输入: 要获取的 URL
    var contents = []; // 输出: URL 指定的内容

    for (var i = 0; i < urls.length; i++) {
        var url = urls[i] // 每个 URL
        var xhr = new XMLHttpRequest(); // 开始一个 HTTP 请求
        xhr.open('GET', url, false); // false 表示同步请求
        xhr.send(); // 阻塞, 一直到响应完成
        if (xhr.status !== 200) { // 如果请求失败则抛出错误
            throw Error(xhr.status + ' ' + xhr.statusText + ': ' + url);
        }
        contents.push(xhr.responseText); // 否则, 存储通过 URL 获取得到的内容
    }
    // 最后, 将这些 URL 内容以数组形式传递回主线程
    postMessage(contents);
};