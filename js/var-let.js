'use strict';

/**
 * ES: ECMAScript. European Computer Manufactures Association Scrip. JS 的一个标准.
 * var 函数作用域
 * let 块级作用域
 *  let 关键字可以将变量绑定到所在的任意作用域中（通常是 { .. } 内部）。
 *      换句话说，let为其声明的变量隐式地了所在的块作用域。
    就是 for循环还有一个特别之处，就是循环语句部分是一个父作用域，而循环体内部是一个单独的子作用域。
 ---
 *   let 和 var 的第二点不同是，在变量声明之前就访问变量的话，会直接提示 ReferenceError，而不像 var 那样使用默认值 undefined:
     var 存在变量提升，而 let，const（后面会提及）声明的变量却不存在变量提升，所以用 let 定义的变量一定要在声明后再使用，否则会报错。
    ES6明确规定，如果区块中存在let命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。
   凡是在声明之前就使用这些变量，就会报错。所以在代码块内，使用let命令声明变量之前，该变量都是不可用的。
   这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。
 ---
    let 不允许重复声明变量
    var 没有此限制
 ---
 const
    ES6还引入了cons，const 和 let 的作用域是一致的，不同的是 const 变量一旦被赋值，就不能再改变了，
    但是这并不意味着使用 const 声明的变量本身不可变，只是说它不可被再次赋值了，而且const 声明的变量必须经过初始化。
 */
// for-loop, for 循环里是父级作用域, 循环体内是另一个
for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
}

for (let i = 0; i < 3; i++) {
    // var i = 'abc'; // SyntaxError: Identifier 'i' has already been declared
    console.log(i);
}

for (var i = 0; i < 3; i++) {
    var i = 'abc';
    console.log(i);
}

// var 变量可以先使用, 再声明.
console.log(x);
var x = 123;

// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// let y = 234;
