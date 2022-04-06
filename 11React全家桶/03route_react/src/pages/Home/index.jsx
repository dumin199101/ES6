import React,{Component} from "react";
import {Switch,Route,Redirect} from 'react-router-dom'
import MyNavLink from "../../components/MyNavLink";
import Message from "./Message";
import News from "./News";
import Test from './Test'
import Test2 from './Test2'
import Test3 from './Test3'

class Home extends Component {
    render() {
        return (
            <div>
                <h3>我是Home的内容</h3>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink to="/home/news">News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to="/home/message">Message</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to="/home/test/1">测试</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to="/home/test2?id=2">测试2</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to={{pathname:'/home/test3',state:{id:3,title:'测试3'}}}>测试3</MyNavLink>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/home/news" component={News}></Route>
                        <Route path="/home/message" component={Message}></Route>
                        <Route path="/home/test/:id" component={Test}></Route>
                        <Route path="/home/test2" component={Test2}></Route>
                        <Route path="/home/test3" component={Test3}></Route>
                        <Redirect to="/home/news" />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Home