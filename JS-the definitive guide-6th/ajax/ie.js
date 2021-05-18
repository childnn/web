// IE5, IE6 中模拟 XMLHttpRequest() 构造函数
if (window.XMLHttpRequest === undefined) {
    window.XMLHttpRequest = function () {
        try {
            // 如果可用, 则使用 ActiveX 对象的最新版本
            return new ActiveXObject('Msxml2.XMLHTTP.6.0');
        } catch (e1) {
            try {
                // 否则, 回退较旧版本
                return new ActiveXObject('Msml2.XMLHTP.3.0');
            } catch (e2) {
                // 否则, 抛错
                throw new Error('XMLHttpRequest is not supported');
            }
        }
    };
}