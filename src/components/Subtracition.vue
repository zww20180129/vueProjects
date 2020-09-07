<template>
  <div>
    <h3>
      当前最新的count值为:
      <span style="color:red;">{{count}}</span>
    </h3>
    <hr />
    <h4>
      当前使用getters获取的返回值:
      <span style="color:green;">{{showNum}}</span>
    </h4>

    <button @click="btnHander">-1</button>
    <button @click="btnHanderN">N</button>
    <!-- <button @click="btnHanderAsync">-1 Async</button> -->
    <!-- 也可以这样写 -->
    <button @click="subAsync">-1 Async</button>
    <button @click="subNAsync(2)">异步-N Async</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },

  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },
  methods: {
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subAsync', 'subNAsync']),
    btnHander() {
      this.sub()
    },
    btnHanderN() {
      this.subN(3)
    },
    btnHanderAsync() {
      this.subAsync()
    }
  }
}
</script>
<style   scoped>
</style>