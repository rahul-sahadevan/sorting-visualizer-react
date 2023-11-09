import { SORTING_ARRAY } from "../actions/actionType";

let intialState = {
    sortingType:'',
    array : [],
    size: 0
}

export const actionReducer = (state=intialState,action)=>{

    switch(action.type){
        case SORTING_ARRAY:return {...state,sortingType:action.value.tech,array:action.value.array,size:action.value.size}
        default:return state
    }
}