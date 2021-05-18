/* 无名装置 */
// 可以直接在 node 中运行.
function clunk(times) {
    var num = times;
    while (num > 0) {
        display("clunk");
        num--;
    }
}

function thingamajig(size) {
    var facky = 1;
    // clunkCounter = 0;
    if (size == 0) {
        display("clank");
    } else if (size == 1) {
        display('thunk');
    } else {
        while (size > 1) {
            facky *= size;
            size--;
        }
        clunk(facky);
    }
}
function display(output) {
    console.log(output);
    clunkCounter++;
}

var clunkCounter = 0;
// 变换输入的参数: 0, 1, 2, 3, 4, 5 查看结果
thingamajig(4);
console.log(clunkCounter);