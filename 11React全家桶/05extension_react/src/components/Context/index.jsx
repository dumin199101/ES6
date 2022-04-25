import React,{Component} from "react";
import "./index.css"

const myContext = React.createContext()
const {Provider,Consumer} = myContext


export default class A extends Component{
    state = {
        'username': 'tom',
        'age': 25
    }

    render() {
        const {username,age} = this.state
        return (
            <div className="parent">
                <h3>我是A组件</h3>
                <h4>我的用户名是:{username}</h4>
                <Provider value={{username,age}}>
                    <B/>
                </Provider>
            </div>
        )
    }
}

class B extends Component{
    render() {
        return (
            <div className="child">
                <h3>我是B组件</h3>
                <C/>
            </div>
        )
    }
}


/*class C extends Component {
    static contextType = myContext

    render() {
        const {username,age} = this.context
        return (
            <div className="grand">
                <h3>我是C组件</h3>
                <h4>我从A组件接收到的用户名:{username},年龄是{age}</h4>
            </div>
        )
    }
}*/


/*class C extends Component {
    render() {
        return (
            <div className="grand">
                <h3>我是C组件</h3>
                <h4>我从A组件接收到的用户名:
                    <Consumer>
                        {value => `${value.username},年龄是：${value.age}`}
                    </Consumer>
                </h4>
            </div>
        )
    }
}*/

function C(){
    return (
        <div className="grand">
            <h3>我是C组件</h3>
            <h4>我从A组件接收到的用户名:
                <Consumer>
                    {value => `${value.username},年龄是：${value.age}`}
                </Consumer>
            </h4>
        </div>
    )
}
