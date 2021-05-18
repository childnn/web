// commonjs 模块化规范
const math = require("./math.js")

console.log(math.add(1, 2));

// es6 模块化规范
import * as es6 from './es6'

console.log(es6.name);
es6.f();
