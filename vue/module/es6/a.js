var flag = true;

function f() {
  console.log('module a 的 f()');
}

// export
// 方式一
export {
  flag,
  f
}

// 方式二
export var name = '小明';
export function f1() {
  console.log('a.js.f1()');
}

// es6 的对象: class 关键字
export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  };
  run() {
    console.log(name + ' is running...');
  };
}

// 导入者自己命名, 而不是使用被导入模块定义的属性名
// export, 默认导出, 一个模块有且只能有一个
var addr = 'a address';
export default addr;