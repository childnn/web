'use strict';

// join 不改变元素组: 默认分隔符位逗号
var a = [1, 2, 3];
console.log(a.join()); // If omitted, the array elements are separated with a comma.
console.log(a.join(' '));
console.log(a.join(''));
console.log(a);


var b = new Array(10);
console.log(b.join('-'));

// reverse: 改变原数组
console.log(a.reverse());
// console.log(a.reverse().join());
console.log(a);

console.log('sort----------------------------------');

// sort: 改变原数组
console.log(a.sort());
console.log(a);

var an = ['ant', 'Bug', 'cat', 'Dog'];
console.log(an.sort());
console.log(an);
// 升序, 不区分大小写
console.log(an.sort((a, b) => {
    let a1 = a.toUpperCase();
    let b1 = b.toUpperCase();
    if (a1 > b1) {
        return 1;
    }
    if (a1 < b1) {
        return -1;
    }
    return 0;
}));

console.log('concat--------------');


// concat: 不改变元素组
var con = [1, 2, 3];
console.log(con.concat(4, 5));
console.log(con);
console.log(con.concat([4, 5]));
console.log(con.concat([4, 5], [6, 7]));
console.log(con.concat(4, [5, [6, 7]]));

console.log('slice----------------------');

// slice: 不改变元素组
var sl = [1, 2, 3, 4, 5];
// 参数一: 起始索引
// 参数二: 结束索引(不含), 负数表示倒数第 n 个. 不指定参数二则表示到结尾
console.log(sl.slice(0, 3));
console.log(sl);
console.log(sl.slice(3)); // 索引 3 到末尾
console.log(sl.slice(1, -1)); // 索引 1 到倒数第一个(不含)
console.log(sl.slice(-3, -1));
console.log(sl.slice(-3, -2));

console.log('splice-----------');

// splice: 插入/删除/替换
// 会改变源数组
// Removes elements from an array and, if necessary, inserts new elements in their place,
// returning the deleted elements.
var sp = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(sp.splice(4));
console.log(sp);
console.log(sp.splice(1, 2));
console.log(sp);
console.log(sp.splice(1, 1));
console.log(sp);

var sp1 = [1, 2, 3, 4, 5];
// items Elements to insert into the array in place of the deleted elements.
console.log(sp1.splice(2, 0, 'a', 'b'));
console.log(sp1);
console.log(sp1.splice(2, 2, [1, 2], 3));
console.log(sp1);


// pop/push: 替换原始数组
// pop: 删除尾部元素,并返回
// push: 尾部添加元素, 返回新数组长度
// unshift/shift: 数组头部插入/删除元素
