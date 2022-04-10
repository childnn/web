function* g () {
  console.log("generator");
}

var nevers = g();
setTimeout(function () {
  nevers.next();
}, 2000);


function* g2 () {
  yield 1
  yield 'hello'
  return 'finish';
}


var g1 = g2();
var next = g1.next();
console.log(next);
var next1 = g1.next();
console.log(next1);
var next2 = g1.next();
console.log(next2)

var next3 = g1.next();
console.log(next3)
