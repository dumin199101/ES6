# day01

## 项目案例
1. 新建空白目录，执行npm init -y命令，初始化包管理配置文件pacage.json
2. 新建src目录，存放源代码
3. 运行npm install jquery -S命令，安装jQuery
4. 使用ES6语法导入jQuery
5. 初始化文件结构：ul > li{第 $ 个li元素} * 9

## 项目安装webpack
1. 执行命令，安装webpack两个相关的包：
   npm i webpack@5.42.1 webpack-cli@4.7.2 -D

## 项目中配置webpack
1. 项目根目录中创建webpack.config.js的配置文件
   module.exports = {
       mode: "development"
   }
   开发时用development模式,上线时用production模式
2. 在package.json的scripts节点下，新增dev脚本
   "scripts": {
       "dev": "webpack"
    }
3. 终端运行npm run dev,对项目进行打包构建
   在根目录下生成dist文件夹，文件夹下生成main.js
   main.js中合并index.js跟jquery.js

## webpack中的默认约定
1. 默认打包入口文件为src->index.js
2. 默认输出文件为dist->main.js
3. 在配置文件中配置入口文件跟输出文件：
const path = require("path")
module.exports = {
    "mode": "development",
    "entry": path.join(__dirname,"./src/index.js"),
    "output": {
        "path": path.join(__dirname,"dist"),
        "filename": "bundle.js"
    }
}

## webpack中的插件
1. webpack-dev-server: 修改源代码，项目自动打包构建
下载：
npm install webpack-dev-server@3.11.2 -D
配置：
"scripts": {
    "dev": "webpack serve"
},
module.exports = {
    "devServer": {
        open: true,
        port: 8088,
        host: "127.0.0.1"
    }
}
注意：
实时打包构建生成的文件存储在内存中

2. html-webpack-plugin
下载：
npm install html-webpack-plugin@5.3.2 -D
配置：
const HtmlPlugin = require("html-webpack-plugin")
const htmlplugin = new HtmlPlugin({
        "template": "./src/index.html",
        "filename": "./index.html"
    })
module.exports = {
    "plugins": [htmlplugin]
}

3.clean-webpack-plugin: 自动删除已存在的dist文件夹
下载：
npm install --save-dev clean-webpack-plugin
配置：
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const  cleanwebpackplugin = new CleanWebpackPlugin();
module.exports = {
    "plugins": [cleanwebpackplugin]
}

## webpack中的loader
作用：webpack默认只能打包.js文件，通过不同loader加载器可以打包其它类型文件。

### css加载器
1.npm i style-loader@3.0.0 css-loader@5.2.6 -D
2.webpack.config.js中配置module->rules数组匹配规则
"module":{
    "rules":[
        {"test":/\.css$/,"use":["style-loader","css-loader"]}
    ]
}
loader加载器调用顺序：从后向前

### less加载器
1.npm i less-loader@10.0.1 less@4.1.1 -D
2.webpack.config.js中配置module->rules数组匹配规则
"module":{
    "rules":[
        {"test":/\.less$/,"use":["style-loader","css-loader","less-loader"]}
    ]
}

### 图片加载器
1.npm i url-loader@4.1.1 file-loader@6.2.0 -D
2.webpack.config.js中配置module->rules数组匹配规则
"module":{
        "rules":[
            {"test":/\.png|.jpg|.gif$/,"use":["url-loader?limit=30000"]},
        ]
    }
limit参数：指定图片大小，只有小于设定参数，才会被转为base64格式

### babel加载器
作用：处理js高级语法
1.npm i babel-loader@8.2.2 @babel/core@7.14.6 @babel/plugin-proposal-decorators@7.14.5 -D
2.webpack.config.js中配置module->rules数组匹配规则
"module":{
    "rules":[
        {"test":/\.js$/,"use":["babel-loader"],"exclude":/node_modules/},
    ]
}
3.在项目根目录下创建babel.config.js
module.exports = {
    plugins:[
        [
            '@babel/plugin-proposal-decorators',
            {legacy:true}
        ]
    ]
}

//装饰器
function info(target){
    target.info = 'Person info';
}

@info
class Person{}

console.log(Person.info)


## 导入样式、图片
在webpack中一切皆模块
import './css/index.css'
import './css/index.less'
import logo from './images/logo.png'

## 打包发布
1.在package.json的scripts节点下，新增build脚本
  "scripts": {
    "build": "webpack --mode production"
  }
  --mode production  生成的文件在磁盘中，会对文件进行压缩
  --mode development 生成的文件在磁盘中，不会对文件进行压缩
  serve 生成的文件在内存中（优先级高）
2.发布完成的文件，会打包到dist文件夹中

## 优化图片及js存放路径
"output": {
    "path": path.join(__dirname, "dist"),
    "filename": "js/bundle.js"
},
"module":{
    "rules":[
        {"test":/\.png|\.jpg|\.gif$/,"use":["url-loader?limit=30000&outputPath=images"]},
    ]
}

## 配置SourceMap
开发环境下，推荐在webpack.config.js中添加如下配置，保证运行时报错的行数跟源文件保持一致。
module.exports = {
    "devtool":"eval-source-map"
}
设置值：
   nosource-source-map:能看到行号，看不到源代码（生产环境）
   eval-source-map:能看到行号跟源代码（开发环境）

## @标识符
@ 表示src源代码目录
在webpack.config.js中添加如下配置:
"resolve":{
    "alias":{
        "@":path.join(__dirname,"./src/")
    }
}

# day02

## vue基础

Vue定义：Vue是构建用户界面的前端框架

Vue特性：1.数据驱动视图 2.双向数据绑定

MVVM模型：Model-View-ViewModel

    Model:当前页面渲染时所依赖的数据
    View:当前页面渲染的DOM结构
    ViewModel:Vue实例，MVVM的核心

## Vue指令

### 内容渲染指令

1.v-text
2.插值表达式{{}}
3.v-html

### 属性绑定指令

1.v-bind
完整形式：<input type="text" v-bind:value="username" name="username">
简写形式：<input type="text" :value="address" name="address">

### 事件绑定指令
1.v-on
<button @click="clickMe">点击我</button><br/>
<button @click="clickMe2">敲我</button><br/>
<button @click="clickMe3(1,$event)">来打我啊</button><br/>
const app = new Vue({
        el:'#app',
        methods:{
            clickMe(){
                console.log("我被点击了")
            },
            clickMe2:function(){
                console.log("我被敲了一下")
            },
            clickMe3:(n,e)=>{
                console.log("傻逼，来打我啊")
                console.log(e);
            }
        }
})

2.事件修饰符
  .prevent 阻止默认行为
  .stop 停止冒泡
3.事件对象 $event


### 双向绑定指令
1.v-model
2.v-model指令修饰符
  .number 转换数字
  .trim 去除空白
  .lazy 取代input监听change事件
  <p>
      <input type="text" v-model.number="n1"> + <input type="text" v-model.number="n2"> = {{n1+n2}}
  </p>


### 条件渲染指令
1.v-if v-if-else v-else
2.v-show

### 列表渲染指令
1.v-for
**绑定key属性,唯一性**
<ul v-for="(student,index) in students" :key="student.id">
      <li>索引：{{index}}-姓名：{{student.name}}-年龄：{{student.age}}-城市：{{student.city}}</li>
</ul>

# day03

## 过滤器

注意：只能在Vue2中使用

作用：过滤器是vue为开发者提供的功能，常用在文本格式化，类似于linux中的管道，过滤器只能用在插值表达式跟v-bind属性绑定中。

### 局部过滤器

```html
<div id="app">{{msg|capital}}</div>
```

```javascript

<script>
    const app = new Vue({
        el:'#app',
        data: {
            msg:"hello Vue!"
        },
        filters:{
            upper(value) {
                return value.toUpperCase();
            },
            capital(value){
                return value.charAt(0).toUpperCase() + value.substring(1);
            }
        }
    })
</script>
```

### 全局过滤器

全局过滤器必须在Vue实例之前注册

```javascript

Vue.filter('capital',function (value) {
        return value.charAt(0).toUpperCase() + value.substring(1);
    })

const app = new Vue({
    el:'#app',
    data: {
        msg:"hello Vue!"
    }
})

```

## 侦听器

作用：监听数据变化

函数方式侦听器：值变化触发一次
对象方式侦听器：immediate选项自动触发一次

```javascript

<script>
    const app = new Vue({
            el:'#app',
            data: {
                msg:"hello Vue!",
                username:"admin"
            },
            watch:{
                msg:(newV,oldV)=>{
                    console.log(newV,oldV)
                },
                username:{
                    handler(v1,v2){
                        console.log(v1,v2)
                    },
                    immediate:true
                }
            }
</script>

```

## 计算属性

作用：经过计算后得到的属性值
```javascript
const app = new Vue({
        el:'#app',
        data: {
            value1:0,
            value2:0
        },
        computed:{
            getSum() {
                return this.value1 + this.value2;
            }
        }
 })
```

## axios

axios返回值是一个Promise对象，then(function(data){}):成功回调，catch(function(error){}):失败回调

如果某个方法的返回值是Promise，那么这个方法可以用await修饰。

await只能用在被async修饰的方法中
```javascript
axios({
  method:'GET',
  url:'',
  params:{},
  data:{}
})

axios.get('http://localhost:8080/data.php')
        .then(result=>console.log(result))
        .catch(error=>console.log(error))

window.onload = async function(){
        // 解构赋值 data重命名为res
        const {data:res} = await axios.get('http://localhost:8080/data.php');
        console.log(data);
}
```

## vue-cli

单页面应用程序（SPA）：一个Web网站中，只有一个HTML页面。

### 安装vue-cli
npm install -g @vue/cli

### 查看版本vue
vue -V

### 创建项目
vue create 项目名称

src目录：
  assets 静态资源
  components 组件
  main.js 入口文件
  App.vue 根组件（UI结构）

vue项目运行流程
  通过main.js把App.vue渲染到index.html的指定区域中


# day04

## 组件

定义：可复用的HTML结构

### 定义组件
   template:组件的模板结构【定义UI】
   ```html
   <template>
     <div id="app">
       <img alt="Vue logo" src="./assets/logo.png">
       <HelloWorld msg="Welcome to Your Vue.js App"/>
     </div>
   </template>
   ```

   style:组件的样式【定义样式】
   ```html
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
   ```

   script:组件的行为【定义数据、方法】
   ```javascript
   <script>
   export default {
     data(){
        return {
          msg:"hello demo"
        }
     },
     methods(){
        sayHi(){
           console.log("Hi")
        }
     }
   }
   </script>
   ```

注意：
   vm实例的$mount()方法可替代el属性
   vue组件中只能有一个根元素
   启用less语法：<style lang="less">
   组件数据定义时用data方法返回一个对象

### 使用组件

1.导入组件
```javascript
import Left from '@/components/Left.vue'
```
2.注册组件
```javascript
export default {
  name: 'App',
  components: {
    Left
  }
}
```
3.使用组件
```html
<div id="app">
    <Left/>
</div>
```

### 注册全局组件

在main.js入口文件中，通过Vue.component()方法，可以注册全局组件
Vue.component('MyCount',Count)


### 组件的props属性

父组件向子组件传值
<MyCount :init="initLeftValue"/>

子组件通过自定义属性接收来自父组件的值
方式一：
props:["init"]
方式二：
props:{
    "自定义属性":{
       default:"默认值",
       type:"值类型",
       required:true
    }
}

注意：props中的自定义属性是只读的,通过其他值进行转存
```javascript
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
        }
}
```

### 组件之间的样式冲突

默认情况下，写在.vue组件中的样式全局生效，容易造成多个组件中样式冲突

解决：添加scoped属性
<style scoped lang="less">
    h1{
        color:yellow;
    }
</style>

### 组件生命周期

生命周期函数：
   beforeCreate 创建之前
   created 组件已创建 【props、data、methods此时都可使用，数据初始化一般在此完成】
   beforeMount 渲染之前
   mounted  组件已渲染【可操作DOM结构】
   beforeUpdate 数据修改之前
   updated 数据已修改
   beforeDestory 销毁之前
   destoryed 组件已销毁

### 组件数据共享

1.父组件向子组件传递数据
使用props自定义属性
子组件：通过props自定义属性接收数据
```javascript
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
        }
}
```
父组件：通过属性绑定指令传递数据
<MyCount :init="initLeftValue"/>

2.子组件向父组件传递数据
使用自定义事件
子组件：通过$emit触发自定义事件
```html
<template>
    <div>
        <h1>This Left Region</h1>
        <button @click="say">子组件向父组件传递数据</button>
    </div>
</template>
```
```javascript
<script>
    export default {
        data(){
            return {
                msg:"Hello Left"
            }
        },
        methods:{
            say(){
               this.$emit("passMsg",this.msg)
            }
        }

    }
</script>
```
父组件：通过事件绑定指令监听自定义事件接收传递数据
<Left @passMsg="getMsg"/>
```javascript
export default {
  name: 'App',
  components: {
    HelloWorld,
    Left
  },
  data(){
      return {
          initLeftValue:10
      }
  },
  methods:{
      getMsg(val){
          console.log(val);
      }
  }
}
```

3.兄弟组件传递数据
使用eventBus
```javascript
import Vue from 'vue';
export default new Vue()
```

组件1：使用$emit()触发事件，发送数据
```javascript
sendMsg(){
    bus.$emit("sendMsg",this.msg)
}
```
组件2：使用$on()监听事件，接收数据
```javascript
created(){
    bus.$on('sendMsg',(msg)=>{
        console.log("接收来自兄弟组件的数据："+msg);
    })
}
```
# day05

## ref引用

作用：获取DOM元素
```html
<p ref="counter">{{count}}</p>
```
```javascript
this.$refs.counter.style.color = 'red';
```
## $nextTick(callback)

作用：将回调函数延迟在下一次DOM渲染完成后执行

## es6 数组
    ```javascript
    const arr1 = [1, 2, 5, 7, 8]
    const arr2 = [2, 4, 6, 8, 10]
    // 1.concat(arr1,arr2,...arrN)方法:合并多个数组，返回合并后的新数组
    const arr3 = arr1.concat(arr2)
    console.log(arr3);
    // 2.every(callback[,argsN])方法：检测数组中的每一项是否通过callback检查，通过返回true，不通过返回false
    const bool = arr1.every(item => item >= 2)
    console.log(bool)
    // 3.filter(callback[,argsN])方法：返回通过callback检查的所有元素
    const arr4 = arr1.filter(item => item >= 5)
    console.log(arr4)
    // 4.find(callback[,argsN])方法：返回通过callback检查的第一个元素
    const val = arr1.find(item => item > 6)
    console.log(val)
    // 5.findIndex(callback[,argsN])方法：返回通过callback检查的第一个元素的索引
    const index = arr1.findIndex(item => item > 6)
    console.log(index)
    // 6.includes(searchElement[,fromIndex])方法：查找数组中是否包含某个元素
    const bool2 = arr1.includes(5)
    console.log(bool2)
    // 7.indexOf(searchElement[,fromIndex])方法：查找数组中给定元素的索引值
    const val2 = arr1.indexOf(5)
    console.log(val2);
    // 8.join(seperator=','):将数组元素连接成字符串
    const str1 = arr1.join()
    console.log(str1)
    // 9.pop(),shift()：数组的首尾删除元素,返回被删除的元素
    const val3 = arr1.pop()
    console.log(val3)
    const val4 = arr1.shift()
    console.log(val4)
    console.log(arr1)
    // 10.push(),unshift():数组的首尾添加元素,返回添加后新数组长度
    arr1.push(20, 30)
    arr1.unshift(40, 50)
    console.log(arr1)
    // 11.map(callback[,argsN]):对数组中的每一项进行callback处理，每一项返回值组成一个新数组
    const arr5 = arr2.map(item => item * 2)
    console.log(arr5)
    // 12.reduce(callback[,initVal]):对数组中的每一项进行callback处理，每一项返回值进行合并处理，返回一个新值
    const val5 = arr2.reduce((sum, item) => {
        return sum + item
    }, 0)
    console.log(val5)
    // 13.reverse():数组反转,原数组上进行反转
    arr2.reverse()
    console.log(arr2)
    // 14.slice([begin,end]):数组截取
    const arr7 = arr2.slice(1, 4)
    console.log(arr7)
    // 15.sort(callback):按照规则数组进行排序
    const arr8 = [1, 9, 10, 2, 5].sort((v1, v2) => {
        return v1 - v2 //升序
    })
    console.log(arr8)
    // 16.splice(start[,deleteCount,arr1,arr2...arrN]):对数组中从start位置开始，删除deleteCount个元素，然后添加arr1...arrN个元素
    arr2.splice(1, 2, 3, 5, 7, 9)
    console.log(arr2)

    //push、 shift、 pop、 unshift、 reverse、 sort、 splice方法会对原来的数组进行修改，其他的数组操作方法只有返回值不同，对原数组都没有影响，即原数组不变。
    ```

# day06

## 动态组件

定义：动态的切换组件的显示与隐藏

使用<component></component>标签做占位符，绑定is属性，控制要展示的组件
```html
<component :is="show"></component>
```
### 动态组件缓存
使用<keep-alive></keep-alive>标签对组件进行缓存，保持状态值。
```html
<keep-alive>
    <component :is="show"></component>
</keep-alive>
```
组件缓存相关生命周期函数：activated,deactivated

activated:组件创建跟激活的时候都会触发
deactivated:组件缓存的时候触发
```javascript
activated(){
        console.log("组件被激活")
    },
deactivated(){
        console.log("组件被缓存")
    }
```
keep-alive标签提供include属性跟exclude属性，可以指定缓存的组件，多个组件用逗号分隔。
```html
<keep-alive include="Left,Right">
    <component :is="show"></component>
</keep-alive>
```

组件声明时，提供name属性可以用在include属性中，而非组件注册时的名称。
```javascript
export default {
  name: 'HelloWorld'
}
```

## 插槽
slot允许开发者封装组件时允许把用户自定义部分定义为插槽。
插槽指令：v-slot,v-slot:title 简写形式：#title

### 具名插槽
 给插槽起名,根据名字使用插槽，插槽默认name值为default
```html
<div id="header">
    <slot name="header"></slot>
</div>

<template #header>
    <h3>Hello,Vue</h3>
</template>
```

### 作用域插槽
 给插槽绑定属性,使用作用域插槽时，解构赋值{title:"Hello"},title的值就是Hello
 ```html
 <div id="header">
     <slot name="header" :title="title"></slot>
 </div>

 <template #header="{title}">
     <h3>{{title}}</h3>
 </template>
 ```

插槽实例：
```html
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
```

App.vue
```html
<Article>
    <template #header="{title}">
        <h3>{{title}}</h3>
    </template>
    <template #content="{article}">
        <h1>书名：{{article.title}}</h1>
        <h3>价格：{{article.price}}</h3>
        <p>颜色：{{article.color}}</p>
    </template>
    <template v-slot:footer>
        <div>底部区域</div>
    </template>
</Article>
```

## 自定义指令

### 局部自定义指令
```javascript
directives:{
    'color':{
         bind(el,binding){
             el.style.color = binding.value;
         },
         update(el,binding){
             el.style.color = binding.value;
         }
      }
}
```
当DOM重新渲染时，触发update函数，当组件第一次渲染时，触发bind函数
bind函数跟update函数逻辑相同时，可简写为function形式


### 全局自定义指令
```javascript
Vue.directive('color',function(el,binding){
   el.style.color = binding.value;
})
```

## eslint

作用：规范代码风格，Javascript代码规范检查工具。

## Vue封装axios

封装：
1.避免组件中重复导入工作
2.使用baseURL,减少冗余
```javascript
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8080'
Vue.prototype.$http = axios
```

使用：
```javascript
async created() {
    const {data: res} = await this.$http.get('data.php')
    console.log(res)
}
```

# day07

## 路由

定义：Hash地址与组件之间的对应关系

### vue-router入门

vue-router是vue.js官方给出的路由解决方案。它只能结合vue项目进行使用，能够轻松的管理SPA项目中组件的切换。

1.安装vue-router
npm i vue-router@3.5.2 -S
2.创建路由模块
```javascript
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter()

export default router
```
3.导入并挂载路由模块
```javascript
import router from '@/router/index.js'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
```
4.声明路由链接跟占位符
```html
<template>
  <div class="app-container">
    <h1>App 根组件</h1>

    <router-link to="/home">首页</router-link>
    <router-link to="/movie">电影</router-link>
    <router-link to="/about">关于</router-link>

    <hr />

    <router-view></router-view>
  </div>
</template>
```
5.声明路由配置规则
```javascript
const router = new VueRouter({
    routes:[
        {path:"/home",component:Home},
        {path:"/movie",component:Movie},
        {path:"/about",component:About},
    ]
})
```

### vue-router常见用法

1.路由重定向

```javascript
const router = new VueRouter({
    routes:[
        {path:"/",redirect:"/home"},
        {path:"/home",component:Home},
        {path:"/movie",component:Movie},
        {path:"/about",component:About},
    ]
})
```

2.嵌套路由

```html
<template>
  <div class="about-container">
    <h3>About 组件</h3>
    <router-link to="/about/tab1">Tab1</router-link>
    <router-link to="/about/tab2">Tab2</router-link>
    <hr/>
    <router-view></router-view>
  </div>
</template>
```

```javascript
const router = new VueRouter({
    routes:[
        {path:"/",redirect:"/home"},
        {path:"/home",component:Home},
        {path:"/movie",component:Movie},
        {
            path:"/about",
            component:About,
            redirect:"/about/tab1",
            children:[
                {path:"tab1",component:Tab1},
                {path:"tab2",component:Tab2}
            ]
        },
    ]
})
```

3. 动态路由匹配

```javascript
{path:"/movie/:id",component:Movie,props:true}
```

$route:路由参数对象

通过$route.params对象跟props都可以接收路由参数

```html
<div>{{$route.params.id}}---{{id}}</div>
<div>{{$route.fullPath}}</div>
<div>{{$route.path}}</div>
<div>{{$route.query}}</div>
```

```shell
1---1
/movie/1?browseCount=10&limit=10
/movie/1
{ "browseCount": "10", "limit": "10" }
```

4. 路由导航对象

$router:路由导航对象

方法：
  push(path) 跳转到指定hash地址，并增加一条历史记录
  replace(path) 跳转到指定的hash地址并替换掉当前的历史记录
  go(num) 实现导航历史前进、后退
  forward() 前进
  back() 后退


5. 导航守卫

导航守卫可以控制路由的访问权限

```javascript
router.beforeEach((to,from,next)=>{
    if(to.path==='/home'){
        const token = localStorage.getItem("token")
        if(token){
            next()
        }else{
            next('/login')
        }
    }else{
        next()
    }
})
```

# day08

## Flex布局

Flex布局简称流式布局，有两条轴，Main轴（横轴）跟Cross轴（纵轴）

### flex-direction

作用：决定主轴的方向（即项目的排列方向）。

取值：

row(默认)  主轴为水平方向，起点在左端。
row-reverse 主轴为水平方向，起点在右端。
column 主轴为垂直方向，起点在上沿。
column-reverse 主轴为垂直方向，起点在下沿。

### flex-wrap

作用：默认情况下，项目都排在一条线（又称”轴线”）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。

取值：

nowrap:不换行（默认）
wrap:换行,第一行在上方
wrap-reverse:反向换行，第一行在下方

### flex-flow

作用：flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

### justify-content

作用：定义了项目在主轴上的对齐方式。

取值：
flex-start 左对齐（默认）
flex-end 右对齐
center 居中
space-between 两端对齐，项目之间的间隔都相等。
space-around 每个项目两侧的间隔相等。

### align-items

作用：定义了项目在交叉轴上的对齐方式。

取值：
flex-start 交叉轴的起点对齐。
flex-end 交叉轴的终点对齐。
center 交叉轴的中点对齐。
baseline 项目的第一行文字的基线对齐。
stretch 如果项目未设置高度或设为auto，将占满整个容器的高度(默认)

