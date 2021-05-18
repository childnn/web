'use strict';


var o = {x: 1, y: 2, z: 3};
var a = [], i = 0;

// 赋值数组
for (a[i++] in o)
    /* empty */
    ;
console.log(a);

// 数组是特殊的对象: 索引是 key, 数组元素是 value.
for (var index in a) {
    console.log(index);
}