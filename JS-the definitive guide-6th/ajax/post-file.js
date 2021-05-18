'use strict';
// 查找有 data-uploadto 属性的全部 <input type='file'> 元素
// 并注册 onchange 事件处理程序
// 这样任何选择的文件都会自动通过 POST 方法发送到指定的 'uploadto' URL
// 服务器的响应是忽略的
whenReady(function () { // 当文档准备就绪时运行
    var elts = document.getElementsByTagName('input'); // 所有 input 元素
    for (var i = 0; i < elts.length; i++) {
        var input = elts[i];
        if (input.type !== 'file') {
            continue; // 跳过所有非文件上传元素
        }
        var url = input.getAttribute('data-uploadto'); // 获取上传 URL
        if (!url) {
            continue; // 跳过没有 URL 的元素
        }

        input.addEventListener('change', function () { // 当用户选择文件时
            var file = this.files[0]; // 假设单个文件选择
            if (!file) {
                return; // 如果没有文件, 不做任何事情
            }
            var xhr = new XMLHttpRequest(); // 创建新请求
            xhr.open('POST', url); // 向这个 URL 发送 POST 请求
            xhr.send(file); // 把文件作为主体发送

        }, false);
    }
});
