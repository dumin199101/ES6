import React, {Component} from "react";
import Count from "./components/Count";
import Count2 from "./components/Count2"

export default class App extends Component {

    render() {
        return (
            <div>
               <Count/>
               <hr/>
               <Count2/>
            </div>
        )
    }


}