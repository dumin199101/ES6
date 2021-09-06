<template>
  <div class="movie-container">
    <h3>Movie 组件</h3>
    <hr>
    <div>{{$route.params.id}}---{{id}}</div>
    <div>{{$route.fullPath}}</div>
    <div>{{$route.path}}</div>
    <div>{{$route.query}}</div>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  props:["id"]
}
</script>

<style lang="less" scoped>
.movie-container {
  min-height: 200px;
  background-color: lightsalmon;
  padding: 15px;
}
</style>
