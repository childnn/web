let array = new Array(3);
array[0] = 1;
array.push(2); // append
array[2] = 3;
// array[1] = 0;
console.log(array); // 注释上一行: [ 1, <1 empty item>, 3, 2 ]

array.reverse(); // 修改原数组

console.log(array.join('-')); // 拼接字符串

console.log(array.every(x => x % 2 === 0)); // 如果每个元素都满足返回 true, 否则 返回 false.

// 传入多个参数时,数组将这些值作为元素.
let arr = new Array('a', 2, 4);
console.log(arr);