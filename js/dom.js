/*
* DOM: Document Object Model 文档对象模型.
* 在浏览器中加载网页时,浏览器不仅对 HTML 进行分析并将其渲染到显示器, 还创建一系列
* 表示标签的对象. 这些对象存储在 DOM 中.
* DOM 建立起 HTML 与 JS 沟通的桥梁.
* document
* - html
*   - head
*       - title
*       - script
*   - body
*       - h1
*       - h2
*          - em
*       - p
* JS 代码通过与 DOM 交互来访问元素及其内容,还可以使用 DOM 来创建或删除元素.
* JS 代码修改 DOM 时, 浏览器将动态更新网页,让用户能够在网页中看到新内容.
* ---
* 处理 DOM 时,确保代码在网页完全加载后再执行至关重要; 否则,代码执行时, DOM 可能还未创建.
* 将 JS 代码放在 <body> 元素末尾可以保证 DOM 创建完毕.
* 或者使用 window 对象的 onload 方法. window 是 JS 内置对象, 表示浏览器窗口.
* window.onload = function() {...}
* event handler/callback:
*   假设有重大的事件即将发生, 而你必须在其发生后第一时间获悉. 对于这种情形,一种常见的处理方式是
*   使用回调函数(callback, 也叫 事件处理程序 event handler).
*  回调函数的工作原理: 给了解事件的对象提供一个函数,事件发生后,这个对象将通过调用这个函数来通知你.
*
* */
function change(t) {
    // 如果 id 不存在, 返回 null.
    let el = document.getElementById(t.id);
    /**
     * align:
     * title:
     * lang:
     * translate: true
     * dir:
     * hidden: false
     * accessKey:
     * draggable: false
     * spellcheck: true
     * autocapitalize:
     * contentEditable: inherit
     * isContentEditable: false
     * inputMode:
     * offsetParent: [object HTMLBodyElement]
     * offsetTop: 22
     * offsetLeft: 8
     * offsetWidth: 898
     * offsetHeight: 42
     * style: [object CSSStyleDeclaration]
     * innerText: I'm changed.
     * outerText: I'm changed.
     * oncopy: null
     * oncut: null
     * onpaste: null
     * onabort: null
     * onblur: null
     * oncancel: null
     * oncanplay: null
     * oncanplaythrough: null
     * onchange: null
     * onclick: function onclick(event) {
            change(this);
       }
     * onclose: null
     * oncontextmenu: null
     * oncuechange: null
     * ondblclick: null
     * ondrag: null
     * ondragend: null
     * ondragenter: null
     * ondragleave: null
     * ondragover: null
     * ondragstart: null
     * ondrop: null
     * ondurationchange: null
     * onemptied: null
     * onended: null
     * onerror: null
     * onfocus: null
     * onformdata: null
     * oninput: null
     * oninvalid: null
     * onkeydown: null
     * onkeypress: null
     * onkeyup: null
     * onload: null
     * onloadeddata: null
     * onloadedmetadata: null
     * onloadstart: null
     * onmousedown: null
     * onmouseenter: null
     * onmouseleave: null
     * onmousemove: null
     * onmouseout: null
     * onmouseover: null
     * onmouseup: null
     * onmousewheel: null
     * onpause: null
     * onplay: null
     * onplaying: null
     * onprogress: null
     * onratechange: null
     * onreset: null
     * onresize: null
     * onscroll: null
     * onseeked: null
     * onseeking: null
     * onselect: null
     * onstalled: null
     * onsubmit: null
     * onsuspend: null
     * ontimeupdate: null
     * ontoggle: null
     * onvolumechange: null
     * onwaiting: null
     * onwheel: null
     * onauxclick: null
     * ongotpointercapture: null
     * onlostpointercapture: null
     * onpointerdown: null
     * onpointermove: null
     * onpointerup: null
     * onpointercancel: null
     * onpointerover: null
     * onpointerout: null
     * onpointerenter: null
     * onpointerleave: null
     * onselectstart: null
     * onselectionchange: null
     * onanimationend: null
     * onanimationiteration: null
     * onanimationstart: null
     * ontransitionend: null
     * dataset: [object DOMStringMap]
     * nonce:
     * autofocus: false
     * tabIndex: -1
     * click: function click() { [native code] }
     * attachInternals: function attachInternals() { [native code] }
     * focus: function focus() { [native code] }
     * blur: function blur() { [native code] }
     * enterKeyHint:
     * onpointerrawupdate: null
     * namespaceURI: http://www.w3.org/1999/xhtml
     * prefix: null
     * localName: h1
     * tagName: H1
     * id: h1
     * className:
     * classList:
     * slot:
     * attributes: [object NamedNodeMap]
     * shadowRoot: null
     * part:
     * assignedSlot: null
     * innerHTML: I'm changed.
     * outerHTML: <h1 id="h1" onclick="change(this);">I'm changed.</h1>
     * scrollTop: 0
     * scrollLeft: 0
     * scrollWidth: 898
     * scrollHeight: 42
     * clientTop: 0
     * clientLeft: 0
     * clientWidth: 898
     * clientHeight: 42
     * attributeStyleMap: [object StylePropertyMap]
     * onbeforecopy: null
     * onbeforecut: null
     * onbeforepaste: null
     * onsearch: null
     * elementTiming:
     * previousElementSibling: null
     * nextElementSibling: null
     * children: [object HTMLCollection]
     * firstElementChild: null
     * lastElementChild: null
     * childElementCount: 0
     * onfullscreenchange: null
     * onfullscreenerror: null
     * onwebkitfullscreenchange: null
     * onwebkitfullscreenerror: null
     * hasAttributes: function hasAttributes() { [native code] }
     * getAttributeNames: function getAttributeNames() { [native code] }
     * getAttribute: function getAttribute() { [native code] }
     * getAttributeNS: function getAttributeNS() { [native code] }
     * setAttribute: function setAttribute() { [native code] }
     * setAttributeNS: function setAttributeNS() { [native code] }
     * removeAttribute: function removeAttribute() { [native code] }
     * removeAttributeNS: function removeAttributeNS() { [native code] }
     * toggleAttribute: function toggleAttribute() { [native code] }
     * hasAttribute: function hasAttribute() { [native code] }
     * hasAttributeNS: function hasAttributeNS() { [native code] }
     * getAttributeNode: function getAttributeNode() { [native code] }
     * getAttributeNodeNS: function getAttributeNodeNS() { [native code] }
     * setAttributeNode: function setAttributeNode() { [native code] }
     * setAttributeNodeNS: function setAttributeNodeNS() { [native code] }
     * removeAttributeNode: function removeAttributeNode() { [native code] }
     * attachShadow: function attachShadow() { [native code] }
     * closest: function closest() { [native code] }
     * matches: function matches() { [native code] }
     * webkitMatchesSelector: function webkitMatchesSelector() { [native code] }
     * getElementsByTagName: function getElementsByTagName() { [native code] }
     * getElementsByTagNameNS: function getElementsByTagNameNS() { [native code] }
     * getElementsByClassName: function getElementsByClassName() { [native code] }
     * insertAdjacentElement: function insertAdjacentElement() { [native code] }
     * insertAdjacentText: function insertAdjacentText() { [native code] }
     * setPointerCapture: function setPointerCapture() { [native code] }
     * releasePointerCapture: function releasePointerCapture() { [native code] }
     * hasPointerCapture: function hasPointerCapture() { [native code] }
     * insertAdjacentHTML: function insertAdjacentHTML() { [native code] }
     * requestPointerLock: function requestPointerLock() { [native code] }
     * getClientRects: function getClientRects() { [native code] }
     * getBoundingClientRect: function getBoundingClientRect() { [native code] }
     * scrollIntoView: function scrollIntoView() { [native code] }
     * scroll: function scroll() { [native code] }
     * scrollTo: function scrollTo() { [native code] }
     * scrollBy: function scrollBy() { [native code] }
     * scrollIntoViewIfNeeded: function scrollIntoViewIfNeeded() { [native code] }
     * animate: function animate() { [native code] }
     * computedStyleMap: function computedStyleMap() { [native code] }
     * before: function before() { [native code] }
     * after: function after() { [native code] }
     * replaceWith: function replaceWith() { [native code] }
     * remove: function remove() { [native code] }
     * prepend: function prepend() { [native code] }
     * append: function append() { [native code] }
     * querySelector: function querySelector() { [native code] }
     * querySelectorAll: function querySelectorAll() { [native code] }
     * requestFullscreen: function requestFullscreen() { [native code] }
     * webkitRequestFullScreen: function webkitRequestFullScreen() { [native code] }
     * webkitRequestFullscreen: function webkitRequestFullscreen() { [native code] }
     * ELEMENT_NODE: 1
     * ATTRIBUTE_NODE: 2
     * TEXT_NODE: 3
     * CDATA_SECTION_NODE: 4
     * ENTITY_REFERENCE_NODE: 5
     * ENTITY_NODE: 6
     * PROCESSING_INSTRUCTION_NODE: 7
     * COMMENT_NODE: 8
     * DOCUMENT_NODE: 9
     * DOCUMENT_TYPE_NODE: 10
     * DOCUMENT_FRAGMENT_NODE: 11
     * NOTATION_NODE: 12
     * DOCUMENT_POSITION_DISCONNECTED: 1
     * DOCUMENT_POSITION_PRECEDING: 2
     * DOCUMENT_POSITION_FOLLOWING: 4
     * DOCUMENT_POSITION_CONTAINS: 8
     * DOCUMENT_POSITION_CONTAINED_BY: 16
     * DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 32
     * nodeType: 1
     * nodeName: H1
     * baseURI: http://localhost:63342/web/js/dom.html?_ijt=k1rukb3jf2uln8ivu3r0igtpsf
     * isConnected: true
     * ownerDocument: [object HTMLDocument]
     * parentNode: [object HTMLBodyElement]
     * parentElement: [object HTMLBodyElement]
     * childNodes: [object NodeList]
     * firstChild: [object Text]
     * lastChild: [object Text]
     * previousSibling: [object Text]
     * nextSibling: [object Text]
     * nodeValue: null
     * textContent: I'm changed.
     * hasChildNodes: function hasChildNodes() { [native code] }
     * getRootNode: function getRootNode() { [native code] }
     * normalize: function normalize() { [native code] }
     * cloneNode: function cloneNode() { [native code] }
     * isEqualNode: function isEqualNode() { [native code] }
     * isSameNode: function isSameNode() { [native code] }
     * compareDocumentPosition: function compareDocumentPosition() { [native code] }
     * contains: function contains() { [native code] }
     * lookupPrefix: function lookupPrefix() { [native code] }
     * lookupNamespaceURI: function lookupNamespaceURI() { [native code] }
     * isDefaultNamespace: function isDefaultNamespace() { [native code] }
     * insertBefore: function insertBefore() { [native code] }
     * appendChild: function appendChild() { [native code] }
     * replaceChild: function replaceChild() { [native code] }
     * removeChild: function removeChild() { [native code] }
     * addEventListener: function addEventListener() { [native code] }
     * removeEventListener: function removeEventListener() { [native code] }
     * dispatchEvent: function dispatchEvent() { [native code] }
     * 
     */
    for (var k in t) {
        console.log(k + ": " + t[k]);
    }
    if (document == null) {
        alert('The given element is not exist, id: ' + t.id);
    }
    const VALUE1 = "I'm changed.";
    const VALUE2 = "I'm a h1.";
    var innerHTML = el.innerHTML;
    if (innerHTML == VALUE2) {
        // 这里不能直接用 innerHTML 变量, 否则改变的不是 DOM 值而是变量值
        el.innerHTML = VALUE1;
    } else {
        el.innerHTML = VALUE2;
    }
    let attrStyle = el.getAttribute('style');
    if (attrStyle == null) {
        el.setAttribute('style', 'color: red');
    } else {
        el.setAttribute('style', 'background-color: green');
    }
}