'use strict';

function classOf(o) {
    // console.log(o.toString());
    if (o === null) {
        return 'Null';
    }
    if (o === undefined) {
        return 'Undefined';
    }
    console.log(Object.prototype.toString.call(o));
    // call -- invoke
    return Object.prototype.toString.call(o).slice(8, -1); // 倒数第 1 位。
}

console.log('[object '.length);

var a = 1;
console.log(classOf(a));
console.log(classOf({}));
console.log(classOf([]));
console.log(classOf(/./));
console.log(classOf(new Date()));
// console.log(classOf(window));

function f() {

}

console.log(classOf(new f()));
