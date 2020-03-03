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



