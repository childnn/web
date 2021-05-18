'use strict';
var data = [1, 2, 3, 4, 5];

var sum = 0;
data.forEach(value => sum += value);
console.log(sum);

// 参数一: 数组元素
// 参数二: 元素索引
// 参数三: 数组本身 this
data.forEach((val, i, a) => a[i] = val + 1);
console.log(data);

// map 返回新数组, 不改变原数组
console.log(data.map(value => value * value));
console.log(data);

// filter, every, some
// 在空数组上调用 every(), 返回 true, 调用 some(), 返回 false

var re = [1, 2, 3, 4, 5];
// 参数二: 函数初始值(可选)
console.log(re.reduce((x, y) => x + y, 0)); // 求和
console.log(re.reduce((x, y) => x * y, 1)); // 求积
console.log(re.reduce((x, y) => x > y ? x : y)); // 求最大值
// reduceRight: 从右往左执行