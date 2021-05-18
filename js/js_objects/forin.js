'use strict';

const fido = {
    name: 'Fido',
    weight: 40,
    breed: 'Mixed',
    loves: ['walks', 'fetching balls']
};

for (let prop in fido) {
    console.log(prop + ': ' + fido[prop]);
}
// 删除属性
let b = delete fido.name;
console.log(b);
let b1 = delete fido.age;
console.log(b1); // 删除成功就返回 true, 哪怕属性不存在.
console.log(fido.name);

// 增加属性
fido.age = 13;

