var app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: '1',
        name: '操作系统',
        date: '2021-12-12',
        price: 11,
        counter: 1
      },
      {
        id: '2',
        name: '组成原理',
        date: '2011-12-12',
        price: 12,
        counter: 1
      },
      {
        id: '3',
        name: '计算机网络',
        date: '2012-12-12',
        price: 13,
        counter: 1
      },
    ]
  },
  methods: {
    getFinalPrice(price) {
      return '￥' + price.toFixed(2);
    },
    increment(index) {
      this.books[index].counter++;
    },
    decrement(index) {
      this.books[index].counter--;
    },
    removeHandler(index) {
      // 移除 index 所在的元素
      this.books.splice(index, 1);
    }
  },
  // 过滤器
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2);
    }
  },
  computed: {
    totalPrice() {
      /*return this.books.reduce(function (total, currentValue, currentIndex) {
        // console.log(total);
        // console.log(preValue);
        // console.log(currentIndex);
        return total + currentValue.price;
      }, 0)*/
      /*return this.books.reduce((x, y) => {
        // console.log(x);
        // console.log(y);
        return x.price + y.price;
      });*/
      // 必须赋值初始值 0
      return this.books.reduce(((total, cu) => total + cu.price * cu.counter), 0);
    }
  }
});