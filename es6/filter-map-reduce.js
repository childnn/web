const nums = [10, 20, 30, 111, 33, 3333];

var filter = nums.filter((n) => n > 100);
console.log(filter);

// var numbers = nums.map(n => n * 2);
var numbers = nums.map((value, index, array) => value * 2);
console.log(numbers);

// 参数一: 上一次执行的结果
var number = nums.reduce(((previousValue, currentValue, currentIndex, array) =>
  previousValue + currentValue), 0); // 数字初始化值为 0: 可不传
console.log(number);

//-------
var total = nums.filter(function (n) {
  return n < 100;
}).map(function (n) {
  return n * 2;
}).reduce(function (pre, n) {
  return pre + n;
}, 0);

console.log(total);

//-------
var t = nums.filter(n => n < 100).map(n => n * 2).reduce(((pre, n) => pre + n), 0);
console.log(t);