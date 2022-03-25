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

componentWillMount:render渲染之前触发

componentDidMount:render渲染之后触发

componentWillUnmount:销毁之前触发

shouldComponentUpdate:更新开关布尔值,触发:setState()

componentWillUpdate:render渲染之前触发:forceUpdate()

componentDidUpdate:render渲染之后触发

