import {Component} from "react";
import Demo from './components/Demo'
import Index from './components/Index'
import Demo2 from './components/Demo2'
import Context from './components/Context'
import Parent from "./components/RenderProps/parent";


class App extends Component {
    render() {
        return (
            <div>
                <h1>1.setState更新状态的2种写法</h1>
                <Demo/>
                <hr/>
                <h1>2.路由组件的lazyLoad</h1>
                <Index/>
                <hr/>
                <h1>3.Hooks</h1>
                <Demo2/>
                <hr/>
                <h1>4.Context</h1>
                <Context/>
                <hr/>
                <h1>5.RenderProps</h1>
                <Parent/>
            </div>
        )
    }
}

export default App;
