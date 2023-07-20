<template>
  <div class="view">
    <router-link to="/"> {{ title }}</router-link>
    <i class="el-icon-view"></i>
    <span>{{ vtimes }}次</span>
  </div>
</template>

<script>
export default {
  name: 'AlwaysArt',
  props: {
    title: {
      default: '',
      typeof: String
    },
    vtimes: {
      default: 0,
      typeof: Number
    }
  }
}
</script>

<style lang="less" scoped>
.view {
  width: 90%;
  height: 40px;
  margin: 0 auto;
  margin-top: 10px;
  line-height: 40px;

  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  i {
    padding: 0 2px 0px 8px;
  }
}
</style>
