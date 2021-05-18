'use strict';

function counter() {
    var n = 0;

    // 返回含有两个方法的对象
    return {
        count: function () {
            return n++;
        },
        reset: function () {
            n = 0;
        }
    };
}

var c = counter(), d = counter(); // 创建两个计数器
console.log(c.count());
console.log(d.count());

c.reset(); // 两个对象互不影响, 重置 c 并不会重置 d
console.log(c.count());
console.log(d.count());

console.log('======================');

function counter1(n) {
    return {
        // 属性 getter 方法返回并给私有计数器 var 递增 1
        get count() {
            return n++;
        },
        // 属性 setter 不允许 n 递减
        set count(m) {
            if (m >= n) {
                n = m;
            } else {
                throw Error('count can only be set to a larger value');
            }
        }
    };
}

var x = counter1(1000);
console.log(x.count);
console.log(x.count);
x.count = 2000;
console.log(x.count);
x.count = 2000; // error