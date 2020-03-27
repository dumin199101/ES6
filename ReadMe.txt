项目说明：

    Es6语法及NodeJS及Vue

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







