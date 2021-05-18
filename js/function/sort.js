var numbersArray = [60, 50, 62, 58, 54, 54];

// return this: sort 方法是 破坏性的, 因为它就地修改数组本身, 而不是返回一个排序后的新数组.
var sort = numbersArray.sort(); // 默认升序

console.log(numbersArray);
console.log(sort);

console.log('==========================')

var arr = [60, 50, 62, 58, 54, 54];
arr.sort(compareNumbers);

console.log(arr);

function compareNumbers(num1, num2) {
    if (num1 > num2) {
        return 1;
    } else if (num1 === num2) {
        return 0;
    } else {
        return -1;
    }
}

var products = [
    {name: 'Grapefruit', calories: 170, color: 'red', sold: 8200},
    {name: 'Orange', calories: 160, color: 'orange', sold: 12101},
    {name: 'Cola', calories: 210, color: 'caramel', sold: 25412},
    {name: 'Diet Cola', calories: 0, color: 'caramel', sold: 43922},
    {name: 'Lemon', calories: 200, color: 'clear', sold: 14983},
    {name: 'Raspberry', calories: 180, color: 'pink', sold: 9427},
    {name: 'Root Beer', calories: 200, color: 'caramel', sold: 9909},
    {name: 'Water', calories: 0, color: 'clear', sold: 62123}
];

products.sort(compareSold);

console.log(products);

// 函数声明 优先加载, 不需要注重代码的书写顺序.
// 价格升序
function compareSold(colaA, colaB) {
    if (colaA.sold > colaB.sold) {
        return 1;
    } else if (colaA.sold === colaB.sold) {
        return 0;
    } else {
        return -1;
    }
}