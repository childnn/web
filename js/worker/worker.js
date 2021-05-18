'use strict';

// 接收消息
onmessage = pingPong;


function pingPong(event) {
    if (event.data === 'ping') {
        // 返回消息
        postMessage('pong');
    }

}