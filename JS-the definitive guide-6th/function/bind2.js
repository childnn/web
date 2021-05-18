/*
* bind() 方法返回地函数是一个闭包, 在这个闭包的外部函数中声明了 self 和 boundArgs 变量,
* 这两个变量在闭包里用到. 尽管定义闭包的内部函数已经从外部函数中返回,
* 而且调用这个闭包逻辑的时刻要在外部函数返回之后(在闭包中照样可以正确访问这两个变量).
*
* */
if (!Function.prototype.bind) {
    Function.prototype.bind = function (o, /*, args*/) {
        // 将 this 和 arguments 的值保存至变量中
        // 以便在后面嵌套的函数中可以使用它们
        var self = this, boundArgs = arguments;

        // bind() 方法的返回值是一个函数
        return function () {
            // 创建一个实参列表, 将传入 bind() 的第二个及后续的实参都传入这个函数
            var args = [], i;
            for (i = 1; i < boundArgs.length; i++) {
                args.push(boundArgs[i]);
            }
            for (i = 0; i < arguments.length; i++) {
                args.push(arguments[i]);
            }

            // 现在将 self 作为 o 的方法来调用, 传入这些实参
            return self.apply(o, args);
        };
    };
}