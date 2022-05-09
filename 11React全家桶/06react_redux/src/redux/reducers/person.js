import {ADDPERSON} from "../actionType";

const initState = {
    person: [{id:1,name:"lisi",age:20}]
}
export default function addPersonReducer(state=initState,action){
    const {type,data} = action
    switch (type){
        case ADDPERSON:
            return {...state,person:[data,...state.person]}
        default:
            return state
    }
}