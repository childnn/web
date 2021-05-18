'use strict';

/*
 在 document 中的一个指定的区域输出调试消息
 如果 document 不存在这样一个区域， 则创建一个
* */
function debug(msg) {
    let log = document.getElementById('debuglog');

    // 如果不存在此元素, 则创建
    if (!log) {
        log = document.createElement('div'); // 创建一个新 <div> 元素.
        log.id = 'debuglog'; // 给这个元素的 HTML id 赋值.
        log.innerHTML = '<h1>Debug Log</h1>'; // 定义初始内容.
        document.body.appendChild(log); // 将其添加到文档的末尾.
    }

    // 将消息包装在 <pre> 中, 并添加至 log 中.
    let pre = document.createElement('pre'); // 创建 <pre> 标签.
    let text = document.createTextNode(msg); // 将 msg 包装在一个文本节点中.
    pre.appendChild(text); // 将文本添加至 <pre>
    log.appendChild(pre); // 将 <pre> 添加至 log.
}

// 注意 CSS 中 display 属性与 visibility 属性的区别.
function hide(e, reflow) { // 通过 JS 操纵样式来隐藏元素 e
    if (reflow) { // 如果第二个参数是 true.
        e.style.display = 'none'; // 隐藏此元素, 其所占的空间随之消失.
    } else { // 否则
        e.style.visibility = 'hidden'; // 将 e 隐藏, 但是保留其所占的空间.
    }
}

// 通过设置 CSS 类来高亮显示 e
function highlight(e) {
    // 简单定义或追加 HTML 类属性
    // 这里假设 CSS 样式表中已经有 'hilite' 类的定义
    if (!e.className) {
        e.className = 'hilite';
    } else {
        e.className += ' hilite';
    }
}
