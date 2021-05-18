// 减函数作为值传递给函数
'use strict';

function processCheck(arr, checker) {
    for (var i = 0; i < arr.length; i++) {
        if (checker(arr[i])) {
            console.log(arr[i]);
        }
    }
}

var arr = [-1, 0, 2, 3, 9, 100, 1000];

function notZero(num) {
    return num === 0;
}

processCheck(arr, notZero);

console.log('=============');

function greaterThanHundred(num) {
    return num > 100;
}

processCheck(arr, greaterThanHundred);

// .....