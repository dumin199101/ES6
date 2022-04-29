import {INCREMENT, DECREMENT} from "./action_types";

//同步action，就是指action的值为Object类型的一般对象
export const incrementAction = data => ({type: INCREMENT, data})
export const decrementAction = data => ({type: DECREMENT, data})

//异步action，就是指action的值为函数,异步action中一般都会调用同步action，
export const asyncIncrementAction = (data, time) => {
    return (dispatch) => {
        setTimeout(()=>{
            dispatch(incrementAction(data))
        },time)
    }
}