import {Component,Fragment} from "react";

export default class Demo extends Component {

    state = {
        count: 0
    }

    /* add = ()=>{
         this.setState({
             count: this.state.count+1
         },()=>{
             console.log("重新渲染完成")
         })
     }*/

    add = () => {
        this.setState((state, props) => {
            // console.log(state)
            // console.log(props)
            return {count:state.count + 1}
        },()=>{
            console.log("重新渲染完毕")
        })
    }

    render() {
        return (
            <Fragment>
                <h1>count的值是：{this.state.count}</h1>
                <button onClick={this.add}>点击加1</button>
            </Fragment>
        )
    }
}