/*
* Blob: Binary Large Object, 名字来源于 SQL 数据库
* blob 是对大数据块的不透明引用或者句柄.
* 在 JS 中, Blob 通常表示二进制数据, 不过它们不一定非得是大量数据,
* blob 可以表示一个小型文本文件的内容. blob 是不透明的, 能对它们进行直接操作
* 的就只有获取它们的大小(以字节为单位), MIME 类型以及将它们分割成更小的 blob.
* Web 浏览器可以将 blob 存储到内存中或者磁盘上, blob 可以表示非常大的数据块(比如视频文件)
* 如果事先不用 slice() 方法将它们分割成为小数据块的话, 无法存储在主存中. 正是因为 blob 可以表示
* 非常大的数据块, 并且它可能需要磁盘的访问权限, 所以使用它们的 API 是异步的(在 Worker 线程中有提供相应的同步版本)
*
* 1. Blob 支持结构性复制算法, 此即意味着可以通过 message 事件从其他窗口或者线程中获取 Blob
* 2. 可以从客户端数据库中获取 Blob.
* 3. 可以使用 XHR2 标准中的尖端特性, 通过脚本化 HTTP 从 Web 中下载 Blob.
* 4. 可以使用 BlobBuilder 对象来从字符串, ArrayBuffer 对象以及其他 Blob 来创建自己的 Blob.
* 5. File 对象是 Blob 的子类, File 对象其实就是有名字和修改日期的 Blob 数据.
*    通过 <input type="file"> 元素以及拖放 API 可以获取 File 对象.
* 文件作为 Blob
*   <input type='file'> 元素最初是用于在 HTML 表单中实现文件上传的. 浏览器总是很小心地实现该元素,
*   目的是为了只允许上传用户显式选择的文件. 脚本是无法将该元素 value 属性设置成一个文件名的, 这样它们就无法实现
*   将用户电脑上的任意文件进行上传. 后来, 浏览器提供商已经对该元素进行了扩展, 允许客户端可以访问用户选择的文件.
*   要注意的是, 允许客户端脚本读取选择的文本内容不会引发安全问题, 它和允许这些文件上传到服务器的安全级别是一样的.
*   在支持本地文件访问的浏览器中, <input type="file"> 元素上的 files 属性则是一个 FileList 对象.
*   该对象是一个类数组对象, 其元素要么是 0, 要么是用户选择的多个 File 对象. 一个 File 对象就是一个 Blob,
*   除此之外, 还有 name 和 lastModifiedDate 属性. 详见 ./file.html
* 除了通过 <input> 元素来选择文件之外, 用户还可以通过将本地文件放到浏览器中来基于脚本访问它们的权限.
* 当应用接收到一个 drop 事件, 事件对象的 dataTransfer.files 属性就会和放入的 FileList 进行关联(如果有的话).
*
* */

// 使用 XMLHttpRequest 下载 Blob
// 以 Blob 的形式获取 URL 指定的内容, 并将其传递给指定的回调函数
// 此代码不一定有效
function getBlob(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'blob'; // 以 blob 形式接收
    xhr.onload = function () { // onload 比 onreadystatechange 更容易
        callback(xhr.response); // 将 Blob 传递给回调函数. 注意这里是 .response, 不是 .responseText
    }
    xhr.send(null); // 发送请求

    // 如果要下载的数据量很大, 想要在下载过程中显示一个进度条, 那么可以使用 onprogress 事件处理程序.
}

/*
* 构造 Blob
* Blob 通常表示来自诸如本地文件, URL 以及数据库外部资源的大数据块.
* 然而有时 Web 应用想要创建的 Blob, 并将其上传到 Web 上或者存储到一个文件或者数据库中或者
* 传递给另一个线程.
*
* */
var bb = new BlobBuilder();
// 把一个字符串追加到 Blob 中, 并以一个 NUL 字符串标记为字符串结束
bb.append('This blob contains this text and 10 big-endian 32-bit signed ints.');
bb.append("\0"); // NUL 结束符表示字符串的结束
// 将数据存储到 ArrayBuffer 中
var ab = new ArrayBuffer(4 * 10);
var dv = new DataView(ab);
for (var i = 0; i < 10; i++) {
    dv.setInt32(i * 4, i);
}
// 将 ArrayBuffer 添加到 Blob 中
bb.append(ab);
// 从 builder 中获取 Blob, 并指定 MIME 类型
var blob = bb.getBlob('x-optional/mime-type-here');

// 可以创建一个 URL 来指向该 Blob, 随后, 可以以一般的 URL 形式在任何地方使用该 URL:
// 在 DOM 中, 在样式表中, 甚至可以作为 XMLHttpRequest 的目标.
// 使用  createObjectURL 函数可以创建一个 Blob URL, Firefox 4 将该函数放在全局对象中,
// 命名为 URL, Chrome 和 Webkit 浏览器则在 URL 前加上了前缀, 命名为 webkitURL.
var getBlobURL = (window.URL && URL.createObjectURL.bind(URL)) ||
    (window.webkitURL && webkitURL.createObjectURL.bind(webkitURL)) ||
    window.createObjectURL;
/**
 * 传递一个 blob 给 createObjectURL() 方法回返回一个 URL(以普通字符串形式).
 * 该 URL 以 blob:// 开始, 紧跟着是一小串文本字符串, 该字符串用不透明的唯一标识符来标识 Blob.
 * 要注意的是, 这和 data://URL 不同, data://URL 会对内容进行编码.
 * Blob URL 只是对浏览器存储在内存中或者磁盘上的 Blob 的一个简单引用.
 * blob://URL 和 file://URL 也是不同的, file://URL 直接指向本地文件系统中的一个文件,
 * 仅暴露了文件的路径、浏览目录的许可等, 除此之外任何内容都会带来安全问题的.
 */
// 1. 实现一个和文件相关的用于监听拖放事件的 "拖放目标区域".
// 2. 当用户将一个或多个文件拖放到该目标区域中时, 它会使用 createObjectURL() 方法来为
// 每个文件获取一个 URL, 然后创建 <img> 元素来展示 URL 引用图片的缩略图
// 参见: ./blob-url.html
// Blob URL 和创建它们的脚本同源. 这使得它们比 file:// URL 更加灵活, 由于 file://URL 是非同源的,
// 因此要在 Web 应用中使用它们相对比较麻烦. Blob URL 只有在同源的文档中才是有效的.
// 比如, 如果将一个 Blob URL 通过 postMessage() 传递给一个非同源窗口, 则该 URL 对于该窗口来说没有任何意义
// Blob URL 并不是永久有效的, 一旦用户关闭或者离开包含创建 Blob URL 脚本的文档, 该 Blob URL 就失效了.
// 比如, 将 Blob URL 保存到本地存储器中, 然后当用户开始一个新的 Web 应用会话时再使用它, 这是不可能的.
// 可以通过调用 URL.revokeObjectURL() 方法(或者 webkitURL.revokeObjectURL() 方法), 来手动让 Blob URL 失效.
// 参见 ./blob-url.html. 之所以提供这样的方式, 是因为这和内存管理问题有关. 一旦展示了图片的缩略图之后, Blob 就不再
// 需要了, 应当回收它. 但是, 如果 Web 浏览器正维护创建的 Blob 和 Blob URL 之间的映射关系, 那么即使该 Blob 已经不用了,
// 也不会被回收. JS 解释器无法跟踪字符串的使用情况, 如果 URL 仍然是有效的, 那么它只能认为该 URL 可能还在用.
// 这就意味着, 在手动撤销该 URL 之前, 是不会将其回收的. ./blob-url.html 中使用的是本地文件, 不需对其进行清除.
// 但是, 如果通过 BlobBuilder 创建的 Blob 都是存储在内存中, 或者通过 XMLHttpRequest 下载的 Blob 是存储在一个临时文件中的话,
// 那么一定会有严重的内存管理问题.
// blob://URL 模式被显式地设计成像一个简化地 http://URL 那样工作, 并且, 当请求一个 blob://URL 的时候, 要求浏览器像迷你的 HTTP 服务器那样
// 做出响应. 如果请求的 Blob URL 已经失效, 浏览器必须返回一个 404 无法找到的状态码. 如果请求的 Blob URL 来自另外的源, 那么浏览器必须返回 403
// 禁止访问的状态码. Blob URL 只允许通过 GET 请求获取, 并且一旦获取成功, 浏览器必须返回一个 HTTP 200 OK 的状态码, 同时返回一个
// 使用 Blob type 属性的 Content-Type 头部信息. 由于 Blob URL 的工作方式和简单的 HTTP URL 一致, 因此可以通过 XMLHttpRequest 将它们
// 指定的内容 "下载" 下来.
/**
 * 读取 Blob:
 * Blob 是不透明的大数据块, 只允许通过 Blob URL 来间接访问它们的内容. FileReader 对象允许访问 Blob 中的字符或者字节, 可以将它视为是
 * BlobBuilder 对应的一个对象(其实叫 BlobReader 更好, 因为它只适用 Blob 而不是文件). 由于 Blob 可能回实存储在文件系统中的大对象,
 * 因此读取它们的 API 是异步的, 和 XMLHttpRequest API 很像. 尽管 Worker 线程也可以使用异步的 API, 但在 Worker 线程中有对应的同步版本的 API,
 * 叫 FileReaderSync.
 * 使用 FileReader.
 * 首先通过 FileReader() 构造函数创建创建一个实例. 然后, 定义一个事件处理程序. 通常会给 load/error/progress 事件定义处理程序.
 * 可以使用 onload/onerror/onprogress 或者使用标准的 addEventListener() 方法来定义处理程序. FileReader 对象还会触发 loadstart/loadend/abort 事件,
 * 这些事件和同名的 XMLHttpRequest 事件一样.
 * 创建了 FileReader 对象并注册了对应的事件处理程序之后, 必须要将读取的 Blob 传递给下面这 4 个方法其中之一: readAsText()/readAsArrayBuffer()/
 * readAsDataURL()/readAsBinaryString(). 当然, 也可以先调用其中的方法, 然后再注册事件处理程序.
 * 以上四个方法都接收 Blob 作为参数一. readAsText() 方法还接收第二个可选参数, 该参数指定文本的编码方式.
 * 如果不传递该参数, 则自动采用 ASCII 和 UTF-8 文本.
 * 在 FileReader 读取指定的 Blob 的时候, 它会更新它的 readyState 属性. 该属性值开始是 0, 表示还未读取任何信息. 当读取到一些数据的时候, 会变成 1,
 * 数据读取完毕, 变为 2. 它的 result 属性包含部分或者完整的结果(字符串或者 ArrayBuffer 形式). 一般不会直接轮询 state 和 result 属性,
 * 而是 onprogress 或者 onload 事件处理程序中使用它们.
 * 参见: ./FileReader.html
 * readAsArrayBuffer() 方法和 readAsText() 方法类似, 不同的是, 它额外多做了一些处理结果以 ArrayBuffer 形式返回, 而不是字符串形式.
 * 参见: ./FileReader-2.html
 * 在 Worker 线程中, 可以使用 FileReaderSync 取代 FileReader. 同步版本的 API 同样定义了 readAsText() 方法和 readAsArrayBuffer() 方法,
 * 它们和异步版本的方法接收同样的参数. 不同的地方是同步方法会阻塞, 一直到操作完成并以字符串或者 ArrayBuffer 形式返回结果, 并不需要使用事件处理程序.
 *
 */
