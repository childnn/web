'use strict';

/**
 * 对象字面量
 * 当对象属性过多时,可以修改构造函数的参数为对象. 间接获取对象的值.
 */
var cadiParams = {
    make: 'GM',
    model: 'Cadillac',
    year: 1955,
    color: 'tan',
    passengers: 5,
    convertible: false,
    mileage: 12892
};

let cadi = new Car(cadiParams);
cadi.drive();

function Car(params) {
    this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.passengers = params.passengers;
    this.convertible = params.convertible;
    this.mileage = params.mileage;
    this.started = false;

    this.start = function () {
        this.started = true;
    };

    this.stop = function () {
        this.started = false;
    };

    this.drive = function () {
        if (this.started) {
            console.log('Zoom zoom!');
        } else {
            console.log('You need to start the engine first.')
        }
    };
}

console.log(cadi);

console.log(typeof cadi);
/**
 * 创建对象时, new 运算符在幕后存储了一些信息, 让你随时都能确定对象是由
 * 哪个构造函数创建的.
 */
console.log(cadi instanceof Car);

// 额外添加的 属性/方法 只有当前对象有, 新的对象没有
// 需要给对象现价新属性,只需给这个新属性赋值即可.
cadi.owner = 'Jack';
cadi.run = function() {
    console.log('Running....');
}
console.log(cadi);


// 也可以删除属性
delete cadi.make;
delete cadi.drive;
console.log(cadi);

let car = new Car(cadiParams);
// car.run(); // TypeError: car.run is not a function

new Date()