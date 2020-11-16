<template>
  <div class="demoOne">
	  <div>DemoOne页面<div>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </div>
</template>

<script>
export default {
  name: 'DemoOne',
}
</script>