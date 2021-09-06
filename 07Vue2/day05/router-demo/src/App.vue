<template>
  <div class="app-container">
    <h1>App 根组件</h1>

    <router-link to="/home">首页</router-link>
    <router-link to="/movie/1?browseCount=10&limit=10">电影1</router-link>
    <router-link to="/movie/2">电影2</router-link>
    <router-link to="/movie/3">电影3</router-link>
    <router-link to="/about">关于</router-link>

    <hr />

    <router-view></router-view>
  </div>
</template>

<script>



export default {
  name: 'App',
}
</script>

<style lang="less" scoped>
.app-container {
  background-color: #efefef;
  overflow: hidden;
  margin: 10px;
  padding: 15px;
  > a {
    margin-right: 10px;
  }
}
</style>
