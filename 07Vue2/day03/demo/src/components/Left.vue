<template>
    <div>
        <h1>This Left Region</h1>
        <button @click="say">子组件向父组件传递数据</button>
        <button @click="sendMsg">向兄弟组件传递数据</button>
        <button @click="publish">pub发送数据</button>
        <p>{{x}}--{{y}}</p>
    </div>
</template>

<script>
    import bus from './eventBus'
    import mixin from '../mixin'
    import pubsub from 'pubsub-js'

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
            },
            publish(){
                pubsub.publish('hi','Hello Vue!!!')
            }
        },
        mixins:[mixin],
        mounted(){
            this.add()
        }

    }
</script>

<style scoped lang="less">
    h1{
        color:yellow;
    }
</style>