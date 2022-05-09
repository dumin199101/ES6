import {INCREMENT, DECREMENT} from "../actionType";

const init_state = {
    count: 0
}

export default function countReducer(state = init_state, action) {
    const {type, data} = action
    switch (type) {
        case INCREMENT:
            return {...state, count: state.count + data}
        case DECREMENT:
            return {...state,count: state.count - data}
        default:
            return state
    }
}