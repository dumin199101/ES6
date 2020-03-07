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





