<template>
  <div class="about-container">
    <h3>About 组件</h3>
    <router-link to="/about/tab1">Tab1</router-link>
    <router-link to="/about/tab2">Tab2</router-link>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="less" scoped>
.about-container {
  min-height: 200px;
  background-color: skyblue;
  padding: 15px;
  > a {
    margin-right: 10px;
  }
}
</style>
