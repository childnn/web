'use strict';
/**
 * null 与 undefined
 *  在应该提供一个对象,但无法创建或找到时, 将提供 null;
 *  在变量未初始化,对象没有指定属性或数组没有指定元素时,将返回 undefined.
 */
let sub = 'Just a string';

var probe = typeof sub;
console.log(probe);

let t1 = typeof {};
console.log(t1);

let t2 = typeof [];
console.log(t2);

var t3 = typeof true;
console.log(t3);

console.log(typeof x);

