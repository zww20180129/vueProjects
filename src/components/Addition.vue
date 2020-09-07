<template>
  <div>
    <h3>
      当前最新的count值为:
      <span style="color:red;">{{$store.state.count}}</span>
    </h3>
    <hr />
    <h4>
      用getters获取的返回值:
      <span style="color:green;">{{$store.getters.showNum}}</span>
    </h4>
     <hr />
    <button @click="addFun">+1</button>
    <button @click="addFunN">+N</button>
    <button @click="addFun3">+1 Async</button>
    <button @click="btnHandle">+N Async</button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    addFun() {
      //在这里触发mutations的第一种方式
      this.$store.commit('add')
    },

    addFunN() {
      //commit的作用 就是调用某个 mutations操作
      this.$store.commit('addN', 3)
    },
    addFun3() {
      //这里的dispatch函数 专门来触发action
      this.$store.dispatch('addAsync')
    },
    btnHandle() {
      this.$store.dispatch('addNAsync', 5)
    }
  }
}
</script>

<style   scoped>
</style>