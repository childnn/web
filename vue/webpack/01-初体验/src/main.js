// commonjs 模块化规范
// 引入模块 math.js
// 浏览器无法识别 commonjs 语法, 直接引入 main.js 无法实现功能
const math = require("./math.js")

console.log(math.add(1, 2));

// es6 模块化规范
// 引入 es6.js
import * as es6 from './es6'
// import {name, f} from './es6'

console.log(es6.name);
es6.f();
