import React, {Component} from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export default class App extends Component {
    state = {
        todos: [
            {id: '001', name: '吃饭', done: true},
            {id: '002', name: '睡觉', done: true},
            {id: '003', name: '打代码', done: false},
            {id: '004', name: '逛街', done: false}
        ]
    }

    addTodo = (newObj)=>{
        const {todos} = this.state
        const newTodos = [newObj,...todos]
        this.setState({todos:newTodos})
    }

    updateTodo = (id, checked) => {
        const newtodos = this.state.todos.map((item) => {
            return item.id === id ? {...item,done:checked} : item
        })
        this.setState({
            todos: newtodos
        })
    }

    deleteTodo = (id) => {
        const {todos} = this.state
        const newtodos = todos.filter((item)=>{
              return item.id !== id
        })
        this.setState({
            todos: newtodos
        })
    }

    clearAllDoneTodo = ()=> {
        const {todos} = this.state
        const newtodos = todos.filter((item)=>{
            return !item.done
        })
        this.setState({
            todos: newtodos
        })
    }

    checkAllTodo = (checked) => {
        const {todos} = this.state

        const newtodos  = todos.map((item)=>{
                return {...item,done:checked}
            })

        this.setState({
            todos: newtodos
        })
    }

    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} clearAllDoneTodo={this.clearAllDoneTodo} checkAllTodo={this.checkAllTodo}/>
                </div>
            </div>
        );
    }
}

