// resolve, reject 本身是回调
new Promise((resolve, reject) => {

  var i = 1 / 0
  console.log(i);

  setTimeout(resolve("成功！我是 resolve 的消息"), 1000);

  reject("error reject");

  // then 中的函数就是 resolve, promise 成功时执行
}).then(msg => {
  console.log(msg);
}).catch(error => { // reject
  console.log(error);
})

new Promise((resolve, reject) => {

  // setTimeout(resolve("成功！我是 resolve 的消息"), 1000);

  reject("error reject");

  // then 中的函数就是 resolve, promise 成功时执行
}).then(msg => {
  console.log(msg);
}, error => { // reject
  console.log(error);
})