/**
 * 类型化数组: 类数组对象, 他和常规的数组有如下重要区别:
 *   1. 类型化数组中的元素都是数字. 使用构造函数在创建类型化数组的时候决定了数组中数字(有符号或者无符号整数或这浮点数)
 *      的类型和大小(以 位 bit 为单位)
 *   2. 类型化数组有固定的长度
 *   3. 在创建类型化数组的时候, 数组中的元素总是默认初始化为 0.
 * 一共有 8 种类型化数组, 每一种的元素类型都不同:
 *  Int8Array    有符号字节
 *  Uint8Array   无符号字节
 *  Int16Array   有符号 16 位短整数
 *  Uint16Array  无符号 16 位短整数
 *  Int32Array   有符号 32 位整数
 *  Uint32Array  无符号 32 位整数
 *  Float32Array  32 位浮点数
 *  Float64Array  64 位浮点数: JS 种常规数字
 */
let ints = new Int16Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]); // 10 个短整数
let length = ints.length;
let last3 = ints.subarray(length - 3, length); // 最后 3 个
console.log(last3[0]); // 等效于 ints[7]

// 需要注意 subarray 方法不会创建数据的副本. 它只是返回元素组的其中一部分内容
ints[9] = -1; // 改变元数组中的元素值
console.log(last3[2]); // 同时也改变子数组中的元素值
/**
 * subarray 方法返回当前数组的一个新视图 view.
 * 它们都是基本字节块的视图, 称为一个 ArrayBuffer.
 * 每个类型化数组都有雨基本缓冲区相关的三个属性
 */
console.log(last3.buffer); // 返回一个 ArrayBuffer 对象
console.log(last3.buffer === ints.buffer); // true: 两者都是同一缓冲区上的视图
console.log(last3.byteOffset); // 14: 此视图从基本缓冲区的第 14 个字节开始; 7 个 16 位整数
console.log(last3.byteLength); // 字节: 3 个 16 位整数, 即  6 个字节

// ArrayBuffer 对象自身只有一个返回它长度的属性
console.log(last3.byteLength); // 6: 此视图 6 个字节长
console.log(last3.buffer.byteLength); // 20: 但是基本缓冲区长度有 20 个字节长: 总共 10 个 16 位整数

console.log('=================================')

/**
 * ArrayBuffer 只是不透明的字节块. 可以通过类型化数组获取这些字节, 但是 ArrayBuffer 自己并不是一个类型化数组
 * 然而, 要注意的是, 可以像对任意 JS 对象那样, 使用数字数组索引操作 ArrayBuffer. 但是, 这样做并不能赋予访问缓冲区
 * 中字节的权限.
 *
 */
var bytes = new Uint8Array(8); // 分配 8 个字节
bytes[0] = 1; // 把第一个字节设置为 1
console.log(bytes.buffer[0]); // undefined: 缓冲区没有索引值 0
bytes.buffer[1] = 255; // 试着错误地设置缓冲区中的字节
console.log(bytes.buffer[1]); // 255: 这只设置一个常规的 JS 属性
console.log(bytes[1]); // 0: 上面这行代码并没有设置字节

/*
* 可以直接使用 ArrayBuffer() 构造函数来创建一个 ArrayBuffer, 有了 ArrayBuffer 对象
* 可以在该缓冲区上创建任意数量的类型化数组视图
* */
var buf = new ArrayBuffer(1024 * 1024); // 1 MB
var asbytes = new Uint8Array(buf); // 视为字节
var asints = new Int32Array(buf); // 视为 32 位有符号整数
var lastK = new Uint8Array(buf, 1023 * 1024); // 视最后 1KB 为字节
var ints2 = new Int32Array(buf, 1024, 256); // 视第二个 1KB 为 256 个整数

// 低位优先 little-endian: ArrayBuffer 中数字的字节是按照从低位到高位的顺序排列的.
// 高位优先 big-endian: 上述相反
// 如果整数 0x00000001 在内存中表示成: 01 00 00 00, 则说明当前系统是低位优先系统
// 相反, 在高位优先系统中, 它会表示成: 00 00 00 01
var little_endian = new Int8Array(new Int32Array([1]).buffer)[0] === 1.
console.log(little_endian);

/*
* 大多 CPU 架构都采用低位优先. 然而, 很多的网络协议以及有些二进制文件格式, 是采用高位优先的字节顺序.
* 通常, 处理外部数据的时候, 可以使用 Int8Array 和 Uint8Array 将数据视为一个单字节数组, 但是, 不应该使用
* 其他的多字节字长的类型化数组. 取而代之的是可以使用 DataView 类, 该类定义了采用显式指定的字节顺序从 ArrayBuffer 中
* 读/写其值的方法:
* */
var data; // 假设这是一个来自网络的 ArrayBuffer
var view = DataView(data); // 创建一个视图
var int = view.getInt32(0); // 从 字节 0 开始的, 高位优先顺序的 32 位有符号 int 整数
// 参数二可选, 默认 false, 表示高位优先字节顺序, 反之低位优先字节顺序
int = view.getInt32(4, false); // 接下来的 32 位 int 整数也是高位优先顺序的
int = view.getInt32(8, true); // 接下来的 4 个字节视为低位优先顺序的有符号 int 整数
view.setInt32(8, int, false); // 以高位优先顺序格式将数字写回去