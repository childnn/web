'use strict';

window.onload = function () {
    let worker = new Worker('worker.js');
    // 不能发送函数.
    worker.postMessage('ping');
    worker.postMessage([1, 2, 3, 4, 5]);
    worker.postMessage({
        'message': 'ping',
        'count': 5
    });
    worker.onmessage = function (event) {
        document.getElementById('output').innerHTML = 'Worker says ' + event.data;
        let worker = event.target;
    };

    worker.onerror = function (error) {
        document.getElementById('output').innerHTML = 'There was an error in ' +
            error.filename + ' at line number ' + error.lineno + ': ' + error.message;
    };

    // worker.terminate();

};