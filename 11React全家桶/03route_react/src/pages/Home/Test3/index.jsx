import {Component} from "react";

class Test3 extends Component{
    render() {
        console.log(this.props)
        const {id,title} =  this.props.location.state
        return (
            <h3>这是Test3组件,传递过来的参数是{id},{title}</h3>
        )
    }
}

export default Test3