import React, {Component} from "react";
import './index.css'

export default class Item extends Component {
    state = {
        'mouse': false // 标识鼠标是否移入
    }
    changeCheckBox = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)
        }
    }
    handleMouse = (mouse) => {
        return () => {
            this.setState({
                'mouse': mouse
            })
        }
    }

    handleDelete = (id) => {
        return () => {
            this.props.deleteTodo(id)
        }
    }

    render() {
        const {id, name, done} = this.props
        const {mouse} = this.state
        return (
            <li style={{background: mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)}
                onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.changeCheckBox(id)}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" onClick={this.handleDelete(id)} style={{display: mouse ? 'block' : 'none'}}>删除</button>
            </li>
        )
    }
}