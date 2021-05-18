/*
* in: 可以判断属性是否在对象中
* !== undefined: 可能不存在属性, 也可能属性值为 undefined
* */

var o = {};
for (p in o) {
    if (!o.hasOwnProperty(p)) {
        continue; // 跳过继承的属性
    }
    if (p in o) {
        if (typeof o[p] === 'function') {
            continue; // 跳过方法
        }
    }
}