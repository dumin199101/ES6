import React, {Component} from 'react'
import './index.css'
import {nanoid} from 'nanoid'

export default class Header extends Component {
    handleKeyUp = (event) => {
        const {keyCode, target} = event
        if (keyCode !== 13) return
        const newObj = {id: nanoid(), name: target.value, cheked: false}
        this.props.addTodo(newObj)
        target.value = ''
    }

    render() {
        return (
            <div className="todo-header">
                <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleKeyUp}/>
            </div>
        )
    }
}