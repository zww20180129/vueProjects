<template>
  <div class="page-component-scroll">
    <el-backtop target=".page-component-scroll"></el-backtop>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'BackTop',
  components: {},
}
</script>
<style  scoped>
.page-component-scroll {
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-x: hidden;
}
</style>