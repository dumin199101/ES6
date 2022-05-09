import {Component} from "react";
import {incrementAction, decrementAction,asyncIncrementAction} from "../../redux/actions/count";
import {connect} from 'react-redux'


class Count extends Component {

    increment = () => {
        const {value} = this.selectNumber
        this.props.jia(value * 1)
    }

    decrement = () => {
        const {value} = this.selectNumber
        this.props.jian(value * 1)
    }

    incrementIfOdd = () => {
        const count = this.props.count
        const {value} = this.selectNumber
        if (count % 2 !== 0) {
           this.props.jia(value * 1)
        }
    }

    incrementAsync = () => {
        const {value} = this.selectNumber
        this.props.asyncJia(value * 1,500)
    }


    render() {
        return (
            <div>
                <h1>当前组件为Count组件,当前组件值为{this.props.count},下方组件人数为：{this.props.length}</h1>
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

const mapStateToProps = state => ({
   count: state.countReducer.count,
   length: state.personReducer.person.length
})

const mapDispatchToProps = dispatch => ({
    jia:number => dispatch(incrementAction(number)),
    jian:number => dispatch(decrementAction(number)),
    asyncJia: (number,time) => dispatch(asyncIncrementAction(number,time))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Count)
