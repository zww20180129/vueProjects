<template>
  <div class="app"></div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      beginTime: '',
      endTime: '',
    }
  },
  methods: {
    //获取过去一周的日期
    initTime() {
      this.beginTime = this.$moment()
        .week(this.$moment().week() - 1)
        .startOf('week')
        .format('YYYY-MM-DD HH:mm:ss')
      this.endTime = this.$moment()
        .week(this.$moment().week() - 1)
        .endOf('week')
        .format('YYYY-MM-DD HH:mm:ss')
      console.log(this.beginTime)
      console.log(this.endTime)
    },
  },
  created() {
    this.initTime()
  },
}
</script>
