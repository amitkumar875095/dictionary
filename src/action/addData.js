import { ADD_DATA } from "./actionTypes";

export function addData(posts){
    return {
        type : ADD_DATA,
        posts,
    }
}