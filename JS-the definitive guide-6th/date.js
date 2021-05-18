// 'use strict'

/**
 * toString()
 *  JS 对象到字符串的转换经过的步骤:
 *     1. 如果对象具有 toString() 方法, 则调用这个方法. 如果它返回一个原始值, JS 将这个值
 *        转换为字符串(如果本身不是字符串的话), 并返回这个字符串结果.
 *     2. 如果对象没有 toString() 方法, 或者这个方法并不返回一个原始值, 那么 JS 会调用 valueOf() 方法.
 *        如果存在这个方法, 则 JS 调用它. 如果返回值是原始值, JS 将这个值转换为字符串(如果本身不是字符串的话),
 *        并返回这个字符串结果.
 *     3. 否则, JS 无法从 toString() 或 valueOf() 获得一个原始值, 因此这时它将抛出一个类型错误异常.
 *
 * valueOf()
 *     在对象到数字的转换过程中, JS 做了同样的事, 只是它会首先尝试使用 valueOf() 方法:
 *     1. 如果对象具有 valueOf() 方法, 后者返回一个原始值, 则 JS 将这个原始值转换为数字(如果需要的话)并返回这个数字
 *     2. 否则, 如果对象具有 toString() 方法, 后者返回一个原始值, 则 JS 将其转换并返回.
 *     3. 否则, JS 抛出一个类型错误异常.
 * 对象转换为数字的细节解释了为什么空数组会被转换为数字 0 以及为什么具有单个元素的数组同样会转换成一个数字. 数组继承了默认的
 * valueOf() 方法, 这个方法返回一个对象而不是一个原始值, 因此, 数组到数字的转换则调用 toString() 方法. 空数组转换为
 * 空字符串, 空字符串转换成数字 0. 含有一个元素的数组转换成字符串的结果和这个元素转换字符串的结果一样. 如果数组只包含一个数字元素,
 * 这个数字转换为字符串, 再转换回数字.
 *
 */
let date = new Date(2020, 0, 1);
console.log(date.toString());
console.log(date.valueOf());

console.log(new Boolean(false) == 1); // 对象 false 不是转化为 true？
console.log(new Boolean(true) == 1);
console.log(({x: 1, y: 2}).toString());

function fun() {
    console.log(112);
}

console.log(fun.toString());

console.log([1, 2, 3].toString());

console.log(/\d+/g.toString());

console.log('12'.valueOf());

console.log('================');

let now = new Date();
typeof now + 1;
typeof now - 1;
console.log(now == now.toString());
console.log(now > now - 1);