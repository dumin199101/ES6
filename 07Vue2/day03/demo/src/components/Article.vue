<template>
    <div id="article-container">
        <div id="header">
            <slot name="header" :title="title"></slot>
        </div>
        <div id="content">
            <slot name="content" v-for="article in articles" :article="article"></slot>
        </div>
        <div id="footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                title:"Hello Vue.js",
                articles:[
                    {title:"武松打虎",price:300,color:"彩色"},
                    {title:"邦锦美朵",price:100,color:"彩色"},
                    {title:"草船借箭",price:200,color:"黑白色"},
                    {title:"三打白骨精",price:300,color:"彩色"},
                ]
            }
        }
    }
</script>

<style lang="less" scoped="">
    #article-container {
        div{
            min-height: 100px;
        }
        #header {
            background: pink;
        }
        #content {
            background: lime;
        }
        #footer {
            background: lightblue;
        }
    }
</style>