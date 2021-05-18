'use strict';

/**
 * 每个函数都有一个名为 arguments 的对象可供使用. 形参列表中没有这个对象.
 * 但是每当函数被调用时,都可以通过变量 arguments 来使用它.
 * 虽然 arguments 看起来像数组,但它其实并不是数组,而是一个对象.
 * 它包含属性 length, 可以迭代并使用括号表示法来访问其中的实参,但它和数组的类似行仅此而已.
 */
function printArgs() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

printArgs('One', 2, 1 + 2, 'four');

// 在一个函数中同时使用形参和对象 arguments.
function emote(kind) {
    if (kind === 'silence') {
        console.log('Player sits in silence');
    } else if (kind === 'says') {
        console.log('Player says: "' + arguments[1] + "'");
    }
}

emote('silence');
emote('says', 'Stand back!');