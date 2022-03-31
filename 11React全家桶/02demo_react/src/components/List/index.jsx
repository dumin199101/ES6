import React, {Component} from "react";
import Item from "../Item";
import './index.css'
import PubSub from 'pubsub-js'
export default class List extends Component {

    componentDidMount() {
        this.token = PubSub.subscribe("101",(msg,data)=>{
            console.log(msg) // 101
            console.log(data) // HelloWorld
        })
        console.log(this.token) // uid_0
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }

    render() {
        const {todos,updateTodo,deleteTodo} = this.props
        return (
            <ul className="todo-main">
                {todos.map((item)=>{
                    return <Item {...item} key={item.id} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                })}
            </ul>
        )
    }

}

