// import
import {flag, f, f1, name, Person} from './a.js'


console.log(flag);
f();
f1();
console.log(name);

var p = new Person('jack', 18);
p.run();



// 导入 a.js 中的 export default, 可以随意命名
// 对应的就是那个唯一的 默认 export
import xyz from './a.js'

console.log(xyz); // a.js 中的 addr 变量