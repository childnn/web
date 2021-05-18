'use strict';

/**
 * 当用户提交表单时, 表单中的数据(每个表单元素的 name=value)编码到一个字符串中并随请求发送.
 * 默认情况下, HTML 表单通过 POST 方法发送给服务器, 而编码后的表单数据则用做请求主体.
 * 对表单数据使用的编码方案相对简单: 对每个表单元素的 name/value 执行普通的 URL 编码(使用十六进制转义码替换特殊字符),
 * 使用 等号 把编码后的 name/value 分开, 并使用 '&' 符号分开 name/value 对.
 * 表单数据编码格式有一个正式的 MIME 类型:
 * application/x-www-form-urlencoded
 * 当使用 POST 方法提交这种顺序的表单数据时, 必须设置 'Content-Type' 请求头为这个值.
 *
 */
function encodeFormData(data) {
    if (!data) {
        return '';
    }
    var pairs = []; // 保存 name=value 对
    for (var name in data) {
        if (!data.hasOwnProperty(name)) { // 跳过继承属性
            continue;
        }
        if (typeof data[name] === 'function') {
            continue;
        } // 跳过方法
        var value = data[name].toString(); // 把值转化成字符串
        name = encodeURIComponent(name.replace('%20', "+")); // 编码 name
        value = encodeURIComponent(value.replace('%20', "+")); // 编码 value
        pairs.push(name + "=" + value); // 存储 name=value 对
    }
    return pairs.join('&'); // 返回使用 '&' 连接的 name/value 对
}

function postData(url, data, callback) {
    var request = new XMLHttpRequest();
    request.open('POST', url); // 对指定 URL 发生 POST 请求
    request.onreadystatechange = function () {
        if (request.readyState === 4 && callback) { // 当响应完成, 调用回调函数
            callback(request);
        }
    };
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(encodeFormData(data)); // 发送表单编码的数据
}

function getData(url, data, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url + "?" + encodeFormData(data));
    request.onreadystatechange = function () {
        if (request.readyState === 4 && callback) {
            callback(request);
        }
    };
    request.send(null);
}