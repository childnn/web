// apply 相当于 java 中的 invoke


// es5
function f (x, y, z) {
  // ...
  console.log("%s, %s, %s", x, y, z);
}

var args = [1, 2, 3];

f.apply(null, args);

// es6
function f2 (x, y, z) {
  // ...
  console.log("%s, %s, %s", x, y, z);
}

// 扩展运算符: 展开数组
var arr = [1, 2, 3];
f2(...arr);

//----------------------------------
//----------------------------------

// es5
console.log(Math.max.apply(null, arr));

// es6
console.log(Math.max(...arr));


//----------------------------------
//----------------------------------

console.log(arr)
console.log(args)

var a1 = [1, 2, 3];
var a2 = [6, 7, 8];

// es5
Array.prototype.push.apply(a1, a2)
console.log(a1);

// es6
// returns the new length of the array.
var length = arr.push(...args);

console.log(arr);


//----------------------------
//----------------------------
//----------------------------

// es5
var newVar = new (Date.bind.apply(Date, [null, 2021, 1, 17]));
console.log(newVar);

// es6
var date = new Date(...[2022, 1, 17]);
console.log(date);

//----------------------------
//----------------------------
//----------------------------

// 引用
const source = [1, 2];
const dest = source;

dest[0] = 3;
console.log(source);

// clone es5
const source1 = [1, 2]
const dest1 = source1.concat();

dest1[0] = 3;
console.log(source1);

// clone es6
const source2 = [1, 2]
// 1.
const dest2 = [...source2];
console.log(dest2);
// 2.
const [...dest3] = source2;
console.log(dest2);
