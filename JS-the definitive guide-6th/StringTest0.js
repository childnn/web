// 'use strict';

/**
 * 解释: 第二行代码创建一个临时字符串对象, 并给其 len 属性赋值 4, 随即销毁这个对象.
 * 第三行通过原始的(没有被修改过)字符串创建一个新字符串对象, 尝试读取其 len 属性, 这个属性自然不存在,
 * 表达式求值结果为 undefined.
 * 这段代码说明, 在读取字符串、数字和布尔值的属性值(或方法)的时候, 表现的像对象一样.
 * 如果你试图给其属性赋值, 则会忽略这个操作: 修改只是发生在临时对象身上, 而这个临时对象并未继续保留下来.
 * 存取字符串、数字或布尔值的属性时创建的临时对象称作 包装对象， 它只是偶尔用来区分字符串值和字符串对象、
 * 数字和数值对象以及布尔值和布尔对象. 通常, 包装对象只是被看作是一种实现细节, 而不用特别关注.
 * 字符串, 数字, 布尔值的属性都是只读的, 并且不可给它们定义新属性.
 */
let x = 'test'; // 创建字符串
x.len = 4; // 给它设置一个属性: strict 模式下, 报错 TypeError: Cannot create property 'len' on string 'test'
console.log(x.len); // 非严格模式: undefined

let s = 'test', n = 1, b = true;
let S = new String(s);
let N = new Number(n);
let B = new Boolean(b);

console.log(s == S); // true
console.log(s === S); // false


