;var moduleB = (function () {

  var flag = false;
  function f() {
    console.log('module b 的 f()');
  }

  var obj = {};
  obj.flag = flag;
  obj.f = f;

  // export
  return obj; // 闭包中的属性无法在外部访问, 需要接收函数返回值
})();