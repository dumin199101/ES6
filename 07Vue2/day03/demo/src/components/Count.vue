<template>
    <div>
        <h2>Count全局组件</h2>
        <p ref="counter">{{count}}</p>
        <p><button @click="add()">值+1</button></p>
    </div>
</template>

<script>
    import bus from './eventBus'
    export default {
        props:["init"],
        data(){
            return {
                count:this.init
            }
        },
        methods:{
            add(){
                return this.count = this.count + 1;
            }
        },
        created(){
            bus.$on('sendMsg',(msg)=>{
                console.log("接收来自兄弟组件的数据："+msg);
            })
        },
        mounted(){
            this.$refs.counter.style.color = 'red';
        }
    }

</script>

<style lang="less" scoped="">
    h2{
        color:pink;
    }
</style>