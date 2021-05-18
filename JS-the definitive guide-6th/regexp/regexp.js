'use strict';

var pattern = /Java/g;

var text = 'JavaScript is more fun than Java!';
var result;
while ((result = pattern.exec(text)) != null) {
    console.log('Matched "' + result[0] + '" at position ' + result.index +
        '; next search begins at ' + pattern.lastIndex);
}

// 当 exec() 方法返回结果不是 null 时, test() 返回 true.
var patt = /java/i;
console.log(patt.test('JavaScript'));