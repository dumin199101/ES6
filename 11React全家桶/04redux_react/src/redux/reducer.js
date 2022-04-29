import {INCREMENT,DECREMENT} from "./action_types";

const initState = 0

export default function count_reducer(init_state = initState,action){
    const {type,data} = action
    switch (type) {
        case INCREMENT:
            return init_state + data
        case DECREMENT:
            return init_state - data
        default:
            return init_state
    }
}