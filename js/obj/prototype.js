/**
 * JS 没有传统的面向对象模型,即从类创建对象的模型.
 * 事实上,JS 根本就没有类. 在 JS 中,对象从其他对象那里继承行为,
 * 称为 原型式继承(prototypal inheritance)或基于原型的继承.
 * ---
 * 使用 new 运算符创建对象,在代码层面,实现了重用,但在运行阶段,每个小狗对象
 * 好像都获得了函数的副本. 但是,一般而言,我们不希望每次使用构造函数实例化一个对象时,
 * 都创建一组新的方法. 这样会影响应用程序的性能,占用计算机资源.
 * ---
 * JS 对象模型基于 原型概念,在这种模型中,可通过扩展其他对象(即原型对象)来创建对象.
 * ---
 * JS 对象可以从其他对象那里继承属性和行为. 更具体地说, JS 使用原型式继承, 其中其行为被继承
 * 的对象称为 原型. 这旨在继承既有属性(包括方法),同时在新对象中添加属性.
 * 对象继承另一个对象后,便可访问其所有方法和属性.
 * 如果给原型添加一个方法,所有的实例都立即从原型中继承这个方法并自动获得这种新行为.
 * 包括添加方法前已创建的实例.
 *
 */
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

var fido = new Dog('Fido', 'Mixed', 38);
var fluffy = new Dog('Fluffy', 'Poodle', 30);
var spot = new Dog('Spot', 'Chihuahua', 10);

var dogs = [fido, fluffy, spot];
dogs.forEach(dog => {
    dog.bark();
    dog.run();
    dog.wag();
});

// 在创建实例后,再添加原型方法.
// 小狗实例创建时, 从原型那里继承了属性 sitting, 该属性的值默认为 false.
// 但调用方法 sit 后, 就给小狗实例添加了属性 sitting 的值, 导致在小狗实例中创建了属性 sitting.
// 这让我们给所有小狗对象指定默认值,并在需要时对各个小狗进行定制.
Dog.prototype.sitting = false;
Dog.prototype.sit = function () {
    if (this.sitting) {
        console.log(this.name + ' is already sitting');
    } else {
        this.sitting = true;
        console.log(this.name + ' is now sitting');
    }
};

// 首次获取 sitting 值,是从原型中获取,但接下来将 sitting 设置为 true 时,是在对象实例而不是原型中进行的.
// 在对象实例中添加这个属性后,接下来每次获取 sitting 的值时,都将从对象实例中获取, 因为他重写了原型中的这个属性.
// fido.sit();
// fido.sit();
// spot.sit();

/**
 * 对于一个属性, 如何判断使用的属性包含在实例还是原型中?
 * 可以使用每个对象都有的方法 hasOwnProperty.
 * 如果属性是在对象实例中定义的,这个方法将返回 true.
 * 如果属性不是在对象实例中定义的,但能够访问,就可以认为它肯定是在原型中定义的.
 */
// 在原型中定义了 species 属性. 而且 spot 和 fido 都没有重写这个属性.
// 因此, 此处返回都为 false.
console.log(spot.hasOwnProperty('species'));
console.log(fido.hasOwnProperty('species'));

// 注释掉上面的 sit 方法调用处.
// 第一次结果为 false, sitting 属性为 原型中定义.
console.log(spot.hasOwnProperty('sitting'));
spot.sit(); // 调用方法后
// 此处结果为 true, 因为 spot 现在有自己的 sitting 属性了.
console.log(spot.hasOwnProperty('sitting'));

// 对 fido 调用 hasOwnProperty 时, 结果为 false.
// 因为 fido 没有 sitting 属性. 这意味着 fido 使用的 sitting 属性
// 是在原型中定义的, 而 fido 从原型那里继承了这个属性.
console.log(fido.hasOwnProperty('sitting'));

