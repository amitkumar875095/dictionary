import { UPDATE_POSTS } from "../action/actionTypes";
import { ADD_TEXT } from "../action/actionTypes";

export default function posts(state=[],action){
    switch(action.type){
        case ADD_TEXT :
            return [
            ...state,action.posts,
            ]
        default :
        return state;
    }
}