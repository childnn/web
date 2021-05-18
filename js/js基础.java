/**
 * shadow
 * 2019/3/15 9:15
 * 网页三剑客: HTML, css, js
 * 这三门语言必须基于 浏览器 使用.
 * javaScript: 可运行在浏览器上的一门语言,无需编译,浏览器直接就能执行.
 * 作用: 给页面添加动态效果
 * js 的组成部分: 三部分
 * ECMA script : 所有javaScript 核心语法 (if,for,函数,运算符)
 * BOM: Browser Object Model 浏览器对象模型 js 把浏览器划分成多个对象,这些对象可以用来操作 浏览器, 统称 BOM
 * DOM: Document Object Model 文档对象模型, js 把整个 html 文档划分成多个对象,用来操作 HTML 标签
 * js 引入方式:
 * 内部方式: head 标签内
 * 外部方式: 外部文件,内部引入
 * js 小细节:
 * 1. js 语法: 可以不写分号,建议写分号
 * 2. js 注释: 同 java (在 script 标签内)
 * html 注释 : <!-- -->
 * css 注释 : 杠星星杠
 **/
/*
 * 1. ECMA script 语法:
 *      定义变量: 弱类型, 不强调定义时的数据类型
 *          var: 可以赋值任意类型 数据
 *      数据类型:
 *          1. 原始类型: (5种)
 *               number: int,double...
 *               string : "" 和 ''
 *               boolean: true,false
 *               object: null 值
 *               undefined: 未定义类型
 *          2. 引用类型: js 内置对象
 *              eg: array, date
 *      运算符:
 *          算数,关系,逻辑,赋值,三目
 *          与 java 的区别:
 *            算数:
 *              除法 /: 会取小数
 *            赋值:
 *              /= : 会取小数
 *            比较:
 *              === : 恒等于/全等于, 值及数据类型
 *              !== : 不全等,
 *            三目: 三元
 *      流程控制 if, for:
 *           特殊:
 *              if 判断:
 *                  任意 非空字符串,就为 true
 *                  0 为 false, 非零 为 true,
 *              for: 定义变量用 var
 *      定义函数:
 *          function 方法名(参数) {
 *              return ... ;
 *          }
 *          没有 overload, 同名函数 以后面定义的为准
 *          js 函数参数可以任意书写多个, 以函数的实际形参个数为准
 *          调用函数传递实参可以是任意类型
 *       变量作用域:
 *              区别: 如果函数中的变量定义 没有使用 var, 则该变量 自动提升为全局变量
 *    js 内置对象
 *         1) Array:
 *              创建: 1. var arr = new Array(元素列表);
 *                    2.  var arr = new Array(长度);
 *                    3.  var arr = new Array();
 *                    4.  var arr = [元素列表];
 *              特点: 长度可变,数据随意(没有IOBE)
 *              方法/属性: length, join(), push() -- 添加到尾部
 *          2) Date:
 *              创建: var date = new Date();
 *              方法: toLocalString()
 *                    getTime()
 *         3) Math
 *              创建:
 *                  不用创建对象(静态成员)
 *              成员: PI, random() -- 返回 0~1 间的随机数 (含0不含1)
 *                   ceil(x): 向上取整 -- 取大于 x 的最小整数
 *                   floor(x): 向下取整
 *                   round(x): 四舍五入
 *         4) Number
 *         5) String
 *         6) RegExg: 正则表达式对象
 *              作用: 定义字符串的组成规则
 *                  单个字符: []
 *                      eg: [1] [ab][a-zA-Z0-9]
 *                    \d: 单个数字字符 [0-9]
 *                    \D: 非数字字符 [^0-9]
 *                    \w: 单个英文字符或数字字符 [a-zA-Z0-9]
 *                    ? : 0或1次
 *                    * : 0或多次
 *                    + : 1或多次
 *                    {m,n} : 个数 m-n (包含)
 *                          {,n} : 最多 n
 *                          {m,} : 最少 m
 *                    正则开始结束符号
 *                          ^ 开始
 *                          $ 结尾
 *              正则对象:
 *                  1.创建
 *                      var reg = new RegExp("^正则$");
 *                      var reg = /^正则$/;
 *                  2.使用
 *                      reg.test("待检测的字符串");
 *         7) Global: 全局函数(不需要对象,直接在 script 标签内调用)
 *              parseInt(p) : 截取字符串开始的整数数字
 *              parseFloat(p) :
 *              isNaN(i):返回 true 变量的数据内容 不是 数字类型
 *            应用点: 页面之间的 中文传递 (先编码,再解码)
 *              encodeURI(value, "utf-8"): 字符串转 UTF-8 编码
 *              decodeURI(value, "utf-8"): UTF-8 转 字符串 解码
 *
 * 2. DOM: 文档对象模型 document object model -- 见 dom 树 图
 *      浏览器加载 HTML 文档时,按 dom 树的形式加载到内存中
 *      整个 HTML 文档, 被 js 封装为一个 document 对象,加载到内存中, 更方便的对 HTML 进行 CRUD
 *          document 对象: 文档对象
 *          element 对象 : 元素对象
 *          attribute 对象 : 属性对象:  href 属性
 *          Text 对象: 文本对象
 *          Comment 对象: 注释对象
 *
 *          Node 对象: 节点对象,其他5个对象的最高对象
 *      核心 DOM 模型
 *          Document : 文本对象
 *              创建: 在 HTML dom 模型中可以通过 window 对象获取 -- xml 中不同
 *                 1. window.document
 *                 2. document
 *              方法:
 *                  1. 获取 element 对象
 *                      document.getElementById(id名) //返回 一个 document 对象
 *                      document.getElementsByClassName(ClassName) //返回数组
 *                      document.getElementsByName(Name) //返回数组
 *                      document.getElementsByTagName(TagName) //返回数组
 *           Element : 元素对象
 *                  创建: 通过 document 对象的方法获取
 *                  方法:
 *                      removeAttribute() : 删除属性
 *                              eg :  删除 header 元素的 style 属性：
 *                                  document.getElementsByTagName("H1")[0].removeAttribute("style");
 *                      setAttribute() : 设置属性
 *                              eg: 设置 input 元素的 type 属性：
 *                                  document.getElementsByTagName("INPUT")[0].setAttribute("type","button");
 *           Node : 节点对象
 *              所有 dom 树的各个对象都认为是一个节点对象
 *              方法:
 *                  removeChild(节点对象)
 *                  appendChild(节点对象)
 *                  replaceChild(节点对象)
 *              属性:
 *                  parentNode : 父节点
 *
 *      代码： 获取页面标签（元素） 对象： Element 对象
 *       document.getElementById("id") 返回标签对象
 *          设置标签属性: 对象.属性 = ..
 *          设置/改变标签内容: element对象.innerHTML = ...
 *
 *   事件:
 *      某些组件被执行了某些操作后,触发某些代码的执行
 *      绑定事件:
 *          1. 直接在 HTML 标签上,.指定时间的属性(操作), 属性值就是 js 代码
 *          2. 通过 js 获取元素对象,指定事件属性,设置一个函数
 * 3. BOM: 浏览器对象模型
 *      window 对象: window 关键字可以省略
 *          DOM 的 document 也是 window 对象的属性之一 : window.document.getElementById("header");
 *          弹窗: 警告框、确认框、提示框。
 *              //弹窗使用 反斜杠 + "n"(\n) 来设置换行。
 *          提示框: window.方法名(); // window 可以省略
 *              alert() : 警告
 *              confirm() :确认
 *              prompt() : 提交(问卷)
 *           close()
 *           open()
 *      定时器:
 *          setInterval(函数名,间隔毫秒数) : 周期循环. 间隔指定的毫秒数不停地执行指定的代码。
 *          setTimeout(函数名,间隔毫秒数) : 执行一次. 暂停指定的毫秒数后执行指定的代码
 *          clearInterval(定时器)
 *          clearTimeout(定时器)
 *          Note: setInterval() 和 setTimeout() 是 HTML BOM Window对象的两个方法。
 *      location 对象 : window.location // window 可省略
 *          成员:
 *              href : 赋值就替换,不赋值就是获取 eg: document.write(location.href);
 *              reload() : 刷新当前页面
 *      history 对象 : window.history  // window 可省略
 *              history.back() - 与在浏览器点击后退按钮相同
 *              history.forward() - 与在浏览器中点击按钮向前相同
 *              history.go(数值): 正数向前,负数向后
 *  HTML DOM
 *      标签体的设置和获取: innerHTML: 赋值就是 覆盖// += 就是追加
 *      使用 HTML 元素 对象的属性
 *      控制元素样式
 *          1.使用元素的 style 属性来设置
 *              eg:
 *                  document.getElementById("id").style.border = "1px solid red";
 *          2.提前定义好 类选择器 的样式, 通过元素的 className 属性,设置 class 属性值
 *                  document.getElementById("id").className = class名 (在 head标签/css 文件 中的 类选择器)
 *  事件监听机制:
 *      概念: 某些组件被执行了某些操作后,触发某些代码的执行
 *          事件: 某些操作. eg  单击,双击,键盘按下, 鼠标移动
 *          事件源: 组件. eg 按钮 文本框
 *          监听器: 代码.
 *          注册监听: 将事件,事件源,监听器结合起来. 当事件源上发生了某个事件,则触发执行了某个监听器代码
 *      常见事件:
 *          1.点击事件 -- 按钮
 *              onclick: 单击 -- 按钮, 单选/复选框
 *              ondbclick: double click
 *          2.焦点事件  --  一般用于文本框
 *              onblur: 失去焦点
 *              onfocus: 元素获得焦点
 *          3.加载事件
 *              onload: 在整个页面加载完成之后再加载
 *              onunload: 用户退出页面
 *          4.鼠标事件 : (成对使用)
 *              onmousedown : 鼠标按钮按下
 *              onmouseup : 鼠标松开
 *
 *              onmouseover : 鼠标移到某元素上
 *              onmouseout : 鼠标从某元素移开
 *
 *              onmousemove : 鼠标移动
 *          5.键盘事件
 *              onkeydown: 键盘按键按下
 *              onkeyup : 按键被松开
 *              onkeypress: 按键按下并松开
 *          6.选择和改变 : (省市联动)
 *              onchange : 下拉框 专用
 *              onselect : 文本被选中
 *          7.表单事件
 *              onsubmit : 控制表单提交 -- 内联形式(标签内) 调用方法时,需要加 return. eg: 标签内, onsubmit="return 方法名();"
 *                  有返回值 : true 允许提交/false 阻止提交
 *              onreset : 重置按钮被点击
 *
 *  var, let, const : 都可以在全局位置声明
 *      var: 全局作用域 或 函数作用域 -- 在 块作用域(for, if, 非函数代码块) 中定义的 var 变量,可以在 块作用域外访问
 *              在函数中定义的 var 变量, 不能在函数外访问
 *              在函数任意地方定义,本函数的其他地方都可以访问(函数内部没有加载顺序的先后)
 *      let: 块作用域, 在块内声明时,只能在块内访问(不能跨块,跨函数) -- 也可声明全局
 *      const: 常量,定义时赋值,在块内声明时块作用域 -- readonly -- 也可声明全局
 */
