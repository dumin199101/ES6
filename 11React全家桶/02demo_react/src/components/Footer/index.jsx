import React, {Component} from "react";
import './index.css'

export default class Footer extends Component {
    handleClearAllDone = () => {
        this.props.clearAllDoneTodo()
    }

    handleCheckbox = (event) => {
        const {checked} = event.target
        this.props.checkAllTodo(checked)
    }

    render() {
        const {todos} = this.props
        const total = todos.length
        const finished = todos.reduce((pre,cur)=>{
            return pre + (cur.done ? 1 : 0)
        },0)
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={finished === total && finished > 0 ? true : false} onChange={this.handleCheckbox}/>
                </label>
                <span>
                    <span>已完成{finished}</span> / 全部{total}
                </span>
                <button className="btn btn-danger" onClick={this.handleClearAllDone}>清除已完成任务</button>
            </div>
        )
    }
}