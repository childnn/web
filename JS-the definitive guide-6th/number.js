'use strict';

/*
* parseInt() 和 parseFloat() 会跳过任意数量的前导空格, 尽可能解析更多数值字符, 并忽略后面的内容
* 如果第一个非空格字符是非法的数字字面量, 将最终返回 NaN
* */
console.log(parseInt('3 blind mice'));
console.log(parseFloat(' 3.14 meters'));
console.log(parseInt('-12.34'));
console.log(parseInt('0xFF'));
console.log(parseInt('0xff'));
console.log(parseInt('-0xFF'));
console.log(parseFloat('.1'));
console.log(parseInt('0.1'));
console.log(parseInt('.1')); // NaN
console.log(parseFloat('$72.47')); //NaN
console.log('//--------------------//')
// 参数二: 表示进制数--数字转换基数
console.log(parseInt('11', 2));
console.log(parseInt('ff', 16));
console.log(parseInt('zz', 36));
console.log(parseInt('077', 8));
console.log(parseInt('077', 10));