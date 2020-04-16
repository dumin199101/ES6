import React, {Component} from 'react'
// import React from 'react'
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
