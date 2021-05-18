'use strict';
// 在 XML 中编码什么东西,在哪儿和半径, 然后向指定的 URL 发送 POST 请求
// 当接收到响应时, 调用回调函数
function postQuery(url, what, where, radius, callback) {
    var request = new XMLHttpRequest();
    request.open('POST', url); // 对指定的 URL 发送 POST 请求
    request.onreadystatechange = function () { // 简单的事件处理程序
        if (request.readyState === 4 && callback) {
            callback(request);
        }
        // Create an XML document with root element <query>
        var doc = document.implementation.createDocument('', 'query', null);
        var query = doc.documentElement; // <query> 元素
        var find = doc.createElement('find'); // 创建 <find> 元素
        query.append(find); // 添加 find 元素到 query 中
        find.setAttribute('zipcode', where);
        find.setAttribute('radius', radius);
        find.appendChild(doc.createTextNode(what)); // 设置 find 内容

        // 向服务器发送 XML 编码的数据
        // 注意将自动设置 Content-Type 头: 'ext/plain;charset=UTF-8'
        request.send(doc);
    };

}