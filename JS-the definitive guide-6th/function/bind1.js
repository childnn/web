var sum = function (x, y) {
    return x + y;
};
// 创建一个类似 sum 的新函数, 但 this 的值绑定到 null
// 并且第一个参数绑定到1, 这个新的函数期望只传入一个实参
var succ = sum.bind(null, 1);
console.log(succ(2)); // x 绑定到 1, 并传入 2 作为实参 y

function f(y, z) {
    return this.x + y + z; // 另一个做累加计算的函数
}

var g = f.bind({x: 1}, 2); // 绑定 this 和 y
console.log(g(3)); // this.x 绑定到 1, y 绑定到 2, z 绑定到 3