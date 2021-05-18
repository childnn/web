// 'use strict';

/*
* || 逻辑或运算符: 常用来从一组备选表达式中选出第一个真值表达式
* */
function copy(o, p) {
    p = p || {};
    console.log(p);
}

copy({1: 2});
copy({1: 2}, {"k": "v"});