'use strict';

/**
 * ECMAScript for XML, 简称 E4X, 是 JS 的一个标准扩展, 它为处理 XML 文档定义了一系列强大的特性.
 * E4X 将 XML 文档视为一个 XML 对象, 将 XML 片段视为一个紧密相关的 XML 列表对象.
 * XML 对象是一类全新的对象, E4X 中定义了专门的语法来描述它.
 * 在 JS 中, 除了函数之外所有标准的 JS 对象的 typeof 运算结果都是 "object", 正如函数和原始的 JS 对象有所区别一样,
 * XML 对象也和原始 JS 对象不同, 对它们进行 typeof 运算的结果是 "xml".
 * 在客户端 JS 中, XML 对象和 DOM 对象没有任何关系.
 */
    // 创建一个 XML 对象
var pt = <periodctable>
    <element id="1">
        <name>Hydrogen</name>
    </element>
    <element id="2">
        <name>Helium</name>
    </element>
    <element id="3">
        <name>Lithium</name>
    </element>
</periodctable>
// 给这个表格添加一个新元素
pt.element += <element id="4">
    <name>Beryllium</name>
</element>
// console.log(pt); // error


pt = <periodictable></periodictable>; // 创建空表格
var elements = ['Hydrogen', 'Helium', 'Lithium']; // 待添加的元素
// 使用数组元素创建 XML 标签
for (var n = 0; n < elements.length; n++) {
    pt.element += <element id={n + 1}>
        <name>{elements[n]}</name>
    </element>;
}

// 将字符串解析成 XML
pt.element += new XML('<element id="5"><name>Boron</name></element>');

// 当涉及 XML 片段时, 使用 XMLList() 替换 XML()
pt.element += new XMLList('<element id="6"><name>Carbon</name></element>' + '<element id="7"><name>Nitrogen</name></element>');

// E4X 提供一些显而易见的语法用以访问所创建的 XML 文档的内容
var elements = pt.element; // 得到所有 <element> 标签组成的一个列表
var names = pt.element.name; // 得到所有的 <name> 标签的一个列表
var n = name[0]; // "Hydrogen", name 的第 0 个标签的内容

// E4X 提供 .. 运算符: descendent operator
// 另一种得到所有 <name> 标签对应列表的方法
var names2 = pt..name; // 不支持

// E4X 定义通配符运算
// 得到所有 <name> 标签的所有子节点
var names3 = pt.element.*;

// E4X 使用字符 @ 区分属性名和标签名
var atomicNumebr = pt.element[1].@id;

// 获取所有 <element> 标签的所有属性
var atomicNums = pt.element.@*;


// E4X 包含一种强大且极其简洁的语法用来对列表进行过滤, 过滤条件可以是任意谓词表达式
// 对所有 <element> 元素组成的一个列表进行过滤
// 过滤出那些 id 属性小于 3 的元素
var lightElements = pt.element.(@id < 3);

// 对所有的 element 元素组成的列表进行过滤
// 过滤出那些 name 以 B 开始的元素
// 然后得到过滤后元素的 <name> 标签列表
var bElementNames = pt.element.(name.charAt(0) === 'B').name;

// 删除属性/标签
delete pt.element[0].@symbol; // 删除一个属性
delete pt.weight; // 删除所有的 <widget> 标签

// 修改
pt.element[0].@symbol = 'H';
pt.element[0].weight = 1.00794;

pt.insertChildBefore(pt.element[1], <element id='1'><name>Deuterium</name></element>);