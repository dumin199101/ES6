// import React, {Component} from 'react'
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
import React from 'react'
import ReactDOM from 'react-dom'
// import CmtList from './CmtList'

// ReactDOM.render(React.createElement('h1',{'id':'myh1'},'Hello World'),document.getElementById('app'));

/*var msg = 'Hello React'
var arr = ['a','b','c']
var arr2 = arr.map(function(v,k){
    return <h1 id="k">{v}</h1>
})
ReactDOM.render(
    (
        <div>
            <h1>{msg}</h1>
            <div>{arr2}</div>
        </div>
    ),document.getElementById('app')
);*/

/*var data = {
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
),document.getElementById('app'));*/

/*
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
),document.getElementById('app'));*/

//评论列表
// ReactDOM.render((<CmtList />),document.getElementById('app'));

//单向数据绑定
/*
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
*/

//双向数据绑定
/*
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

ReactDOM.render(<Person/>,document.getElementById('app'))*/

//ref操作DOM
/*class Person extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:props.name,
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
            name:this.refs.btn.value,
        })
    }

    //生命周期
    componentWillMount() {
        console.log("WillMount")
    }

    componentDidMount() {
        console.log("DidMount")
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // console.log(nextState);
        return true;
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log(3)
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log(1,nextState)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(2,prevState)
    }

    componentWillUnmount() {
        console.log('unmount')
    }


}


ReactDOM.render(<Person name="lisi" />,document.getElementById('app'))*/

//组件间通信
/*class Student extends Component{
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

ReactDOM.render((<Person />),document.getElementById('app'))*/

//路由

/*
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

ReactDOM.render((<Pro />),document.getElementById('app'))*/

const Pro1 = ()=> <div>
    <h1>Hello1</h1>
    <Link to="/Pro1/Pro1-1">Pro1-1</Link>
    <Link to="/Pro1/Pro1-2">Pro1-2</Link>
    <hr/>
    <Route path="/Pro1/Pro1-1" component={Pro1_1}></Route>
    <Route path="/Pro1/Pro1-2" component={Pro1_2}></Route>
</div>
const Pro2 = ()=> <h1>Hello2</h1>
const Pro3 = ()=> <h1>Hello3</h1>

const Pro1_1 = ()=> <h2>Hello1_1</h2>
const Pro1_2 = ()=> <h2>Hello1_2</h2>

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


