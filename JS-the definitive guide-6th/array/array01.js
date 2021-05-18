'use strict';

// 与书中有出入： JS 权威指南 edition 6.
var a1 = [, 1,]; // 省略的值不存在, 而不是 undefined
var a2 = new Array(3);

// 查找指定索引是否存在
console.log(0 in a1);
console.log(0 in a2);


var arr = [1, 2, 4];
arr.length = 5;
console.log(arr);
// Object.defineProperty(arr, 'length', {writable: false});
// arr.length = 3; // error: read only
// console.log(arr);

// delete 不会改变数组长度.
// delete arr[0];
// console.log(arr);

let number = arr.pop(); // not support if read only
console.log(arr);
arr.push(4, 5);
console.log(arr);

console.log('==============');

// 数组长度只计算一次
for (var i = 0, len = arr.length; i < len; i++) {
    // 有效数据才输出: 跳过 null, undefined, 不存在元素
    if (!arr[i]) {
        continue;
    }
    console.log(arr[i]);
}

console.log('====================');

// for-in 可以循环枚举的属性名.
for (var key in arr) {
    console.log(key + ': ' + arr[key]);
}

// arr.splice()