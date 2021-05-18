// 将函数返回函数
'use strict';

var passengers = [{name: "Jane Doloop", paid: true, ticket: 'coach'},
    {name: 'Dr. Evel', paid: true, ticket: 'firstclass'},
    {name: 'Sue Property', paid: false, ticket: 'firstclass'},
    {name: 'John Funcall', paid: true, ticket: 'coach'}
];

function createDrinkOrder(passenger) {
    // 创建变量,用于存放返回的函数
    var orderFunction;
    if (passenger.ticket === 'firstclass') {
        orderFunction = function () {
            console.log('Would you like a cocktail or wine?')
        };
    } else {
        orderFunction = function () {
            console.log('Your choice is cola or water.')
        };
    }
    return orderFunction;
}

function serveCustomer(passenger) {
    var getDrinkOrderFunction = createDrinkOrder(passenger);
    // 多次调用: 每当乘客需要点饮料时, 调用 createDrinkOrder 返回的那个函数.
    getDrinkOrderFunction();
    getDrinkOrderFunction();
    getDrinkOrderFunction();
}



function servePassengers(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}

servePassengers(passengers);
