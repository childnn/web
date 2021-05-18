经纬度: 度分秒 或者 小数值表示
   西经 和 南纬 都用 负数表示
   // 将 度分秒 转换为 小数.
   function degreesToDecimal(degrees, minutes, seconds) {
        return degrees + (minutes / 60.0) + (seconds / 3600.0);
   }

AJAX: XMLHttpRequest - HTTP
    HTTP: 是一种无状态的协议, 由客户端请求和服务端响应组成. HTTP 实际上是相对比较特殊的网络协议.
        大多数基于因特网/局域网 的网络连接通常都包含长连接和基于 TCP 套接字的双向消息交换. 让不信任
        的客户端脚本访问底层的 TCP 套接字是不安全的, 但是 WebSocket API 定义了一种安全方案:
        它允许客户端代码在客户端和支持 WebSocket 协议的服务器端创建双向的套接字类型的连接.
WebSocket:
  WebSocket 协议允许 Web 服务器能够容易地同时处理同一端口上的 HTTP 连接和 WebSocket 连接.
  js-code:
    var socket = new WebSocket('ws://ws.example.com:1234/resource');
  WebSocket() 构造函数的参数是一个 URL, 该 URL 使用 ws:// 协议(或者类似 https:// 用于安全链接的 wss:// 协议).
  该 URL 指定要链接的主机, 还有可能指定端口(WebSocket 使用和 HTTP 以及 HTTPS 一样的默认端口)和路径或者资源.
  创建套接字之后, 通常需要在上面注册一个事件处理程序. (参见 /JS-the definitive guide-6th/h5/WebSocket.js)
  WebSocket 完全是双向的, 并且一旦建立了 WebSocket 连接, 客户端和服务器端都可以在任何时候互相传送消息, 与此同时,
  这种通信机制采用的不是请求和响应的形式. 每个基于 WebSocket 的服务都要定义自己的'子协议', 用于在客户端和服务器端传输数据.
  慢慢的, 这些 '子协议' 也可能发生演变, 可能最终要求客户端和服务端需要支持多个版本的子协议.
  但是, WebSocket 协议包含一种协商机制, 用于选择客户端和服务端都能理解的子协议. 可以传递一个字符串数组给 WebSocket() 构造函数.
  服务器端会将该数组作为客户端能理解的子协议列表. 然后, 它会选择其中一个使用, 并将它传递给客户端. 一旦连接建立之后, 客户端就能够通过
  套接字的 protocol 属性检测当前在使用的是哪种子协议.


argument: 实参
parameter: 形参

sqrt: Square Root Calculations

FTP: File Transfer Protocol
SFTP: Secure File Transfer Protocol
URL: Uniform Resource Locators
 eg: http://www.starbuzzcoffee.com/index.html
     协议(http://, file:///)+网站名+从根文件夹到资源的绝对路径

HTML 的 DNA 由描述性标记构成, 允许你描述构成页面的一组嵌套元素.
JS 由纯算法性的基因物质构成, 主要用来描述计算.
通过 DOM, JS 与 HTML 页面通信.

mosaic: 初代浏览器(马赛克). 图片, 列表(镶嵌), 表单
HTML: Hypertext Markup Language. structural 结构 content 内容
CSS: Cascading Style Sheets. presentational 显示
JS: JavaScript. event 行为
动态类型, 一等函数, 闭包
JS: pass-by-value. 把每个实参的值复制给形参.
没有返回值的函数返回 undefined.
变量作用域(scope): 全局(global),局部(local).
使用未声明的变量时(没有使用 关键字 var 等声明),它将自动被视为全局变量,即便你在函数中首次使用它.
---
JS 灰色地带:
 1. null 与 undefined: 在应该提供一个对象,但无法创建或找到时, 将提供 null, typeof 运算得到 null 为 object 类型(特殊的对象: '非对象');
                       在变量未初始化,对象没有指定属性或数组没有指定元素时,将返回 undefined.
                       undefined 表示一个变量未赋值, null 表示这个变量有一个空值.
                       null 是关键字, undefined 不是关键字(是变量, ECMAScript 5 中只读).
                       undefined 是预定义的全局变量, 它的值就是 '未定义'. typeof 运算得到 'undefined'.
 2. NaN: 类型(typeof)是 number, NaN != NaN.
    对于 NaN 与它自己不相等的解释: NaN 指的是无法表示的数字,但并非无法表示的数字都相同.

关于 ==: 相等
    1. 如果两个值的类型相同,则直接比较
    2. 如果类型不同,则尝试将它们转换为相同类型: 如果其中一个类型为 number, 则将另一个类型转换为 number(如果可能的话)
       2.1. 字符串和数字: 将字符串转换为数字(转换失败则为 NaN)
       2.2. 布尔值和其他类型: 将布尔值转换为数字(true 为 1, false 为 0)
       2.3. null 和 undefined: null == undefined
关于 ===: 严格相等(等同运算符,恒等运算符)
    if and only if 两个值类型和值都相同时,它们才是严格相等.
!!! JS 中的假值(false)五个: undefined, null, 0(-0), 空串, NaN
除了上述 5(6)个, 以及 false 本身, 其他所有值(包括对象, new Boolean(false)是一个对象而不是原始值, 会转换为 true)都会转换成 true.
关于全等的详细: ===
  1. 如果两个值类型不同, 则不相等
  2. 如果两个值都是 null 或者都是 undefined, 则不相等
  3. 如果两个值都是布尔值 true 或者都是 false, 则相等
  4. 如果其中一个值是 NaN,或两个都是 NaN, 则不等. NaN 与其他任何值都不等包括它本身.
     通过 x!==x 来判断 x 是否为 NaN, 只有在 x 为 NaN 的时候, 此表达式才为 true.
  5. 如果两个值为数字且相等,则相等. 如果一个值为 0,另一个为 -0, 则相等.
  6. 如果两个值为字符串,且所含的对应位上的 16位数完全相等, 则相等. 如果长度或内容不同,则不等.
     两个字符串可能含义完全一样且所显示出的字符也一样,但具有不同编码的 16 位值. JS 并不进行
     Unicode 进行标准化的转换, 因此像这样的字符串通过 "===" 和 "==" 运算符的比较结果也不等.
  7. 如果两个引用值指向同一个对象,数组或函数,则它们是相等的. 如果指向不同的对象, 则它们是不等的,
     尽管两个对象具有完全一样的属性.

instanceof 运行原理:
   instanceof 基于 原型链(prototype chain), 原型链作为 JS 的继承机制.
   在计算 o instanceof f 时, JS 首先计算 f.prototype, 然后在原型链中查找 o, 如果找到, 那么
   o 是 f(或者 f 的父类)的一个实例, 表达式返回 true,否则返回 false.

短路: short circuiting. "&&", "||"


ECMAScript: European Computer Manufactures Association. 欧洲计算机制造商协会

DOM: document object model
BOM: browser object model
JSON: JS Object Notation

值: value. 计算机程序的运行需要对 value 进行操作(如 'Hello World')
变量: variable. 值的符号, 可以通过名称来获得对值的引用.
类型: type. 能够标识并操作的值的类型称为数据类型
JS 数据类型两类:
    primitive type: 数字, 字符串, 布尔值. 特殊的原始值 null, undefined
    object type: 除了 primitive type 之外的.
JS 中, 只有 null/undefined 是无法拥有方法的值.
escape sequence: 转义字符,转义序列,逃逸符
regular expression: 正则表达式
---
全局属性: undefined, Infinity, NaN
全局函数: isNaN(), parseInt(), eval() // eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码
构造函数: Date(), RegExp(), String(), Object(), Array()
全局对象: Math, JSON
---------------------------------------------------------------------------------------
JS 类型转换
   值                 字符串           数字        布尔值         对象
undefined        'undefined'         NaN         false      throws TypeError
null                'null'           0           false      throws TypeError
true                'true'           1                      new Boolean(true)
false               'false'          0                      new Boolean(false)
''(空串)                              0           false      new String('')
'1.2'(非空,数字)                      1.2          true       new String('1.2')
'one'(非空,非数字)                     NaN          true      new String('one')
0                     '0'                         false     new Number(0)
-0                    '0'                         false     new Number(-0)
NaN                   'NaN'                       false     new Number(NaN)
Infinity              'Infinity'                  true      new Number(Infinity)
-Infinity              '-Infinity'                true      new Number(-Infinity)
1(无穷大, 非零)          '1'                        true      new Number(1)
{}(任意对象)                                        true
[](任意数组)             ''            0            true
[9](1个数字元素)         '9'           9             true
['a'](其他数组)          join()        NaN          true
function(){}(任意函数)                 NaN          true
---------------------------------------------------------------------------------------
Node:
    event emitter: 事件触发器
XSS: Cross-site scripting 跨站脚本


-----
html: HyperText Markup Language
元素分类:
    block: 块元素. 特立独行
    inline: 内联元素. 随波逐流
void 元素: 自闭和标签(无值元素)
    <br/>, <img/>
表格单元格之间的间距: border-spacing: 10px 30px;  // 水平间距 10px, 垂直间距 30px.
将相邻的表格边框合并: border-collapse: collapse;  或者 border-spacing: 0px;
head
title
body
strong: 加粗
b: bold 加粗
em: emphasis 斜体(强调)
i: italic 倾斜
p: paragraph 段落
&amp;: ampersand & 与符号
&trade;: ™
hr: horizontal rule
blockquote: 
&nbsp;: no-break space
br: line break 换行
abbr: abbreviation 缩写
sub: subscript 下标
sup: superscript 上标
bid: bidirectional 双向
code: 代码
var: 数学变量
ol: ordered list
li: list item
ul: unordered list
tr: table row
td: table data
rowspan: 跨行
colspan: 跨列
cellpadding: 内边距
cellspacing: 外边距
href: hypertext reference
a-href: anchor hyperlink reference
div: division

----------------------------------------------------------
css: cascading style sheets
margin: 外边距
padding: 内边距
pseudo[ˈsjuːdəʊ]-classes: 伪类

----------------------------------------------------------
AJAX 获取元素：Asynchronous JavaScript and XML
$("[name='name值']"), $(".class"), $("#id"),
$("body") -- 指定元素(标签)
$("select[name="k"] option:selected")  -- name 属性为 k 的被选中的 select 标签,
        --- 实际是对应的 option 元素, 可以通过 val() 获取 option-value 值, 或者 text() 获取 option 文本信息
----------------------------------------------------------
