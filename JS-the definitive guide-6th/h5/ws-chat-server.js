/*
* 这是运行在 NodeJS 上的服务器端 JS
* 在 HTTP 服务器之上, 它运行一个 WebSocket 服务器, 该服务器使用来自
* https://github.com/miksago/node-websocket-server/ 的第三方 WebSocket 库实现
* 如果得到 '/' 的一个 HTTP 请求, 则返回聊天客户端的 HTML 文件
* 除此之外任何 HTTP 请求都返回 404
* 通过 WebSocket 协议接收到的消息都仅广播给所有激活状态的连接
* */
var http = require('http'); // 使用 Node 的 HTTP 服务器 API
var ws = require('websocket-server'); // 使用第三方 WebSocket 库: todo: 见 D:\read\web

// 启动阶段, 读取聊天客户端的资源文件
var clientui = require('fs').readFileSync('ws-chat-client.html');
// 创建一个 HTTP 服务器
var httpserver = new http.Server();

// 当 HTTP 服务器获得一个新请求时, 运行此函数
httpserver.on('request', function (request, response) {
    // 如果请求 '/', 则返回客户端聊天 UI
    if (request.url === '/') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.writer(clientui);
        response.end();
    } else {
        // 对任何其他的请求返回 404
        response.writeHead(404);
        response.end();
    }
});

// 在 HTTP 服务器上包装一个 WebSocket 服务器
var wsserver = ws.createServer({server: httpserver});

// 当接收到一个新的连接请求的时候, 调用此函数
wsserver.on('connection', function (socket) {
    socket.send('Welcome to the chat room.'); // say hello
    socket.on('message', function (msg) { // 监听来自客户端的消息
        wsserver.broadcast(msg); // 广播给每个人
    });
});

// 在 8000 端口运行服务器. 启动该 WebSocket 服务器的时候也会启动 HTTP服务器
// 连接到 http://localhost:8000/, 并开始使用它
wsserver.listen(8000);

