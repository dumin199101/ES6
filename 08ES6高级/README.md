# ES6模块化

## 在Node中使用ES6模块化

①在package.json根节点中配置type:"module"节点

②node版本14.15.1以上

## 模块化语法

### 默认导入导出

默认导入的语法： import 接收名称 from '模块标识符'

默认导出的语法： export default 默认导出成员

注意：

   ①每个模块中只允许使用一次默认导出
   ②默认导入时的接收名称可以任意名称

### 按需导入导出

按需导入语法： import {接收名称} from '模块标识符'

按需导出语法： export 按需导出成员

注意：

   ① 每个模块中可以使用多次按需导出
   ② 按需导入的成员名称必须和按需导出的名称保持一致
   ③ 按需导入时，可以使用as关键字进行重命名
   ④ 按需导入可以和默认一起使用

### 直接导入并执行模块中的代码

直接导入语法： import 模块标识符

# Promise对象

## 基本概念

① Promise是一个构造函数，Promise实例对象，代表一个异步操作
② Promise.prototype上包含一个.then()方法
③ .then()方法用来预先指定成功和失败的回调函数

## 方法

.then():成功的回调

.catch()：失败的回调

.all()：所有都执行成功后的回调

.race()：只要有一个执行成功后的回调

```javascript
import fs from 'fs'

function getFile(path) {
    return new Promise(function(resolve,reject){
        fs.readFile(path,"utf8",function (err,data) {
            err ? reject(err) : resolve(data)
        })
    })
}

getFile("txt/1.txt").then(function (data) {
    console.log(data)
}).catch(function(err){
    console.log(err.message)
})

```

# Async跟Await

async/await是ES8（ECMAScript 2017）引入的新语法，用来简化Promise异步操作 。

```javascript
import fs from 'then-fs'

console.log("AAAAA")

async function read(){

    console.log("BBBBB")

    const result1 = await fs.readFile("txt/1.txt","utf8")
    console.log(result1)

    const result2 = await fs.readFile("txt/2.txt","utf8")
    console.log(result2)

    const result3 = await fs.readFile("txt/3.txt","utf8")
    console.log(result3)

    console.log("DDDDD")
}

read()

console.log("CCCCC")
```

# EventLoop（事件循环）

## 同步任务跟异步任务

① 同步任务 （synchronous）
 又叫做非耗时任务，指的是在主线程上排队执行那些任务
 只有前一个任务执行完毕，才能后只有前一个任务执行完毕，才能执行后一个任务


② 异步任务（ asynchronous）
 又叫做耗时任务，异步任务由JavaScript委托给宿主环境（浏览器或Node环境）进行执行
 当异步任务执行完成后，会通知JavaScript主线程执行异步任务的回调函数

# 宏任务跟微任务

异步任务分为宏任务跟微任务

宏任务：

   Ajax请求
   文件操作
   setTimeout
   setInterval

微任务：

   Promise.then()
   Promise.catch()


执行顺序：

    每一个宏任务执行完之后，都会检查是否存在待执行的微任务，如果有，则执行完所微任务之后再继续下一个宏任务。