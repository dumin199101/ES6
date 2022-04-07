import React, {Component} from "react";
import {withRouter} from 'react-router-dom'
import {Button} from "antd";
import "../../App.css"

class Header extends Component {

    back = ()=>{
        this.props.history.goBack()
    }

    forward = ()=>{
        this.props.history.goForward()
    }

    go = ()=>{
        this.props.history.go(-2)
    }

    render() {
        console.log('Header组件收到的props是',this.props);
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>
                <Button type="primary" onClick={this.back}>回退</Button>
                <Button type="default" onClick={this.forward}>前进</Button>
                <Button type="dashed" onClick={this.go}>go</Button>
            </div>
        )
    }
}

export default withRouter(Header)