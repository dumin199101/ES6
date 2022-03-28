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