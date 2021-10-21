<template>
    <div class="son">
        <Child></Child>
    </div>
</template>

<script>
    import Child from './Child.vue'
    export default {
        name: 'Son',
        components:{Child}
    }
</script>

<style lang="css" scoped="">
    .son{
        background: pink;
    }
</style>