// run in node.
'use strict';

var arr = [1, '2', false];
arr.push('push element');
arr.forEach(function (v) {
    console.log(v);
});

console.log(arr[-1]); // undefined


let array = new Array(3);
array[0] = 'a';
array[2] = 'c';
array.forEach(a => console.log(a));

console.log('============================');
array[1] = 'b';
array[3] = 'd';

array.forEach(a => console.log(a));

// 删除数组中的元素, 数组长度同步变化.
const startIndex = 1;
const delCount = 1;
array.splice(startIndex, delCount);
console.log(array);

// 删除数组的元素, 但是数组长度不变.
array[1] = null;
console.log(array);