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

