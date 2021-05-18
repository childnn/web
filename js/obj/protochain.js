'use strict';

/**
 * 原型链.
 * 对象不仅可以继承一个原型的属性,还可以继承一个原型链.
 *
 *
 * */

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

// 给小狗原型添加属性和方法.
Dog.prototype.species = 'Canine';
Dog.prototype.bark = function () {
    // this 指向方法被调用对象.
    if (this.weight > 25) {
        console.log(this.name + ' say Woof!');
    } else {
        console.log(this.name + ' says Yip!');
    }
};
Dog.prototype.run = function () {
    console.log('Run!');
};
Dog.prototype.wag = function () {
    console.log('Wag!');
};


// 创建 继承小狗原型的对象, 只需结合使用 new 和构造函数 Dog.
// 这里没有给构造函数提供任何实参, 因为我们只需一个继承小狗原型的小狗对象,而不关心其细节.
let aDog = new Dog();

/**
 * 表演犬.
 * 这个构造函数接受各种实参,用于设置小狗的属性(name,breed,weight) 和 表演犬的属性(handler).
 */
function ShowDog(name, breed, weight, handler) {
    /**
     * 重用构造函数.
     * call 是一个内置方法,可对任何函数调用它.
     * Dog.call 调用函数 Dog,将一个用作 this 的对象以及函数 Dog
     * 的所有实参传递给它.
     * this 指向当前的 ShowDog 实例. 这样,构造函数 Dog 将设置当前
     * ShowDog 对象的属性 name,breed,weight.
     */
    Dog.call(this, name, breed, weight);
    // this.name = name;
    // this.breed = breed;
    // this.weight = weight;
    this.handler = handler;
}

// 对原型作任何修改都将影响直接或间接继承该原型的所有实例.
// 注释此行代码,看运行结果.
// 可以创建任意对象字面量,再将其作为原型.
// 这样表演犬将不会从 小狗原型 那里继承任何东西,而是继承你在这个对象字面量中定义的属性和方法.
// 将 ShowDog 的 prototype 设置为一个新的小狗实例.
ShowDog.prototype = aDog; // 或者等号右边直接写 new Dog().

// 注释掉此行代码观察运行结果区别: ShowDog 的 constructor 属性变化.
// 避免 constructor 结果的迷惑性,这里手动设置.
// 即使不这样做,代码也将像预期的那样运行,这只是一种最佳实践.
ShowDog.prototype.constructor = ShowDog; // 获取表演犬原型,将其属性 constructor 显式地设置为构造函数 ShowDog.

// 获取充当表演犬原型的小狗实例,并给它添加新属性和方法.
ShowDog.prototype.league = 'Webville';
ShowDog.prototype.stack = function () {
    console.log('Stack');
};
ShowDog.prototype.bait = function () {
    console.log('Bait');
};
ShowDog.prototype.gait = function (kind) {
    console.log(kind + 'ing');
};
ShowDog.prototype.groom = function () {
    console.log('Groom');
};

// 创建表演犬实例
/*
 创建 ShowDog 实例, 这个实例将从 表演犬原型 那里继承表演犬特有的属性和方法.
 另外,由于表演犬原型是一个小狗实例,这个表演犬也将从 小狗原型 那里继承所有的小狗行为和属性.
* */

var scotty = new ShowDog('Scotty', 'Scottish Terrier', 15, 'Cookie');

scotty.stack();
scotty.bark();
console.log(scotty.league);
console.log(scotty.species);

// instanceof 不仅考虑当前对象的类型,还考虑它继承的所有对象.
var fido = new Dog('Fido', 'Mixed', 38);
if (fido instanceof Dog) {
    console.log('Fido is a Dog');
}
if (fido instanceof ShowDog) {
    console.log('Fido is a ShowDog');
}
if (scotty instanceof Dog) {
    console.log('Scotty is a Dog');
}
if (scotty instanceof ShowDog) {
    console.log('Scotty is a ShowDog');
}
console.log('Fido constructor is ' + fido.constructor);
console.log('Scotty constructor is ' + scotty.constructor);