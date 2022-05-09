import {INCREMENT, DECREMENT} from "../actionType";

export const incrementAction = data => ({type: INCREMENT, data})
export const decrementAction = data => ({type: DECREMENT, data})

export const asyncIncrementAction = (data,time) => {
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(incrementAction(data))
        },time)
    }
}