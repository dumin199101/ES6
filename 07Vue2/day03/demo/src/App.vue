<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <div>
            <button @click="changeColor">改变书名颜色</button>
        </div>
        <Article>
            <template #header="{title}">
                <h3>{{title}}</h3>
            </template>
            <template #content="{article}">
                <h1 v-color="color">书名：{{article.title}}</h1>
                <h3>价格：{{article.price}}</h3>
                <p>颜色：{{article.color}}</p>
            </template>
            <template v-slot:footer>
                <div>底部区域</div>
            </template>
        </Article>
        <Left @passMsg="getMsg"/>
        <MyCount :init="initLeftValue"/>
        <p>
            <button @click="showCom">展示右侧组件</button>
            <button @click="hideCom">隐藏右侧组件</button>
        </p>
        <keep-alive>
            <component :is="show"></component>
        </keep-alive>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import Left from '@/components/Left.vue'
    import Right from '@/components/Right.vue'
    import Article from '@/components/Article.vue'

    export default {
        name: 'App',
        components: {
            HelloWorld,
            Left,
            Right,
            Article
        },
        directives:{
           'color':{
               bind(el,binding){
                   el.style.color = binding.value;
               },
               update(el,binding){
                   el.style.color = binding.value;
               }
           }
        },
        data() {
            return {
                initLeftValue: 10,
                show: Right,
                color:'red'
            }
        },
        methods: {
            getMsg(val) {
                console.log(val);
            },
            showCom() {
                this.show = Right
            },
            hideCom() {
                this.show = Left
            },
            changeColor(){
                this.color = 'yellow'
            }
        },
        provide:{
           "appname":"BingBingPang"
        },
        async created() {
            const {data: res} = await this.$http.get('data.php')
            console.log(res)
        }
    }
</script>

<style lang="less">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
