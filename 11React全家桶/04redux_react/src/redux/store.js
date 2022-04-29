import {createStore,applyMiddleware} from "redux";
import count_reducer from "./reducer";
import thunk from "redux-thunk";


export default createStore(count_reducer,applyMiddleware(thunk))