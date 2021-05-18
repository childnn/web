/**
 * shadow
 * 2019/3/13 14:00
   <div>: 块级元素
        上下两个块元素的外边距: 浏览器会折叠它们共同的外边距折叠在一起, 折叠的外边距高度就是最大的外边距高度.
        假设上面的元素 下外边距 为 10px, 下面的元素 上外边距 为 20px, 折叠的外边距为 20px.
   <span>: 内联元素
        左右两个内联元素的外边距: 两个元素相邻外边距之和.
   放置属性值覆盖: 在属性值后加 !important 可以强制设置最高优先级.
 * HTML : 制作网页
 * CSS : 美化网页 -- cascading style sheets 层叠样式表
 *      渲染 HTML 的元素(设置各种标签的属性,定位等)
 *      注释: 杠星星杠
 *      层叠: 多个样式可以作用在同一个 html 的元素上,同时生效
 *     好处:
 *          功能强大
 *          将内容展示和样式控制分离
 *                降低耦合度.--解耦
 *                让分工协作更容易
 *                提高开发效率
 *  使用: 与 HTML 的结合方式 -- 属性与值之间用 冒号 分隔
 *      1.内联样式 (内嵌方式)
 *          在标签内使用 style 属性指定 css 代码
 *          eg: <div style="color:red;">文本信息</div>
 *          背景色属性（background-color）定义一个元素的背景颜色：
 *      2.内部样式
 *          把 HTML 内部标签的 style 属性 提升为 <head></head> 标签下的 <style></style> 标签
 *          在 head 标签内,定义 style 标签, style 标签的标签体内容就是 css 代码
 *          在 body 标签内使用 <div></div>
 *          eg:
 *              <style>
 *                  div{
 *                      color:blue;
 *                  }
 *              </style>
 *
 *              <div>文本信息</div>
 *      3.外部样式
 *          1) 定义css资源文件
 *          2) 在head标签内,定义link标签,引入外部的资源文件
 *           eg: 定义外部文件
 *              a.css 文件
 *                  div{
 *                      color:green;
 *                  }
 *              内部引入
 *            <head>
 *              <link rel="stylesheet" href="css/a.css">
 *            </head>
 *            <body>
 *              <div>文本信息</div>
 *            </body>
 *      注意:
 *          1,2,3 中方式 css作用范围越来越大
 *          1 范式不常用,后期常用 2,3
 *          第3种方式可以写为:
 *              <style>
 *                  @import "导入文件目录";
 *              </style>
 *
 *  css 语法:
 *        选择器{
 *            属性名:值;
 *            属性名:值;
 *            ....
 *        }
 *
 *  选择器(重点)
 *      基本选择器:
 *          1. id 选择器  条件: 需要在元素身上有 id 属性 -- 格式: #id属性值{}
 *          2. 类选择器  条件: 需要在元素身上有 class 属性 -- 格式: .class属性值{}
 *              指定元素(标签)的 class : 元素名[class="class属性值"] {}
 *          3. 元素选择器 没有条件只要有标签名即可  -- 格式: 标签名{}
 *        细节1: 优先级  id选择器>类选择器>元素选择器
 *        细节2:
 *              id属性在整个HTML页面只有一个固定值 : id 选择器适用于获取一个元素
 *              类选择器适用于获取多个不同元素
 *              元素(标签)选择器适用于获取 某一类元素(指定标签名的元素)
 *      扩展选择器:
 *          选择所有元素
 *              语法: *{}
 *          并集选择器 (组合选择器)
 *              选择器1,选择器2{}
 *          层级选择器
 *              元素1 元素2 : 找元素1下面的所有元素2  -- 后代选择器
 *              元素1>元素2 : 找元素1下面的元素2,包含的只是最近的一层(子类)  -- 子元素选择器
                h1+p {....}: 选择紧跟在 <h1> 元素后面的 <p> 元素.
 *          属性选择器: 选择元素名称, 属性名=属性值的元素
 *              语法: 标签名[属性名="属性值"]{}
 *                   标签名[属性名]{}
 *                   标签名[属性名1="值1"][属性名2="值2"] : 条件同时成立
                     image[alt~="flowers"] {   // 选择所有 alt 属性包含 'flowers' 的图像.
                         border: #ccc thin solid;
                     }
 *          伪类选择器: 可以设置一个元素的不同状态的变化
 *              anchor伪类: 在支持 CSS 的浏览器中，链接的不同状态都可以以不同的方式显示
 *              语法: 元素:状态{}
 *              eg: <a> -- 超链接
 *                  a:link {color:#FF0000;} // 未访问的链接
 *                  a:visited{color:#00FF00;} // 已访问的链接
 *                  a:hover{color:#FF00FF;} // 鼠标划过链接
 *                  a:active{color:#0000FF;} // 已选中的链接
 *              注意: 在CSS定义中，a:hover 必须被置于 a:link 和 a:visited 之后，才是有效的。
 *                   在 CSS 定义中，a:active 必须被置于 a:hover 之后，才是有效的。
            p:first-letter {
                font-size: 3em;
            }
            p:first-line {
                font-style: italic;
            }

 * css 框模型
 *   属性
 *      1. 字体、文本
 *          font-size: 字体大小
 *          color: 文本颜色
 *          text-align: 对齐方式
 *          line-height
 *      2. 背景
 *          background
 *      3. 边框
 *          border
 *      4. 盒子模型
 *          height : 高度
 *          width : 宽度
 *          margin: 外边距
 *          padding: 内边距
 *              默认情况下: 内部的盒子改变大小会影响外部盒子大小
 *              box-sizing: border-box; 设置盒子的属性, 让设置的属性就是最终属性
 *          float: 浮动 -- 设置 div 盒子在同一行的不同位置
 *              left:
 *              right:
 *              center
 */
@SuppressWarnings("all")
public class CSS基础笔记 {
}
