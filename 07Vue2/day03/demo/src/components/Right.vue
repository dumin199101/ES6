<template>
    <div>
        <h3>This is Right Region</h3>
        <button @click="add">给组件值加10</button>
        <p>{{num}}</p>
        <GrandSon></GrandSon>
    </div>

</template>

<script>
    import GrandSon from '@/components/GrandSon.vue'
    export default {
        data(){
            return {
                num:0
            }
        },
        methods:{
            add(){
                this.num += 10;
            }
        },
        activated(){
            console.log("组件被激活")
        },
        deactivated(){
            console.log("组件被缓存")
        },
        components:{
            GrandSon
        }
    }
</script>

<style lang="less" scoped="">
    h3{
        color:lime;
    }
</style>