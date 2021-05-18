'use strict';

/**
 * 向函数传入对象
 * 将一个对象赋值给变量时, 这个变量会包含这个对象的一个引用, 而不是对象本身.
 * 可以把引用想成对象的一个指针.
 * 所以, 调用一个函数并传入要给对象时, 实际上只传递了对象引用 -- 不是对象本身, 而只是它的一个 "指针".
 * 这个引用的副本会传递到形参, 它指向原来的对象.
 */

// 字面量对象: 一次性对象.
/*var taxi = {
    make: 'Webville Motors',
    model: 'Taxi',
    year: 1955,
    color: 'yellow',
    passengers: 4,
    convertible: false,
    mileage: 281341,
    started: false,
    // function
    start: function () {
        this.started = true;
    },
    stop: function () {
        this.started = false;
    },
    // ...

};*/


function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;

    // function
    // 这实际上是 一个匿名函数, 将其赋给属性 this.bark.
    // 在对象中, 方法也是属性,只是将函数赋值给了这种属性.
    this.bark = function () {
        if (this.weight > 25) {
            console.log(this.name + ' says Woof!');
        } else {
            console.log(this.name + ' says Yip!');
        }
    };
}

var fido = new Dog('Fido', 'Mixed', 38);
var fluffy = new Dog('Fluffy', 'Poodle', 30);
var spot = new Dog('Spot', 'Chihuahua', 10);
var dogs = [fido, fluffy, spot];

dogs.forEach(dog => {
    var size = 'small';
    if (dog.weight > 10) {
        size = 'large';
    }
    console.log('Dog: ' + dog.name + ' is a ' + size + ' ' + dog.breed);
    dog.bark();
});

console.log('======================');

console.log(typeof window);
// console.log(document.domain); // document 属性: domain, title, URL.