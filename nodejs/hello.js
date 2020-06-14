/* 安装完 node，配置 web storm -- 类似 Java 配置 jdk，直接 run 即可 */
'use strict';
console.log("hello node.js");

/* 基本数据类型 */
var a = 10;
var b = a;
a++;

console.log(a);
console.log(b);


// 引用数据类型: 堆
var o1 = new Object();
o1.name = "孙悟空";
var o2 = o1;
console.log(o2.name);

o2.name = "猪八戒"; /* 修改对象 */
console.log(o1.name);

o2 = null; /* 修改变量本身 */
console.log(o2);
