// NaN != NaN
// 对一个元素做 NaN 检测, 需要使用 isNaN() 方法.
console.log(NaN != NaN);
console.log(0 / 0);
console.log('food' * 10);
console.log(Math.sqrt(-9));

console.log(isNaN(NaN));
console.log(typeof NaN);

console.log(10 / 0); // Infinity

console.log(typeof Infinity);
console.log(Infinity - Infinity); // NaN
console.log(typeof null);

console.log(1 == true);
console.log('1' == true); // '1' -> 1, true -> 1
console.log(2 == true);
console.log(0 == false);
console.log(0 == ''); // true: '' -> 0
console.log(true == 'true'); // 1 == NaN

// 关于类型转换
console.log(1 + '2');
console.log('10' - 5);
console.log(1 - true);
console.log(true + ' love');

console.log(3 + Number('4'));
console.log(Number(true));
console.log(Number('lover'));