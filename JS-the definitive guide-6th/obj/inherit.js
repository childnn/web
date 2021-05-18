/**
 * inherit() 返回一个继承自原型对象 p 的属性的新对象
 * 这里使用 ECMAScript 5 中的 Obejct.create() 函数(如果存在的话)
 * 如果不存在 Object.create(), 则退化使用其他方法
 * -----
 * inherit() 函数的其中一个用途就是防止库函数无意间修改那些不受你控制的对象.
 * 不是将对象直接作为参数传入函数,而是将它的继承对象传入函数. 当函数读取继承对象的属性时,
 * 实际上读取的是继承来的值. 如果给继承对象的属性赋值,则这些属性只会影响这个继承对象自身,而不是原始对象.
 */
function inherit(p) {
    // p 是一个对象, 但不能是 null
    if (p == null) {
        throw TypeError();
    }
    // 如果存在方法 create, 直接使用.
    if (Object.create) {
        return Object.create(p);
    }
    // 否则进一步检测
    var t = typeof p;
    if (t !== 'object' && t !== 'function') {
        throw TypeError();
    }
    // 定义空构造
    function Obj() {
    }
    // 将原型属性设置为 p
    Obj.prototype = p;
    // 使用 f() 创建 p 的继承对象.
    return new Obj();
}

var book = {};

var len = book && book.subtitle;
console.log(len);