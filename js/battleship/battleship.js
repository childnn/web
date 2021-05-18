/**
 * model: 存储游戏状态 - 比如 每艘战舰的位置以及那个部位被击中
 * view: 负责更新界面
 * controller: 将各个部分整合起来,用于处理用户输入、实现游戏逻辑并判断游戏是否结束.
 */

var model = {
    boardSize: 7, // 游戏板网格大小
    numShips: 3, // 游戏包含的战舰数
    shipLength: 3, // 每艘战舰占据多少单元格
    shipsSunk: 0, // 已被击沉的战舰数
    // 战舰所处的位置以及被击中的部位: 随机生成
    // 每艘船占 3 个格子: 横向或竖向均可
    // 每艘战舰的任意位置被 hit 就算 hit, 击中没搜战舰的 3 个不同点则为 sunk
    ships: [
        {locations: [0, 0, 0], hits: ["", "", ""]},
        {locations: [0, 0, 0], hits: ["", "", ""]},
        {locations: [0, 0, 0], hits: ["", "", ""]}
    ],

    // original hard-coded values for ship locations
    /*
        ships: [
            { locations: ["06", "16", "26"], hits: ["", "", ""] },
            { locations: ["24", "34", "44"], hits: ["", "", ""] },
            { locations: ["10", "11", "12"], hits: ["", "", ""] }
        ],
    */
    // 处理玩家向战舰开火的方法, 它判断战舰是否被击中
    fire: function (guess) {
        if (this.shipsSunk === this.numShips) {
            view.displayMessage("You sank all my battleships.");
        }
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess);

            // here's an improvement! Check to see if the ship
            // has already been hit, message the user, and return true.
            if (ship.hits[index] === "hit") { // 每艘战舰的 3 个点的任意一个被击中.
                view.displayMessage("Oops, you already hit that location!");
                return true;
            } else if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");

                if (this.isSunk(ship)) {
                    view.displayMessage("You sank my battleship! There remains " + (this.numShips - ++this.shipsSunk) + " ship(s).");
                    // this.shipsSunk++;
                }
                return true;
            } // else: miss.
        }
        view.displayMiss(guess);
        view.displayMessage("You missed.");
        return false;
    },

    isSunk: function (ship) {
        for (var i = 0; i < this.shipLength; i++) {
            // 有任何部位未被击中, 战舰就还未沉没.
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    },

    // random locations
    generateShipLocations: function () {
        var locations;
        for (var i = 0; i < this.numShips; i++) {
            do {
                locations = this.generateShip();
            } while (this.collision(locations)); // 直到生成的战舰与之前的不重叠为止
            this.ships[i].locations = locations;
        }
        console.log("Ships array: ");
        console.log(this.ships);
    },

    // 创建一艘战舰,并指定其在游戏板中的位置.
    // 指定的位置可能与其他战舰重叠,也可能不重叠.
    generateShip: function () {
        var direction = Math.floor(Math.random() * 2);
        var row, col;

        if (direction === 1) { // horizontal
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
        } else { // vertical
            row = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
            col = Math.floor(Math.random() * this.boardSize);
        }

        var newShipLocations = [];
        for (var i = 0; i < this.shipLength; i++) {
            if (direction === 1) {
                newShipLocations.push(row + "" + (col + i));
            } else {
                newShipLocations.push((row + i) + "" + col);
            }
        }
        return newShipLocations;
    },

    // 判断战舰是否重叠.
    collision: function (locations) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            for (var j = 0; j < locations.length; j++) {
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    return true;
                }
            }
        }
        return false;
    }

};

// 向用户展示游戏信息
var view = {
    displayMessage: function (msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },

    // 设置对应的 标签的 class 属性为相应的 CSS 属性
    // 以下两个方法也可以合并,看个人习惯 - displayPlayerGuess
    displayHit: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },

    displayMiss: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }

};

/**
 * 1. 获取并处理玩家的猜测
 * 2. 记录猜测次数
 * 3. 让 model 根据当前猜测更新自己
 * 4. 判断游戏是否结束
 */
var controller = {
    // total guesses.
    guesses: 0,

    processGuess: function (guess) {
        var location = parseGuess(guess);
        if (location) {
            this.guesses++;
            var hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");
            }
        }
    }
}

// 将用户输入的字母转化为数字
// helper function to parse a guess from the user
function parseGuess(guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

    if (guess === null || guess.length !== 2) {
        alert("Oops, please enter a letter and a number on the board.");
    } else {
        var firstChar = guess.charAt(0);
        var row = alphabet.indexOf(firstChar);
        var column = guess.charAt(1);

        if (isNaN(row) || isNaN(column)) {
            alert("Oops, that isn't on the board.");
        } else if (row < 0 || row >= model.boardSize ||
            column < 0 || column >= model.boardSize) {
            alert("Oops, that's off the board!");
        } else {
            return row + column; // 实际是字符串
        }
    }
    return null;
}


// event handlers
function handleFireButton() {
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value.toUpperCase();

    controller.processGuess(guess);

    guessInput.value = "";
}

// 回车键 触发按钮同样的功能.
function handleKeyPress(e) {
    var fireButton = document.getElementById("fireButton");

    // in IE9 and earlier, the event object doesn't get passed
    // to the event handler correctly, so we use window.event instead.
    e = e || window.event;

    if (e.keyCode === 13) {
        // 如果单击 回车键, 执行 按钮单击事件.
        fireButton.click();
        return false; // 返回 false, 让表单不做其他任何事情(如 提交).
    }
}


// init - called when the page has completed loading

window.onload = init;

function init() {
    // Fire! button onclick handler
    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;

    // handle "return" key press
    var guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress;

    // place the ships on the game board
    model.generateShipLocations();
}





