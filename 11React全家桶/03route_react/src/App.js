import React,{Component} from "react";
import Header from "./components/Header";
import {Route,Redirect,Switch} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import MyNavLink from "./components/MyNavLink";

class App  extends Component{


  render() {
    return (
        <div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
                <Header/>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                  <MyNavLink to="/home" children="Home" />
                  <MyNavLink to="/about">About</MyNavLink>
                  <Redirect to="/home" />
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                    <Switch>
                        <Route path="/home" component={Home}></Route>
                        <Route path="/about" component={About}></Route>
                    </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }

}

export default App;
