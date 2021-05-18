'use strict';

// reviver: 可选，一个转换结果的函数， 将为对象的每个成员调用此函数。
const text = {
    "a": 1,
    "b": 2,
    "c": {
        "d": 4,
        "e": {
            "f": 6
        }
    }
}
JSON.parse(JSON.stringify(text), function (k, v) {
    console.log(k + ": " + JSON.stringify(v)); // 输出当前属性，最后一个为 ""
    // console.log(v)
    return v;       // 返回修改的值
});