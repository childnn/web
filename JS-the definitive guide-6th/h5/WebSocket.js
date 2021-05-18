// 必须在 Web-H5 中运行

var socket = new WebSocket("ws://localhost:8080/test");

socket.onopen = function (e) {
    console.log('Socket 已连接')
};

socket.onclose = function (e) {
    console.log('Socket 已关闭');
};

socket.onerror = function (e) {
    console.log('出错了');
};

socket.onmessage = function (e) {
    console.log(e.data); // 服务器发送一条消息
};

// 通过套接字发送数据给服务器
socket.send('Hello, server!');