import {INCREMENT, DECREMENT} from "./action_types";

// const initState = 0
const initState = {
    counter: 0
}

export default function count_reducer(init_state = initState, action) {
    const {type, data} = action
    switch (type) {
        case INCREMENT:
            // return init_state + data
            return {...init_state, counter: init_state.counter + data}
        case DECREMENT:
            // return init_state - data
            return {...init_state, counter: init_state.counter - data}
        default:
            return init_state
    }
}