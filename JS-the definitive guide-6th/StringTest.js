'use strict';

let s = 'Hello, World';

s.charAt(0); // => 'H': the first char
s.charAt(s.length - 1); // => 'd': the last char
s.substring(1, 4); // => 'ell': 第 2-4 个字符
s.slice(1, 4); // => 'ell': 同上
console.log(s.slice(-3)); // => 'rld': 最后三个字符
s.indexOf('l'); // => 2: the index of the character 'l' where its first appearance
console.log(s.lastIndexOf('l')); // => 10: 字符 l 最后一个出现的位置
console.log(s.indexOf('l', 3)); // => 3: 在位置 3 及之后首次出现字符 l 的位置
console.log(s.split(',')); // => 分割字符串
s.replace('H', 'h'); // =>: 全文字符替换
s.toUpperCase(); // => 转大写字母
// 在 ECMAScript 5 中, 字符串可以当作只读数组. 除了使用 charAt() 方法, 也可以使用方括号来访问字符串中的单个字符
let e0 = s[0];
console.log(s[s.length - 1]);