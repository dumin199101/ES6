import {Component, Fragment} from "react";

export default class Parent extends Component {
    render() {
        return (
            <Fragment>
                <h2>这是父组件</h2>
                {/*<A>Hello,World</A>*/}
                <A render={(data) => <B data={data}/>}></A>
            </Fragment>
        )
    }
}

class A extends Component {
    render() {
        return (
            <Fragment>
                <h3>这是子组件A</h3>
                {/*<h4>{this.props.children}</h4>*/}
                {this.props.render("Hi,I am Amy")}
            </Fragment>
        )
    }
}

class B extends Component {
    render() {
        return (
            <Fragment>
                <h4>这是孙子组件B</h4>
                <h5>B组件接收到从A组件传递过来的数据：{this.props.data}</h5>
            </Fragment>
        )

    }
}


