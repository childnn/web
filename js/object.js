'use strict';
/**
 * 基本类型: 数字, 字符串, 布尔
 * 逗号分隔属性,
 * 同一个对象,属性名不可相同,
 * 最后一个属性一般不加逗号, 但是加了好像也不会报错(在旧版浏览器可能会报错)(在 Java 中, 数组最后一个元素也可以加逗号)
 * 可以先创建一个空的对象,再动态添加属性.
 * 变量并不实际存储对象, 变量存储指向对象的引用
 * 引用就像指针, 是对象的存储地址
 * 换句话说,变量并不存储对象本身, 而是存储类似指针的东西. 在 JS 中, 我们并不知道引用变量存储的到底是什么,
 * 但我们知道, 不管它存储的是什么, 它肯定指向相应的对象.
 * 当我们使用句点表示法时, JS 解释器将负责根据引用获取对象并访问其属性.
 * ---
 * 基本类型变量表示的是实际值, 而对象变量表示一种 获取对象的途径.
 * ---
 * 调用函数并向它传递一个对象时, 传递的是 对象引用, 而不是对象本身.
 * 根据按值传递的语义, 传递给形参的是该引用的副本, 而原来的引用依然是指向原始对象的指针.
 * 在函数中修改对象的属性,修改的将是原始对象的属性. 因此, 函数结束时, 在函数中对对象所做的修改都依然有效.
 */
var chevy = {
    make: 'Chevy',
    model: 'Bel Air',
    year: 1957,
    color: 'red',
    passengers: 2,
    convertible: false,
    mileage: 1021,
    'on sale': true, // 如果属性名包含空格等特殊非变量字符,需要用引号
    started: false,
    fuel: 0,
    // 在方法中访问对象属性,需要使用 this 关键字, 否则被视为局部变量
    // this 是在调用方法而不是定义对象时设置的.
    start: function () {
        if (this.fuel <= 0) {
            console.log('Out of fuel...');
            this.started = false;
        } else {
            console.log('Started...');
            this.started = true;
        }
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            if (this.fuel > 0) {
                console.log(this.make + ' ' + this.model + ' goes zoom zoom!');
                this.fuel -= 1;
            } else {
                console.log('Uh oh, out of fuel.');
                this.stop();
            }
        } else {
            console.log('You need to start the engine.');
        }
    },
    addFuel: function (amount) {
        this.fuel += amount;
    }

};

var color = chevy.color;
console.log(color);
chevy.color = 'blue';
console.log(color);
console.log(chevy);

// 删除属性使用 delete 关键字.
// 删除成功,返回 true, 否则 false.
// 即便删除的属性不存在,也会返回 true
// 当对象属于浏览器保护而受到保护时会返回 false
let b = delete chevy.color;
console.log(b);
console.log(chevy.color);

let b1 = delete chevy.aaa; // 删除不存在的属性
console.log(b1);

if (!chevy.aaa) {
    console.log('访问不存在的属性: aaa');
}
console.log(undefined == false); // undefined != false
console.log(undefined != false); // undefined != false
console.log(!undefined === true); // !undefined === true

console.log('======================');

function changeColor(car) {
    car.color = 'yellow';
}

changeColor(chevy);

console.log(chevy);

// 对象方法调用
if (chevy.started) {
    chevy.drive();
} else {
    chevy.start();
    chevy.drive();
}

// 增加对象方法
chevy.engageTurbo = function () {
    // ...
    this.started = false; // this 也可以在新增方法中使用.
    console.log('新增方法');
    // console.log(this.toString());
};
// 访问属性的方式: 类数组
console.log(chevy['color']);
console.log(chevy['co' + 'lor']);

console.log('======================================');

// 遍历对象的属性,方法
for (var prop in chevy) {
    console.log(prop + ': ' + chevy[prop]);
}