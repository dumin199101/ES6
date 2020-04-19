项目说明：

    Es6语法&NodeJS&Vue&React

    NodeJS:一个基于V8引擎的Javascript运行环境，独立于浏览器存在，基于操作系统。
    特点：基于事件驱动，单线程，异步非阻塞IO，跨平台。

    null与undefined的区别：
       null：空对象
       undefined：变量声明未初始化，函数未传参，函数没有返回值，对象没有赋值属性。

    JS难点：两链一包：作用域链，原型链，闭包
          原型链：
                每一个函数都有一个prototype属性，构造函数通过prototype属性指向实例原型
                javascript对象有一个属性叫__proto__,通过这个属性指向实例原型
                每个实例原型都有一个constructor属性指向构造函数
                ES5通过getPrototypeOf获取对象的实例原型

          call,apply,arguments:
            call跟apply作用相同，obj2可以通过call方法调用obj1的方法，类似于继承,第一个参数都是上下文对象,其余参数：call方法是参数列表，apply方法是参数数组
            obj1.method.call(obj2,arg1,arg2)
            实例：
            function Person(){this.name="lilei"}
            function Student(){Person.call(this)}
            var student = new Student();
            console.log(student.name);
            arguments对象代表形参数组列表
    JSON.stringify跟JSON.parse
        JSON.stringify:将js对象转换为JSON字符串
        JSON.parse:将JSON字符串解析为js对象

    JavaScript事件传播机制
       过程：捕获，目标，冒泡
       事件绑定：DOM元素绑定，动态绑定，addEventListener绑定（提供第三个参数，是否在捕获阶段触发）

    cnpm,npm:包管理工具
       全局安装cnpm：npm install cnpm -g
       切换淘宝镜像：npm install jquery --registry=https://registry.npm.taobao.org
       全局设置：npm config set registry  https://registry.npm.taobao.org
       查看设置：npm config list
       常用命令：npm init,npm install,npm uninstall

    第三方扩展：
       moment：时间处理
       nodemon：node监视器
       art-template:服务端模版引擎
       mysql:数据库

    commonJS规范：
       require：导入
       exports/module.exports：导出

    Ajax原生请求：
       var xhr = new XMLHttpRequest();
       xhr.onreadystatechange = function(){
          if(xhr.readystate == 4 && xhr.status == 200){

          }
       }
       xhr.open(method,url,async);
       xhr.send();

    ES6基础语法：
      ES6 == ECMAScript2015
      1.let声明变量：变量不会提前声明,拥有块级作用域
           变量声明未提前demo：
           <script>
                 var scope = "global";
                 function fn(){
                    console.log(scope);//result:undefined
                    var scope = "local";
                    console.log(scope);//result:local;
                 }
                 fn();
            </script>
            解析流程：
            <script>
                  var scope = "global";
                  function fn(){
                     var scope;//提前声明了局部变量
                     console.log(scope);//result:undefined
                     scope = "local";
                     console.log(scope);//result:local;
                  }
                  fn();
            </script>
            <script>
                 let scope = "global";
                 function fn(){
                    console.log(scope);//报错
                    let scope = "local";
                    console.log(scope);//result:local;
                 }
                 fn();
            </script>
            拥有块级作用域：
            <script>
                 for(let i=1;i<5;i++){} console.log(i); 获取不到i
                 for(var i=1;i<5;i++){} console.log(i); 可以获取到i
            </script>
      2.const声明常量:地址值不变
      3.模版字符:
        var i = 1;
        var a = `abc
         def${i+5}
         ghk
        `;
      4.解构赋值：
           字符串解构赋值：
           var [a,b,c] = 'def';
           数组解构赋值：
           var [a,b] = ['def','ghk'];
           对象解构赋值：键必须一致
           var obj = {name:'lisi',age:22};
           var {name,age} = obj;
      5.对象方法及属性简写
          方法简写：
              var obj = {
                 a:1,
                 b:2,
                 func
              }

              function func(){
                return this.a+this.b;
              }

              console.log(obj.func());
           方法简写2：
           var obj = {
              func(s1,s2){
                 console.log("Hello");
              },
              func2:(s1,s2)=>{
                 console.log(s1+s2);
              }
           }
           属性简写：
           var name = 'lisi';
           var obj = {name};
           console.log(obj.name);
      6.promise解决回调地狱：
        var fs = require('fs');
        var promise = new Promise(function(resolve,reject){
            fs.readFile(file,encode,function(err,data){
                err ? reject(err):resolve(data)
            })
        });

        promise.then(function (data) {
          //then第一个函数是成功的回调，参数是resolve(err)中的data
          console.log('成功：' + data); // 若成功，运行结果：成功：111
        }, function (err) {
          //then第二个函数是失败的回调函数，参数是reject(err)中的err错误对象
          console.log('失败：' + err);
        });
      7.箭头函数：
        var a = (s1,s2)=>{
            return s1+s2;
        }
        只有一个形参,可以省略括号
        var a = s1=>{
           return s1;
        }
        如果没有形参,不可以省略括号
        var a = ()=>{
           return s1;
        }
        如果只有函数体只有return，可以简写为：
        var a = (s1,s2)=>s1+s2

    Express框架：
      用到的组件（中间件）：
          1.express
          2.express-art-template
          3.art-template
          4.formidable:表单上传组件
          5.cookie-session
      管理静态资源：
         app.use(express.static('public'))
      使用模板引擎：
         app.engine('html',require('express-art-template'))
      使用外置路由：
         app.use(require('./route'))
         route.js:
             const express = require('express');
             //外置路由
             const router = express.Router();
             router.get("/",(request,response)=>{
                 response.end("Hello Node!");
             });
             //导出
             module.exports = router;
      使用内置路由：
         app.get("/",function(){})
      路由中间件:
         const express  = require('express');
         const app = express();

         app.use(function (request,response,next) {
             console.log("333222");
             next(); //如果没有next，不会往下执行
         });

         app.get("/",function (request,response,next) {
             console.log("111111");
             response.end("Hello!");
             next();
         });

         app.use(function (request,response,next) {
             console.log("3333333")
         });

         app.listen(7777,function () {
             console.log("请访问127.0.0.1:7777")
         });

    Vue框架:
       1.vue小应用
          <div id="app">
                  {{content}}
          </div>
          var app = new Vue({
                el:"#app",
                data:{
                    "content":"Hello Vue"
                },
                methods:{
                  clickMe(){
                    console.log("123");
                  }
                }
          });
          console.log(app.content);
       2.插值
         文本：{{text}}
         表达式：{{num+3}}
         函数：{{func()}}
       3.指令
         v-text:文本替换,跟插值的区别是如果有子元素会进行覆盖
         v-html:html文本替换
         v-bind:绑定属性,属于单项数据绑定,简写形式用:替换v-bind即可
         v-model:
                属于双向数据绑定：Vue实例中的数据改变，会影响DOM元素中的数据，反之亦然。
                修饰符：.lazy:取代input监听change事件,.number:转换数字,.trim：去除空白
         v-on:
              作用:绑定事件
              可以使用@代替v-on
              可以使用$event获取事件对象
              事件修饰符:
                 .prevent:调用event.preventDefault()
                 .stop:调用event.stopPropagation()
                 .once:只触发一次
         v-show:控制显示隐藏
         v-if:条件判断
         v-else-if:条件判断
         v-else:条件判断
         v-for:循环
         v-once:只渲染一次,动态改变vue实例中的数据,不受影响
         v-cloak:指令保持在元素上，直至vue实例编译结束,结合css样式使用
       4.devtools:Vue浏览器辅助开发插件
       5.MVVM设计思想:Model/View/ViewModel(Vue框架就是充当这个角色)
       6.computed计算属性:声明了一个计算属性 getFullName,函数将用作属性 vm.getFullName 的 getter 函数
       7.watch侦听器:侦听data的数据变化,可同时返回NewValue跟OldValue,常用做异步监听场景检测
       8.ref操作DOM元素:Vue提供了一个$refs属性可以获取DOM元素
       9.过滤器filter:
         全局过滤器
             Vue.filter('reverse',function(value){
                     return value.split("").reverse().join("");
             });
         局部过滤器
            filters:{
                    'upper':function (value) {
                        return value.toUpperCase();
                    }
            }
       10.自定义指令directive：
         全局自定义指令
             Vue.directive('haha2',{
                'inserted'(element){
                    return element.style.color = 'blue';
                }
             });
         局部自定义指令
            directives:{
                'haha':{
                    inserted:(element)=>{
                        return element.style.color = 'red';
                    }
                }
            }
       11.过渡及动画
         6个切换class:v-enter,v-enter-active,v-enter-to,v-leave,v-leave-active,v-leave-to
         如果transition标签指定类名,那么切换类变为指定类名前缀即可
         结合animate.css:transition标签添加enter-class,enter-active-class,enter-to-class,leave-class,leave-active-class,leave-to-class
       12.利用JsonServer搭建调试接口
         安装:npm install -g json-server
         使用:json-server -w user.json
         HTTP请求：查询：GET,添加：POST,修改：PUT,删除:DELETE
       13.axios发送请求
         axios.get("http://127.0.0.1:3000/user")
                 .then((response)=>{
                     console.log(response.data)
                 });
       14.组件
          定义：可复用的HTML代码块
          全局组件：
            Vue.component('my-component',{
                    template:'<h2>我是最帅帅的</h2>',
            });
          局部组件：
            let app = new Vue({
                el:'#app',
                components:{
                    'myzujian':{
                        template:'<h3>我的组件</h3>'
                    }
                }
             });
          使用组件:
             <div id="app">
                <my-component></my-component>
                <myzujian></myzujian>
             </div>
          一个组件的data必须是一个函数,否则多次调用数据会相互影响.
              let app = new Vue({
                      el:'#app',
                      components:{
                          'myzujian':{
                              data(){
                                return {
                                    'msg':'我的组件'
                                }
                              },
                              template:'<h3>{{msg}}</h3>'
                          }
                      }
                  });
          注意：Vue也是一个组件,如果有template属性会替换el选中DOM元素的内容.
          父组件向子组件通过props传递数据:
            <div id="app">
                <my :msg="message"></my>
            </div>
            <script>
                let app = new Vue({
                    el:'#app',
                    data:{
                        message:'是个好天气'
                    },
                    components:{
                        'my':{
                            props:['msg'],
                            template:'<h1>今天{{msg}}</h1>'
                        }
                    },
                });
            </script>
          组件通过slot分发内容：
            <div id="app">
                <mylists>
                    <h1>Hello</h1>
                    <h2 slot="header">World</h2>
                    <h3 slot="body">Vue</h3>
                </mylists>
            </div>
            <script type="x-template" id="lists">
                <div>
                    <slot></slot>
                    <slot name="header"></slot>
                    <slot name="body"></slot>
                </div>
            </script>
            <script>
                let app = new Vue({
                    el: '#app',
                    components: {
                        mylists: {
                            template:'#lists'
                        }
                    }
                });
            </script>
          自定义slot分发内容,通过scope接收变量
              <div id="app">
                  <mylists :students="students">
                      <template scope="v">
                          <li>{{v.field.name}}</li>
                      </template>
                  </mylists>
              </div>
              <script type="x-template" id="lists">
                  <ul>
                      <slot v-for="student in students" :field="student"></slot>
                  </ul>
              </script>
              <script>
                  let app = new Vue({
                      el: '#app',
                      data: {
                          students: [
                              {name: 'lisi', age: 22},
                              {name: 'wangwu', age: 26},
                              {name: 'zhangsan', age: 23},
                          ]
                      },
                      components: {
                          mylists: {
                              props: ['students'],
                              template: '#lists'
                          },
                      }
                  });
              </script>
       15.生命周期
         八个阶段：beforeCreate,created,beforeMount,mounted,beforeUpdate,updated,beforeDestroy,destroyed
         <script>
             let app = new Vue({
                 el:'#app',
                 data:{
                    msg:'Hello'
                 },
                 beforeCreate(){
                   console.log("开始孕育");
                 },
                 created(){
                     console.log("创建完成，指定el或template");
                 },
                 beforeMount(){
                     console.log("开始template编译");
                 },
                 mounted(){
                     console.log("挂在完毕，创建vm.$el替换el");
                     console.log(this.$el);
                     this.msg = 'World';
                 },
                 beforeUpdate(){
                     console.log("数据修改之前")
                 },
                 updated(){
                    console.log("数据修改完毕，渲染数据");
                    this.$destroy();
                 },
                 beforeDestroy(){
                     console.log("销毁之前");
                 },
                 destroyed(){
                     console.log("销毁完毕");
                 }

             });
         </script>
       16.vueRouter路由组件：
           常用于单页面应用
           <div id="app">
               <router-link to="/login">登录</router-link>
               <router-link to="/register">注册</router-link>
               <router-view></router-view>
           </div>
           <script>
               var router = new VueRouter({
                   routes:[
                       {
                           path:'/login',
                           component:{template:'<h1>登录</h1>'}
                       },
                       {
                         path:'/register',
                         component: {template: '<h1>注册</h1>'}
                       }
                   ]
               });
               let app = new Vue({
                   el:'#app',
                   router
               });
           </script>
           动态路由：
           <div id="app">
               <router-link to="/del/1">删除</router-link>
               <router-view></router-view>
           </div>
           <script>
               let router = new VueRouter({
                   routes:[
                       {
                           path:'/del/:id',
                           component:{template: '<h1>删除的ID是：{{$route.params.id}}</h1>'}
                       }
                   ]
               });
               let app = new Vue({
                   el:'#app',
                   router
               });
           </script>
       17.vue-cli工具
          全局安装：npm install @vue/cli @vue/cli-init -g
          创建项目：vue init webpack hello
          运行项目：npm run dev

     Vue项目实战：
       1.工具
         ElementUI
         MarkdownPad2
         axios
       2.Vue中使用插件
         第三方插件：通过Vue.use()使用插件,在new Vue()之前导入
         axios是第三方插件,但是axios没有为Vue提供use方法,如果想在Vue中使用,必须使用install方法重新封装
         自定义插件：Vue暴露install方法
            import axios from 'axios'
            let myaxios = {}
            myaxios.install = function (Vue) {
               Vue.prototype.$axios = axios
            }
            export default myaxios
       3.路由
         路由对象:$route,记录当前路由的状态信息
         Vue路由实例：$router
         编程式导航:$router.push()
         声明式导航:router-link
         嵌套路由（组件中存在组件）:
           routes: [
               {
                 path: '/',
                 name: 'Home',
                 component: Home,
                 children:[
                   {path:'/user',name:'User',component:User}
                 ]
               }
           ]
         命名路由：
           <div id="app">
               <router-link :to="{name:'delete',params:{id:1}}">删除</router-link>
               <router-view></router-view>
           </div>
           <script>
               let router = new VueRouter({
                   routes:[
                       {
                           path:'/del/:id',
                           name:'delete',
                           component:{template: '<h1>删除的ID是：{{$route.params.id}}</h1>'}
                       }
                   ]
               });
               let app = new Vue({
                   el:'#app',
                   router
               });
           </script>
         命名视图：
            作用：同级展示多个视图,使用components配置
            <div id="app">
                <router-view></router-view>
                <router-view name="slide"></router-view>
                <router-view name="content"></router-view>
            </div>
            <script type="x-template" id="menu">
                 <div style="width:100%"><h1>Menu</h1></div>
            </script>
            <script type="x-template" id="slide">
                <div style="width:30%;float:left;"><h1>slide</h1></div>
            </script>
            <script type="x-template" id="content">
                <div style="width:70%;float:right;"><h1>content</h1></div>
            </script>
            <script>
                const menu = {template:'#menu'}
                const slide = {template:'#slide'}
                const content = {template:'#content'}
                let router = new VueRouter({
                    routes:[
                        {
                            path:'/',
                            name:'home',
                            components:{
                                default:menu,
                                slide:slide,
                                content:content,
                            }
                        }
                    ]
                });
                let app = new Vue({
                    el:'#app',
                    router
                });
            </script>
         路由重定向与别名：
           重定向与别名的区别:重定向会改变URL,别名不会改变URL
           重定向：
                <div id="app">
                    <router-link :to="{name:'about'}">关于我们</router-link>
                    <router-view></router-view>
                </div>
                <script>
                    let router = new VueRouter({
                        routes:[
                            {
                                path:'/del/:id',
                                name:'delete',
                                component:{template: '<h1>删除的ID是：{{$route.params.id}}</h1>'}
                            },
                            {
                                path:'/about',
                                name:'about',
                                redirect:{name:'delete',params:{'id':1}}
                            }
                        ]
                    });
                    let app = new Vue({
                        el:'#app',
                        router
                    });
                </script>
           别名:
                <div id="app">
                    <router-link :to="{name:'about'}">关于我们</router-link>
                    <router-view></router-view>
                </div>
                <script>
                    let router = new VueRouter({
                        routes:[
                            {
                                path:'/del/:id',
                                name:'delete',
                                component:{template: '<h1>删除的ID是：{{$route.params.id}}</h1>'}
                            },
                            {
                                path:'/del/2',
                                name:'about',
                                alias:'/about'
                            }
                        ]
                    });
                    let app = new Vue({
                        el:'#app',
                        router
                    });
                </script>
           路由参数校验：
              <div id="app">
                  <router-link :to="{name:'delete',params:{id:1}}">删除</router-link>
                  <router-view></router-view>
              </div>
              <script>
                  let router = new VueRouter({
                      routes:[
                          {
                              path:'/del/:id(\\d+)',
                              name:'delete',
                              component:{template: '<h1>删除的ID是：{{$route.params.id}}</h1>'}
                          }
                      ]
                  });
                  let app = new Vue({
                      el:'#app',
                      router
                  });
              </script>
           路由默认值:
              <div id="app">
                  <router-link :to="{name:'delete'}">删除</router-link>
                  <router-view></router-view>
              </div>
              <script>
                  let router = new VueRouter({
                      routes:[
                          {
                              path:'/del/:id(\\d+)?',
                              name:'delete',
                              component:{
                                  data(){
                                      return {
                                          id:0
                                      }
                                  },
                                  mounted(){
                                      this.id = this.$route.params.id;
                                      if(!this.id){
                                          this.id = 1;
                                      }
                                      console.log(this.id);
                                  },
                                  template: '<h1>删除的ID是：{{id}}</h1>'
                              }
                          }
                      ]
                  });
                  let app = new Vue({
                      el:'#app',
                      router
                  });
              </script>
           路由守卫：
             // 配置路由的拦截器
             router.beforeEach((to, from, next) => {
               // 如果访问登录的路由地址，放过
               if (to.name === 'login') {
                 next();
               } else {
                 // 如果请求的不是登录页面，验证token
                 // 1. 获取本地存储中的token
                 const token = localStorage.getItem('token');
                 if (!token) {
                   Message({
                     type: 'warning',
                     message: '请先登录!'
                   });
                   // 2. 如果没有token，跳转到登录
                   next({
                     name: 'login'
                   });
                 } else {
                   // 3. 如果有token，继续往下执行
                   next();
                 }
               }
             });
           路由懒加载(首屏优化):
               const Foo = () => import('./Foo.vue')
               const Bar = () => import('./Bar.vue')

       4.localStorage存储:
         设置：window.localStorage.setItem(key,value)
         获取：window.localStorage.getItem(key);
         删除：window.localStorage.removeItem(key)
       5.跨域
         方案：1.JSONP 2.设置CORS响应头（Access-Control-Allow-Origin:*）
       6.axios自定义配置
         import axios from 'axios'
         let myaxios = {}
         myaxios.install = function (Vue) {
            //自定义axios
            var instance = axios.create({
              baseURL: 'http://localhost:8888/api/private/v1/',
              headers: {'Authorization': window.localStorage.getItem('token')}
            });
            Vue.prototype.$axios = instance;
         }
         export default myaxios

     Vuex:状态管理模式
        概念：
            1.state:数据
            2.getters:获取数据
            3.mutations:修改数据
            4.actions:初始化数据
            5.modules:模块
        购物车实例
          1.子组件结合计算属性使用vuex的state属性获取购物车数据
          2.通过vuex的getters属性获取总价
          3.使用vuex的mutations属性删除数据
          4.使用vuex的actions属性初始化数据
          5.使用vuex的modules属性模块化

     Webpack项目打包:
        1.项目打包:npm run build
        2.CDN加速打包:
           module.exports = {
             //...
             externals: {
               //包名:类名
               jquery: 'jQuery',
               vue:'Vue',
               'vue-router':'Router'
             }
           };
        3.安装
          全局：npm install webpack webpack-cli -g
          局部（推荐）：npm install webpack webpack-cli
        4.使用
          全局使用：webpack 文件名
          局部使用：package.json中scripts加入可执行命令

     React框架
        1.前端三大框架
            React：Facebook
            Angular：Google
            Vue:尤雨溪
        2.构建工具create-react-app
          全局安装：npm install create-react-app -g
        3.构建项目
          create-react-app 项目名
        4.启动项目
          npm start
        5.jsx语法
          创建元素
            1.ReactDOM.render(React.createElement('h1',{'id':'myh1'},'Hello World'),document.getElementById('app'));
            2.ReactDOM.render(
                  (
                      <div>
                          <h1>Hello React</h1>
                      </div>
                  ),document.getElementById('app')
              );
          循环遍历
            var msg = 'Hello React'
            var arr = ['a','b','c']
            var arr2 = arr.map(function(v,k){
                return <h1 key="k">{v}</h1>
            })
            ReactDOM.render(
                (
                    <div>
                        <h1>{msg}</h1>
                        <div>{arr2}</div>
                    </div>
                ),document.getElementById('app')
            );
        6.ES6面向对象
          原型继承
              function Person(){
                 this.say=function(){
                    console.log(this.name)
                 }
              }

              function Student(){
                  this.name = 'lisi';
              }

              Student.prototype = new Person();

              var s = new Student();
              s.say();
          冒充继承
              function Person(){
                  this.say=function(){
                      console.log(this.name)
                  }
              }

              function Student(){
                  Person.call(this);
                  this.name = 'lisi';
              }

              var s = new Student();
              s.say();

          class类声明，不支持变量提升
              class Person{
                  constructor(){
                      this.name = 'lisi'
                      this.age = 22
                  }
                  say(){
                     console.log(this.name+'---'+this.age);
                  }
              }

              var p = new Person();
              p.say();

          类继承
              class Person{
                  constructor(){
                      this.name = 'lisi';
                      this.age = 22;
                  }
                  say(){
                      console.log(this.name+'---'+this.age);
                  }
              }

              class Student extends Person{
                  constructor(){
                      super();
                      this.city = 'beijing';
                  }
                  eat(){
                      console.log('eat')
                  }
              }

              var s = new Student();
              s.say();
              s.eat();

        7.组件
          构造函数组件（无状态组件,无私有数据）
            var data = {
              name:'lisi'
            }
            function Hello(props){
                console.log(props);
                return <div>
                    <h1>{props.name}</h1>
                </div>
            }
            ReactDOM.render((
                <Hello name={data.name} />
            ),document.getElementById('app'));
          类组件（有状态组件,有私有数据）
            var data = {
                name:'lisi'
            }

            class Hello extends Component{
                render() {
                    return <div>
                        <h1>{this.props.name}</h1>
                    </div>
                }
            }

            ReactDOM.render((
                <Hello name={data.name} />
            ),document.getElementById('app'));

        8.props跟state的区别
          state是组件私有数据，只能在类组件中使用，可读可写
          props是外部传入数据，在类组件跟函数组件中都能使用，只能读取
          import React,{Component} from 'react'
          import 'bootstrap/dist/css/bootstrap.css'
          import './red.css'
          class CmtList extends Component{
              constructor(){
                  super();
                  //私有数据
                  this.state = {
                      cmtlists:[
                          {id:1,title:'苹果',content:'东西不错嘛'},
                          {id:2,title:'梨子',content:'东西不错啊'},
                          {id:3,title:'香蕉',content:'东西不错呀'},
                          {id:4,title:'橘子',content:'东西不错哦'},
                      ]
                  }
              }
              render() {
                  return (
                      <div>
                          {this.state.cmtlists.map(function(v){
                              return (<div key={v.id}>
                                  <h1 className="red">{v.title}</h1>
                                  <hr/>
                                  <p>{v.content}</p>
                              </div>)
                          })}
                      </div>
                  )
              }
          }

          export default CmtList

        9.事件处理
          使用箭头函数解决this的指向问题
          handleClick = ()=>{
                  console.log(this.state.cmtlists[0].title);
          }

          <button className="btn btn-danger" onClick={this.handleClick}>按钮</button>

        10.数据绑定
           单向数据绑定
               class Person extends Component{
                   constructor(){
                       super()
                       this.state = {
                           name:'lisi'
                       }
                   }

                   render() {
                       return (
                           <div>
                               <button onClick={this.changeData}>改变数据</button>
                               <h1>{this.state.name}</h1>
                           </div>
                       )
                   }

                   changeData = () =>{
                       this.setState({
                           name:'wangwu'
                       })
                   }
               }

               ReactDOM.render(<Person/>,document.getElementById('app'))

           双向数据绑定
              class Person extends Component{
                  constructor(){
                      super()
                      this.state = {
                          name:'lisi'
                      }
                  }

                  render() {
                      return (
                          <div>
                              <input type="text" value={this.state.name} onChange={this.changeData}/>
                              <h1>{this.state.name}</h1>
                          </div>
                      )
                  }

                  changeData = (e) =>{
                      this.setState({
                          name:e.target.value
                      })
                  }
              }

              ReactDOM.render(<Person/>,document.getElementById('app'))

        11.refs操作DOM
           class Person extends Component{
               constructor(){
                   super()
                   this.state = {
                       name:'lisi'
                   }
               }

               render() {
                   return (
                       <div>
                           <input ref="btn" type="text" value={this.state.name} onChange={this.changeData}/>
                           <h1>{this.state.name}</h1>
                       </div>
                   )
               }

               changeData = () =>{
                   this.setState({
                       name:this.refs.btn.value
                   })
               }
           }

           ReactDOM.render(<Person/>,document.getElementById('app'))

        12.React生命周期
          钩子函数
          componentWillMount:render渲染之前触发
          componentDidMount:render渲染之后触发
          componentWillUnmount:销毁之后触发
          shouldComponentUpdate:render渲染之前触发
          componentWillUpdate:render渲染之前触发
          componentDidUpdate:render渲染之后触发
          componentWillReceiveProps:props数据发生变化时触发

        13.组件之间的通讯
           父-子:props
           子-父:callback
           class Student extends Component{
               constructor(props){
                   super(props)
                   this.state = {
                       mm:props.nn
                   }
               }

               render() {
                   return (
                       <div>
                           <button onClick={this.changeStudent}>修改</button>
                           <h1>{this.state.mm}</h1>
                       </div>
                   )
               }

               changeStudent = ()=>{
                   //子组件数据变化传递父组件
                   this.props.back(this.state.mm+1)
                   this.setState({
                       mm:this.state.mm+1
                   })
               }

               componentWillReceiveProps(nextProps, nextContext) {
                   console.log(nextProps);
                   //父组件数据变化传递子组件
                   this.setState({
                       mm:nextProps.nn
                   })
               }
           }


           class Person extends Component{
               constructor(){
                   super()
                   this.state = {
                       nn:0
                   }
               }

               render() {
                   return (
                       <div>
                           <button onClick={this.changePerson}>修改</button>
                           <h1>{this.state.nn}</h1>
                           <hr/>
                           <Student back={this.back} nn={this.state.nn} />
                       </div>
                   )
               }

               changePerson = ()=>{
                   this.setState({
                       nn:this.state.nn+1
                   })
               }

               back = (data) =>{
                   this.setState({
                       nn:data
                   })
               }
           }

           ReactDOM.render((<Person />),document.getElementById('app'))

        14.路由
          安装:npm install reacct-router-dom
          使用:
              const Pro1 = ()=> <h1>Hello1</h1>
              const Pro2 = ()=> <h1>Hello2</h1>
              const Pro3 = ()=> <h1>Hello3</h1>

              const Pro = ()=>{
                  return (
                      <div>
                          <Router>
                              <Link to="/Pro1">Pro1</Link>
                              <Link to="/Pro2">Pro2</Link>
                              <Link to="/Pro3">Pro3</Link>
                              <Route path="/Pro1" component={Pro1}></Route>
                              <Route path="/Pro2" component={Pro2}></Route>
                              <Route path="/Pro3" component={Pro3}></Route>
                          </Router>
                      </div>
                  )
              }

              ReactDOM.render((<Pro />),document.getElementById('app'))

          嵌套路由
             路由地址要加前缀
             路由参数传递
             编程式导航:事件触发使用箭头函数
             const Pro1 = ()=> <div>
                 <h1>Hello1</h1>
                 <Link to="/Pro1/Pro1-1">Pro1-1</Link>
                 <Link to="/Pro1/Pro1-2">Pro1-2</Link>
                 <hr/>
                 <Route path="/Pro1/Pro1-1" component={Pro1_1}></Route>
                 <Route path="/Pro1/Pro1-2" component={Pro1_2}></Route>
             </div>
             const Pro2 = (props)=> <h1>Hello2---{props.match.params.id}</h1>
             const Pro3 = (props)=> <div><button onClick={()=>goHome(props)}>跳转首页</button></div>

             const Pro1_1 = ()=> <h2>Hello1_1</h2>
             const Pro1_2 = ()=> <h2>Hello1_2</h2>

             var goHome = (props) =>{
                 console.log(props)
                 props.history.push('/Pro1')
             }

             const Pro = ()=>{
                 return (
                     <div>
                         <Router>
                             <Link to="/Pro1">Pro1</Link>
                             <Link to="/Pro2/2">Pro2</Link>
                             <Link to="/Pro3">Pro3</Link>
                             <Route path="/Pro1" component={Pro1}></Route>
                             <Route path="/Pro2/:id" component={Pro2}></Route>
                             <Route path="/Pro3" component={Pro3}></Route>
                         </Router>
                     </div>
                 )
             }

             ReactDOM.render((<Pro />),document.getElementById('app'))




