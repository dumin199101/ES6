# React全家桶

## jsx语法规则

1. 定义虚拟DOM时，不要写引号
2. 标签中引入JS表达式时要使用{}
3. 样式的类名要用className
4. 内联样式，要用style={{key:value}}的形式
5. 只有一个根标签
6. 标签必须闭合
7. 标签首字母：小写字母开头，必须是html同名元素，大写字母开头，React渲染同名组件


## constructor

如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数。

通常，在 React 中，构造函数仅用于以下两种情况：

a. 通过给 this.state 赋值对象来初始化内部 state。

b. 为事件处理函数绑定实例

## 组件三大核心属性

### State

1. 状态数据不能直接修改，只能通过setState({key:value})的形式更改
2. 组件自定义方法中的this
   
     a.通过bind强制绑定this
     
     b.使用箭头函数
   
### Props

1. 通过标签属性，从组件外向组件内传递数据
2. 组件内部不能修改props传递的数据（只读）

### Refs

组件内的标签可以用ref属性来标识自己，但不要过渡使用，当事件源绑定在自己身上时，可以省略

1. 字符串形式的Ref
2. 回调函数形式的Ref
3. createRef创建的Ref

## 收集表单数据

1.受控组件

   在一个受控组件中，表单数据是由 React组件来管理的。类似vue中的双向数据绑定

2.非受控组件

   在一个非受控组件中，表单数据将交由 DOM 节点来处理，通过Ref属性，现用现取  

## 组件生命周期

componentWillMount:render渲染之前触发，即将废弃

componentDidMount:render渲染之后触发，常用

componentWillUnmount:销毁之前触发，常用

shouldComponentUpdate:更新开关布尔值,触发:setState()

componentWillUpdate:render渲染之前触发:forceUpdate()，即将废弃

componentDidUpdate:render渲染之后触发

componentWillReceiveProps:组件将要接收新的props时触发，即将废弃

getDerivedStateFromProps(props,state):在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。新添加，不常用。

getSnapshotBeforeUpdate:在最近一次渲染输出（提交到 DOM 节点）之前调用,此生命周期方法的任何返回值将作为参数传递给 componentDidUpdate().新添加，不常用。

## DOM的Diff算法

经典面试题:

1). react/vue中的key有什么作用？（key的内部原理是什么？）

2). 为什么遍历列表时，key最好不要用index?

   1. 虚拟DOM中key的作用：
      
           1). 简单的说: key是虚拟DOM对象的标识, 在更新显示时key起着极其重要的作用。

           2). 详细的说: 当状态中的数据发生变化时，react会根据【新数据】生成【新的虚拟DOM】, 
                                       随后React进行【新虚拟DOM】与【旧虚拟DOM】的diff比较，比较规则如下：

                           a. 旧虚拟DOM中找到了与新虚拟DOM相同的key：
                                       (1).若虚拟DOM中内容没变, 直接使用之前的真实DOM
                                       (2).若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM

                           b. 旧虚拟DOM中未找到与新虚拟DOM相同的key
                                       根据数据创建新的真实DOM，随后渲染到到页面
                           
   2. 用index作为key可能会引发的问题：
      
                       1. 若对数据进行：逆序添加、逆序删除等破坏顺序操作:
                                       会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。

                       2. 如果结构中还包含输入类的DOM：
                                       会产生错误DOM更新 ==> 界面有问题。
                                       
                       3. 注意！如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，
                           仅用于渲染列表用于展示，使用index作为key是没有问题的。
           
   3. 开发中如何选择key?:
      
                       1.最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号等唯一值。
                       2.如果确定只是简单的展示数据，用index也是可以的。

## 组件通讯

父组件-子组件：props

子组件-父组件：callback

兄弟组件：pubsub.js


### 使用PubSubJs组件通讯

#### 下载

```
npm i pubsub-js --save
```

#### 使用：

 1.先引入：
 ```javascript
 import PubSub from "pubsub-js"
```

 2.要接收数据方订阅：
```javascript
const token = PubSub.subscribe('消息名',(_,data)=>{ console.log(data) })
``` 

 3.传递数据方发布：
```javascript
PubSub.publish('消息名',data)
``` 
 4.取消订阅
```javascript
Pubsub.unsubscribe(token)
```


## react脚手架配置代理

### 方法一

> 在package.json中追加如下配置

```json
"proxy":"http://localhost:5000"
```

说明：

1. 优点：配置简单，前端请求资源时可以不加任何前缀。
2. 缺点：不能配置多个代理。
3. 工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000 （优先匹配前端资源）



### 方法二

1. 第一步：创建代理配置文件

   ```
   在src下创建配置文件：src/setupProxy.js
   ```

2. 编写setupProxy.js配置具体代理规则：

   ```js
   const {createProxyMiddleware} = require('http-proxy-middleware')
   
   module.exports = function(app) {
     app.use(
       createProxyMiddleware('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
         target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
         changeOrigin: true, //控制服务器接收到的请求头中host字段的值
         /*
         	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
         	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
         	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
         */
         pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
       }),
       createProxyMiddleware('/api2', { 
         target: 'http://localhost:5001',
         changeOrigin: true,
         pathRewrite: {'^/api2': ''}
       })
     )
   }
   ```

说明：

1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。
2. 缺点：配置繁琐，前端请求资源时必须加前缀。

## 使用fetch发送请求

### 原始版

```javascript
fetch("http://localhost:3000/api1/students").then(response => {
            return response.json()
        }).then(data => {
            console.log(data)
        }).catch(error => {
            console.log(error)
        })
```

### await/async改进版

```javascript
componentDidMount = async ()=> {
        try{
            const response = await fetch("http://localhost:3000/api2/cars")
            const data = await response.json()
            console.log(data)
        }catch (error) {
            console.log(error)
        }
    }
```

## 路由

### react-router-dom

#### 理解
- 它是react的一个插件库
- 专门用来实现一个SPA单页面应用
- 基于react的项目基本都用它

#### 常用API

1. 内置组件

- \<BrowserRouter>
- \<HashRouter>
- \<Route>
- \<Link>
- \<NavLink>
- \<Redirect>
- \<Switch>


2. 知识点

- 路由的基本使用

![路由的基本使用](https://img-blog.csdnimg.cn/20210316191057901.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1JvbnljaGVu,size_16,color_FFFFFF,t_70)

- 路由组件和一般组件

![路由组件和一般组件](https://img-blog.csdnimg.cn/20210316191227475.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1JvbnljaGVu,size_16,color_FFFFFF,t_70)

- NavLink的使用

![NavLink的使用](https://img-blog.csdnimg.cn/20210316191343340.png)

- Switch的使用

![Switch的使用](https://img-blog.csdnimg.cn/20210316191436579.png)

- 路由的模糊匹配跟精准匹配

![路由的模糊匹配跟精准匹配](https://img-blog.csdnimg.cn/2021031619141345.png)

- Redirect的使用

![Redirect的使用](https://img-blog.csdnimg.cn/20210316191501373.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1JvbnljaGVu,size_16,color_FFFFFF,t_70)

- 嵌套路由

![嵌套路由](https://img-blog.csdnimg.cn/20210316191559335.png)

- 向路由组件传递参数

![向路由组件传递参数](https://img-blog.csdnimg.cn/20210316182102858.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1JvbnljaGVu,size_16,color_FFFFFF,t_70)

- 路由跳转的两种模式（push、replace）

> 默认开启的是push模式，push模式就是说每次的点击跳转改变路径，都是往浏览器历史记录的栈中不断追加一条记录，然后你点回退按钮时，它会指向当前栈顶记录的前一条，replcae模式就是说替换掉当前的那条记录，然后你点回退的时候，就不会显示上次被替换掉的那条记录了，只会显示上上条记录，那要怎么设置为replace模式呢？直接在<Link replace to='XXX'>标签上添加一个replace属性即可

- 编程式路由导航

> 就是借用history对象的api来操作路由的跳转、前进、后退

![编程式路由导航](https://img-blog.csdnimg.cn/2021031618541845.png)

- withRouter的使用

> 作用：它就是专门解决在一般组件中想要使用路由组件的那几个API的这个问题的，它接收一个一般组件，然后调用后，该一般组件身上也有了路由组件的history、match等属性

> 如何使用：
>> 1、先引入import { withRouter} from "react-router-dom"

>> 2、定义一般组件class XX extends ... 

>> 3、export default withRouter( XX )

- BrowserRouter和HashRouter的区别

![BrowserRouter和HashRouter的区别](https://img-blog.csdnimg.cn/20210316190653395.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1JvbnljaGVu,size_16,color_FFFFFF,t_70)

