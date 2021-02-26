import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters' // 导入响应的模块，*相当于引入了这个组件下所有导出的事例
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
  uid: '',
  lovePlay: [],
  index: 0,
  currentView: "MainShow",
  recommend: [],
  
}
let store = new Vuex.Store({
  state,    // 共同维护的一个状态，state里面可以是很多个全局状态
  getters,  // 获取数据并渲染
  actions,  // 数据的异步操作
  mutations  // 处理数据的唯一途径，state的改变或赋值只能在这里
});
// dispatch(提交actions)：含有异步操作；而commit只是同步操作，都是提交 mutation，因为只能在mutation中才能够改变state中的值，
// 然而mutation中只能进行同步操作，从而actions就出现了，
// actions允许异步和同步操作，但是对于actions的操作其实就是 提交mutation ；
export default store;