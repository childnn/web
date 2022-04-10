vue 的响应式: 数据的改变会实时的同步到页面
MVVM:
  View: DOM  -- element
  ViewModel: DOM Listeners/Data Bindings   -- Vue
  Model: Plain JS Objects  -- data
Vue 建立 view 与 model 的绑定关系
数据驱动视图

Vue.js 的模板是基于 DOM 实现的。这意味着所有的 Vue.js 模板都是可解析的有效的 HTML，
且通过一些特殊的特性做了增强。Vue 模板因而从根本上不同于基于字符串的模板，请记住这点。

v-bind:src 缩写: :src
v-on:click 缩写: @click

Class(html) 与 Style(内联样式) 绑定
数据绑定一个常见需求是操作元素的 class 列表和它的内联样式。因为它们都是 attribute，
我们可以用 v-bind 处理它们：只需要计算出表达式最终的字符串。不过，字符串拼接麻烦又易错。
因此，在 v-bind 用于 class 和 style 时，Vue.js 专门增强了它。表达式的结果类型除了字符串之外，还可以是对象或数组。

v-bind:style 的对象语法十分直观——看着非常像 CSS，其实它是一个 JavaScript 对象。
CSS 属性名可以用驼峰式（camelCase）或短横分隔命名（kebab-case）

v-show 与 v-if
因为 v-if 是一个指令，需要将它添加到一个元素上。但是如果我们想切换多个元素呢？
此时我们可以把一个 <template> 元素当做包装元素，并在上面使用 v-if，最终的渲染结果不会包含它。
v-else 元素必须立即跟在 v-if 或 v-show 元素的后面——否则它不能被识别。
不同的是有 v-show 的元素会始终渲染并保持在 DOM 中。v-show 是简单的切换元素的 CSS 属性 display。

注意 v-show 不支持 <template> 语法。

在切换 v-if 块时，Vue.js 有一个局部编译/卸载过程，因为 v-if 之中的模板也可能包括数据绑定或子组件。
v-if 是真实的条件渲染，因为它会确保条件块在切换当中合适地销毁与重建条件块内的事件监听器和子组件。
v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——在条件第一次变为真时才开始局部编译（编译会被缓存起来）。
相比之下，v-show 简单得多——元素始终被编译并保留，只是简单地基于 CSS 切换。
一般来说，v-if 有更高的切换消耗而 v-show 有更高的初始渲染消耗。
因此，如果需要频繁切换 v-show 较好，如果在运行时条件不大可能改变 v-if 较好。

--------------------------------------------------------
因为 JavaScript 的限制，Vue.js 不能检测到下面数组变化：

直接用索引设置元素，如 vm.items[0] = {}；
修改数据的长度，如 vm.items.length = 0。
为了解决问题 (1)，Vue.js 扩展了观察数组，为它添加了一个 $set() 方法：

// 与 `example1.items[0] = ...` 相同，但是能触发视图更新
example1.items.$set(0, { childMsg: 'Changed!'})
至于问题 (2)，只需用一个空数组替换 items。

除了 $set()， Vue.js 也为观察数组添加了 $remove() 方法，用于从目标数组中查找并删除元素，在内部它调用 splice() 。因此，不必这样：

var index = this.items.indexOf(item)
if (index !== -1) {
  this.items.splice(index, 1)
}
只用这样：
this.items.$remove(item)
使用 Object.freeze()
在遍历一个数组时，如果数组元素是对象并且对象用 Object.freeze() 冻结，你需要明确指定 track-by。
在这种情况下如果 Vue.js 不能自动追踪对象，将给出一条警告。
--------------------------------------------------------

-----------------------------------
https://011.vuejs.org/guide/
-----------------------------------
Technically, Vue.js is focused on the ViewModel layer of the MVVM pattern.
It connects the View and the Model via two way data bindings.
Actual DOM manipulations and output formatting are abstracted away into Directives and Filters.
Vue 着眼于 ViewModel 层, 通过 双向绑定 连接 view/model.
将实际的 DOM 操作从 指令和过滤器 中抽离出来.

1. every Vue instance is a ViewModel.
  var vm = new Vue({ /* options */ })
2. The actual DOM that is managed by Vue instances.
  vm.$el // The View
3. A slightly modified plain JavaScript object.
  vm.$data // The Model
  In Vue.js, models are simply plain JavaScript objects, or data objects.
  Vue instances proxy all properties on data objects they observe.
  So once an object { a: 1 } has been observed, both vm.$data.a and vm.a will return the same value,
  and setting vm.a = 2 will modify vm.$data.
4. Component
  In Vue.js, every component is simply a Vue instance
  组件的构建方式也可以说名 组件就是 vue 实例: Vue.extend
  简化: Vue.component(id, constructor)

For security reasons, in inline expressions you can only access properties and methods
present on the current context Vue instance and its parents.


It is important to understand the difference between Vue.extend() and Vue.component().
Since Vue itself is a constructor, Vue.extend() is a class inheritance method.
Its task is to create a sub-class of Vue and return the constructor.
Vue.component(), on the other hand, is an asset registration method similar to Vue.directive() and Vue.filter().
Its task is to associate a given constructor with a string ID so Vue.js can pick it up in templates.
When directly passing in options to Vue.component(), it calls Vue.extend() under the hood.

--------------------------------
HTML attributes are case-insensitive. When using camelCased prop names as attributes,
 you need to use their hyphenated equivalents:

Vue.component('child', {
  props: ['myMessage'],
  template: '<span>{{myMessage}}</span>'
})

<!-- important: use hyphenated names! -->
<child my-message="hello!"></child>
--------------------------------
