// 从主线程获取 ImageData 对象, 对其进行处理并将它传递回去
onmessage = function (e) {
    // postMessage 方法是指返回主线程
    postMessage(smear(e.data));
};

// 将 ImageData 中的像素信息向右涂抹, 产生动态模糊效果
// 对于大图片, 此方法会进行大量的计算
// 如果它用在主线程中的话, 很有可能导致无法响应 UI 操作的问题
function smear(pixels) {
    var data = pixels.data,
        width = pixels.width,
        height = pixels.height;
    var n = 10, m = n - 1; // 设置 n 倍大, 用于更多的涂抹
    for (var row = 0; row < height; row++) { // 每一行
        var i = row * width * 4 + 4; // 第二个像素偏移
        for (var col = 1; col < width; col++, i += 4) { // 每一列
            data[i] = (data[i] + data[i - 4] * m) / n; // 红色像素分量
            data[i + 1] = (data[i + 1] + data[i - 3] * m) / n; // 绿色
            data[i + 2] = (data[i + 2] + data[i - 2] * m) / n; // 蓝色
            data[i + 3] = (data[i + 3] + data[i - 1] * m) / n; // Alpha 分量
        }
    }
    return pixels;
}