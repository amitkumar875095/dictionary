import { ADD_DATA, UPDATE_POSTS } from "../action/actionTypes";
import { ADD_TEXT } from "../action/actionTypes";
import app from "../firebase/firebaseConfig";
import { getFirestore,onSnapshot,collection } from "firebase/firestore";



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