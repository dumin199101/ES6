<template>
    <div class="child">
        <h3>祖先组件传递过来的信息</h3>
        <h4>汽车品牌：{{car.name}}</h4>
        <h4>汽车价格：{{car.price}}</h4>
    </div>
</template>

<script>
    import {inject} from 'vue'
    export default {
        name: 'Child',
        setup(){
            let car = inject('car')
            return {car}
        }
    }
</script>

<style lang="css" scoped="">
    .child{
        background: lime;
    }
</style>