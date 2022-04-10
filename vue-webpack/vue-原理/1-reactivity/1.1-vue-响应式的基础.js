'use strict';


// https://vue-course-doc.vercel.app/#_1-%E8%AF%BE%E7%A8%8B%E7%AE%80%E4%BB%8B
const obj = {foo: 123};

convert(obj);

obj.foo; // get
obj.foo = 234; // set
obj.foo; // get


// 直接对属性赋值, 改变对象的属性
// ES5 的 Object.defineProperty 提供监听属性变更的功能
function convert (obj) {
  // Object.keys 获取对象的所有 key
  // 通过 forEach 对每个属性进行修改
  Object.keys(obj).forEach(k => {
    // 保存属性初始值
    let internalValue = obj[k];
    // 参数三: PropertyDescriptor
    // configurable/enumerable/writable/get/set/value
    Object.defineProperty(obj, k, {
      get () {
        console.log(`get key '${k}': ${internalValue}`);
        return internalValue;
      },
      set (newValue) {
        console.log(`setting key '${k}' to: ${newValue}`);
        internalValue = newValue;
      },
    })
  })

}

