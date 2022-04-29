import React, {Component} from "react";
import store from '../../redux/store'
import {incrementAction, decrementAction, asyncIncrementAction} from "../../redux/action";

export default class Count2 extends Component {

    increment = () => {
        const {value} = this.selectNumber
        store.dispatch(incrementAction(value * 1))
    }

    decrement = () => {
        const {value} = this.selectNumber
        store.dispatch(decrementAction(value * 1))
    }

    incrementIfOdd = () => {
        const {value} = this.selectNumber
        // 通过store获取数据
        const count = store.getState()
        if (count % 2 === 0) return
        store.dispatch(incrementAction(value * 1))
    }

    incrementAsync = () => {
        const {value} = this.selectNumber
        store.dispatch(asyncIncrementAction(value * 1, 1000))
    }


    render() {
        return (
            <div>
                <h1>Count计数器-redux版</h1>
                <h1>当前求和为：{store.getState()}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>
                &nbsp;
                <button onClick={this.decrement}>-</button>
                &nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
                &nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
                &nbsp;
            </div>
        )
    }
}