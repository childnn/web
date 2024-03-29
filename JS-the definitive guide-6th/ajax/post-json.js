'use strict';

function postJSON(url, data, callback) {
    var request = new XMLHttpRequest();
    request.open('POST', url);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && callback) {
            callback(request);
        }
    };
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(data));
}