'use strict';
//   /^HTML/ : 匹配以 HTML 开始的字符串
//   /[1-9][0-9]/ : 匹配一个非零数字, 后面是任意个数字
//  /\bjavascript\b/i : 匹配单词 'javascript', 忽略大小写

let text = 'testing: 1, 2, 3';
const pattern = /\d+/g; // 匹配包含一个或多个数字的实例
const pattern1 = /^\d+$/g; // 匹配一个或多个数字的实例: 必须纯数字

console.log(pattern1.test('123123'));
console.log(pattern1.test(text));
console.log(pattern.test(text)); // => true

console.log(text.search(pattern)); // => 9: 首次匹配成功的位置
console.log(text.match(pattern)); // => [ '1', '2', '3' ]: 所有匹配组成的数组

console.log(text.replace(pattern, '#')); // => 'testing: #, #, #'

console.log(text.split(/\D+/)); // => [ '', '1', '2', '3' ]: 用非数字字符截取字符串
