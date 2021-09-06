<template>
    <div>
        <h1>This Left Region</h1>
        <button @click="say">子组件向父组件传递数据</button>
        <button @click="sendMsg">向兄弟组件传递数据</button>
    </div>
</template>

<script>
    import bus from './eventBus'

    export default {
        data(){
            return {
                msg:"Hello Left..."
            }
        },
        methods:{
            say(){
               this.$emit("passMsg",this.msg)
            },
            sendMsg(){
                bus.$emit("sendMsg",this.msg)
            }
        }

    }
</script>

<style scoped lang="less">
    h1{
        color:yellow;
    }
</style>