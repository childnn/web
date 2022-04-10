const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];

// ES5 的合并数组
var arr4 = arr1.concat(arr2, arr3);
console.log(arr1);
console.log(arr4);

// [ 'a', 'b', 'c', 'd', 'e' ]

// ES6 的合并数组
var concatArr = [...arr1, ...arr2, ...arr3];
console.log(concatArr);
// [ 'a', 'b', 'c', 'd', 'e' ]

// 以上都是浅拷贝

// 如果数组元素为对象
// 则只是引用, 改变对象属性, 多个数组会同步改变
const a1 = [{foo: 1}]
const a2 = [{bar: 2}]

const a3 = a1.concat(a2);
const a4 = [...a1, ...a2];

console.log(a3[0] === a1[0]);
console.log(a4[0] === a1[0]);

