import {Component} from "react";


class Test extends Component {


    render() {
        console.log(this.props.match)
        // 多级解构
        const {match:{params:p}} = this.props
        return `这是Test组件,传递过来的参数值是：${p.id}`
    }

}

export default Test
