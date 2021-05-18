'use strict';
function fun(echo) {
    console.log(echo);
}

fun("hello");

function boo(aFunction) {
    aFunction("boo");
}

boo(fun);

console.log(fun);

fun(boo);

var moreFun = fun;

moreFun("Hello again!");

function echoMaker() {
    return fun;
}

var bigFun = echoMaker();

bigFun("Is there an echo?");
