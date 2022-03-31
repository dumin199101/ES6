import React, {Component} from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import axios from "axios";
import PubSub from "pubsub-js"

export default class App extends Component {
    state = {
        todos: [
            {id: '001', name: '吃饭', done: true},
            {id: '002', name: '睡觉', done: true},
            {id: '003', name: '打代码', done: false},
            {id: '004', name: '逛街', done: false}
        ]
    }

    componentDidMount = async ()=> {
        PubSub.publish("101", "Hello,World")
        try{
            const response = await fetch("http://localhost:3000/api2/cars")
            const data = await response.json()
            console.log(data)
        }catch (error) {
            console.log(error)
        }
    }

    addTodo = (newObj) => {
        const {todos} = this.state
        const newTodos = [newObj, ...todos]
        this.setState({todos: newTodos})
    }

    updateTodo = (id, checked) => {
        const newtodos = this.state.todos.map((item) => {
            return item.id === id ? {...item, done: checked} : item
        })
        this.setState({
            todos: newtodos
        })
    }

    deleteTodo = (id) => {
        const {todos} = this.state
        const newtodos = todos.filter((item) => {
            return item.id !== id
        })
        this.setState({
            todos: newtodos
        })
    }

    clearAllDoneTodo = () => {
        const {todos} = this.state
        const newtodos = todos.filter((item) => {
            return !item.done
        })
        this.setState({
            todos: newtodos
        })
    }

    checkAllTodo = (checked) => {
        const {todos} = this.state

        const newtodos = todos.map((item) => {
            return {...item, done: checked}
        })

        this.setState({
            todos: newtodos
        })
    }

     render() {
        axios.get("http://localhost:3000/api1/students").then((resp) => {
            console.log(resp.data)
        }, (error) => {
            console.log(error);
        })

        axios.get("http://localhost:3000/api2/cars").then((resp) => {
            console.log(resp.data)
        }, (error) => {
            console.log(error);
        })

        fetch("http://localhost:3000/api1/students").then(response => {
            return response.json()
        }).then(data => {
            console.log(data)
        }).catch(error => {
            console.log(error)
        })

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

