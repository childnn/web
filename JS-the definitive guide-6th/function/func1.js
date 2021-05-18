/**
 * 可选参数
 * @param o
 * @param a
 * @returns {optional}
 */
function getPropertyNames(o, /* optional */ a) {
    // 如果 a 未定义, 则 使用空数组
    // 注: 使用 || 运算符代替 if 语句的前提是 a 必须预先声明, 否则 a = a || [] 会报引用错误.
    // a 是实参, 相当于 var a, 已经声明.
    a = a || []; // if(a === undefined) a = [];
    for (var prop in o) {
        a.push(prop);
    }
    return a;
}

//
var p = {
    name: 'key',
    sex: 'sex'
};
// 将 p 的属性存储在一个新数组中
var a = getPropertyNames(p);
console.log(a);

// 将 p 的属性追加至数组 a 中
getPropertyNames(p, a);
console.log(a);