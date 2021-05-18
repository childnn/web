;var moduleA = (function () {

  var flag = true;
  function f() {
    console.log('module a 的 f()');
  }

  var obj = {};
  obj.flag = flag;
  obj.f = f;

  // export
  return obj;
})();