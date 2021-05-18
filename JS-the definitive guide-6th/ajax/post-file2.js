'use strict';

/**
 * 当 HTML 表单同时包含文件上传元素和其他元素时, 浏览器不能使用普通的表单编码而必须使用称为
 * "multipart/form-data" 的特殊 Content-Type 来用 POST 方法提交表单.
 * 这种编码包括使用长 "边界" 字符串把请求主体分离成多个部分. 对于文本数据, 手动创建
 * "multipart/form-data" 请求主体是可能的, 但很复杂.
 */
function postFormData(url, data, callback) {
    if (typeof FormData === 'undefined') {
        throw new Error('FormData is not implemented');
    }
    var request = new XMLHttpRequest(); // 新 HTTP 请求
    request.open('POST', url); // 指定 URL 发送 POST 请求
    request.onreadystatechange = function () {
        if (request.readyState === 4 && callback) {
            callback(request);
        }
    };
    var formData = new FormData();
    for (var name in data) {
        if (!data.hasOwnProperty(name)) {
            continue; // 跳过继承的属性
        }
        var value = data[name];
        if (typeof value === 'function') {
            continue; // 跳过方法
        }
        // 每个属性变成请求的一部分
        // 允许 File 对象
        formData.append(name, value); // 作为一部分添加 name/value 对
    }
    // 在 multipart/form-data 请求主体中发送 name/value 对
    // 每对都是请求的一个部分, 注意, 当传入 FormData 对象时,
    // send() 会自动设置 Content-Type 头
    request.send(formData);
}