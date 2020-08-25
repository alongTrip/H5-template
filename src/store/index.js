import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // mapState 辅助函数  相当于是state的语法糖 在组将的 computed: {} 计算属性中使用 当需要使用多个多个状态的时候 mapState 函数返回的是一个对象
    // 使用方式如下: 1.
    /* computed: mapState({
      // 这个是 ES6 的箭头函数形式
      count: state => state.count
      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countPlusLocalState (state) {
        return state.count + this.localCount
      }
    })
    2.
    computed: mapState([
      // 映射 this.count 为 store.state.count
      'count'
    ])
    3. 多个属性合并为一个对象 需要使用到 对象展开运算符
    computed: {
      localComputed () { },
      // 使用对象展开运算符将此对象混入到外部对象中
      ...mapState({
        // ...
      })
     } */
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
