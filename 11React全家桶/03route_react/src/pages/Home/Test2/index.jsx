import {Component} from "react";
import qs from 'query-string'

class Test2 extends Component{

    render() {
        const {search} = this.props.location
        console.log(qs.parse(search.slice(1)))
        const {id} = qs.parse(search.slice(1))
        return (
            <h3>这是Test2组件,传递过来的参数值是{id}</h3>
        )
    }
}

export default Test2