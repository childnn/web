'use strict';

/**
 * 正则修饰符
 * i: ignore case 执行不区分大小写的匹配
 * g: global 执行一个全局匹配. 即找到所有的匹配, 而不是在找到第一个之后就停止
 * m: multiline 多行匹配模式, ^ 匹配一行的开头和字符串的开头, $ 匹配行的结束和字符串的结束
 */
// search(): 参数是正则表达式, 返回第一个与之匹配的子串的起始位置, 如果找不到匹配的子串, 返回 -1
// 如果 search() 的参数不是正则表达式, 则首先会通过 RegExp 构造函数将它转换成正则, search() 方法不支持全局检索,
// 因为它忽略正则参数中的修饰符 g
console.log('JavaScript'.search(/script/i));

// replace() 方法用以执行检索与替换操作. 其中第一个参数是正则, 第二个参数是要进行替换的字符串
// 这个方法会对调用它的字符串进行检索, 使用指定的模式来匹配. 如果正则中设置了修饰符 g, 那么源字符串中所有
// 与模式匹配的子串都将换成第二个参数指定的字符串; 如果不带修饰符 g, 则只替换所匹配的第一个子串.
// 如果 replace() 第一个参数是字符串而不是正则, 则 replace() 将直接搜索这个字符串, 而不是像 search() 一样
// 首先通过 RegExp() 将它转换成正则.
// 以下代码表示: 不区分大小写, 将目标文本中所有 javascript 替换为 JavaScript
console.log('javascriptjavascriptjavascriptjavascript'.replace(/javascript/gi, 'JavaScript'));

//---- replace-2
// 一段引用文本起始于引号, 结束于引号
// 中间的内容区域不能包含引号
// 用中文半角引号替换英文引号, 同时要保持引号之间的内容(存储在 $1 中: 占位符)没有被修改
console.log('我"是"谁'.replace(/"([^"]*)"/g, '“$1”'));

// match(): 参数正则, 返回匹配的数组. 如果正则设置了修饰符 g, 则返回数组包含字符串中的所有匹配结果
console.log('1 plus 2 equals 3'.match(/\d+/g));
console.log('1 plus 2 equals 3'.match(/\d+/));
console.log('1 plus 2 equals 3'.match(/^\d+$/));
// 如果这个正则没有设置修饰符 g, match() 就不会进行全局检索, 它只检索第一个匹配. 但即使 match() 执行的不是全局检索,
// 它也返回一个数组. 在此情况下, 数组的第一个元素就是匹配的字符串, 余下的元素则是正则中用圆括号括起来的子表达式.
// 因此, 如果 match() 返回一个数组 a, 那么 a[0] 存放的是完整的匹配, a[1] 存放的则是与第一个用圆括号括起来的表达式
// 相匹配的子串, 以此类推.
var url = /(\w+):\/\/([\w.]+)\/(\S*)/;
var text = 'Visit my blog at http://www.example.com/~david';
var result = text.match(url);
console.log(result);

// split(): 可以接受正则或非正则参数
console.log('1,2,3,4,5'.split(','));
// 指定分隔符, 允许两边可以留有任意多的空白符
console.log('1, 2, 3, 4, 5'.split(/\s*,\s*/));