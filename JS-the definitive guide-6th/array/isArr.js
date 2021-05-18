'use strict';

var isArray = Function.isArray || function (o) {
    return typeof o === 'object' && Object.prototype.toString.call(o) === '[object Array]';
};

var a = [];
console.log(isArray(a));