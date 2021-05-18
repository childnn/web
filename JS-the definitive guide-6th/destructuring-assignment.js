'use strict';

// 解构赋值
let [x, y] = [1, 2]; // 等价于 let x = 1, y = 2
[x, y] = [x + 1, y + 1]; // 等价于 x = x + 1, y = y + 1
[x, y] = [y, x]; // 交换两个变量的只
console.log([x, y]);