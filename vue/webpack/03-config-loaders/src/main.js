// commonjs 模块化规范
const math = require("./js/math.js")

console.log(math.add(1, 2));

// es6 模块化规范
import * as es6 from './js/es6'

console.log(es6.name);
es6.f();

// 依赖 css: 把 css 当作模块
require('./css/normal.css');

// 依赖 less
require('./css/special.less');

// 依赖 图片 模块
// require('./img/img.jpg');