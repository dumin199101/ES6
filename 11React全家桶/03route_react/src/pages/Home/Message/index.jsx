import React, {Component} from "react";

class Message extends Component {
    componentDidMount() {
        setTimeout(()=>{
            this.props.history.goBack()
        },3000)
    }

    render() {
        return (
            <ul>
                <li>meaage001</li>
                <li>meaage002</li>
                <li>meaage003</li>
            </ul>
        )
    }
}

export default Message