// 战舰位置: 0-6 共七个位置, 战舰处于其中连续的 3 个位置
// 最左边的战舰只能处于 0-4 的位置, 才能保证右边不超过 6.
var location1 = Math.floor(Math.random() * 5); // 随机数(0.x-4.x), 向下取整
var location2 = location1 + 1;
var location3 = location2 + 1;
// 用户猜测值
var guess;
var hits = 0; // 击中数
var guesses = 0; // 猜测次数

// 最后,设置变量 isSunk 的初始值为 false. 用户击沉战舰后, 我们将把这个变量设置为 true.
var isSunk = false;

// 一旦战舰被击沉,就会停止循环.
while (!isSunk) {
    // 每次循环,让用户猜测. 使用 prompt 函数, 返回用户输入(字符串形式).
    // 如果用户点击 "取消",会返回 null.
    guess = prompt('Ready, aim, fire!(enter a number 0-6):');
    if (guess == null) {
        break;
    }
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    } else {
        guesses++; // 猜测次数加一.
        if (guess == location1 || guess == location2 || guess == location3) {
            alert('HIT!');
            hits++; // 击中
            // 击中 3 次, 结束游戏.
            if (hits === 3) {
                isSunk = true;
                alert('You sank my battleship!');
            }
        } else {
            alert('MISS');
        }
    }
}
if (isSunk) {
    // 展示统计信息.
    var stats = 'You took ' + guesses + ' guesses to sink the battleship, ' +
        'which means your shooting accuracy was ' + (3 / guesses);
    alert(stats);
}
