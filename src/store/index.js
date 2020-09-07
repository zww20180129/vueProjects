import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //这里定义全局共享的数据
    count: 0

  },
  /*
    使用mutations来修改state里面的公共数据,
    只有mutations中定义的函数才有权利修改state中的数据
  */
  mutations: {
    add(state) {
      state.count++;
    },
    //step是接收外面传的参数
    addN(state, step) {
      //改变
      state.count += step
    },
    sub(state) {
      state.count--
    },
    subN(state, step) {
      state.count -= step
    }
  },

  //这里写异步调用的方法
  actions: {
    addAsync(context) {
      setTimeout(() => {
        //在actions中不能直接修改state中的数据 必须通过context.commit()触发某个mutation才行
        context.commit('add')
      }, 1000);
    },
    addNAsync(context, step) {
      setTimeout(() => {
        context.commit('addN', step)
      }, 1000)
    },
    subAsync(context) {
      setTimeout(() => {
        context.commit('sub')
      }, 1000)
    },
    subNAsync(context, step) {
      setTimeout(() => {
        context.commit('subN', step)
      }, 1000)
    }
  },
  getters: {
    showNum(state) {
      return '当前最新的数量是【' + state.count + '】'
    }
  }
})
