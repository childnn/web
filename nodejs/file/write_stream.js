'use strict';

let fs = require('fs');

let ws = fs.createWriteStream('writestream.txt');

/**
 * once: 触发一次
 * on:
 */
ws.once('open', function () {
    console.log('流打开了');
});

ws.once('close', function () {
    console.log("流关闭了");
});

for (let i = 0; i < 10; i++) {
    ws.write('写入' + i + '\n');
}
// 版本有改动吗? 与期望的不一致
ws.write('使用 end 输出, 使用 close 没有输出');
ws.write('使用 end 输出, 使用 close 没有输出');
ws.write('使用 end 输出, 使用 close 没有输出');
ws.write('使用 end 输出, 使用 close 没有输出');

ws.close();
// ws.end();