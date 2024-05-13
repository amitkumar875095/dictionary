import { UPDATE_POSTS } from "./actionTypes";
import { ADD_TEXT } from "./actionTypes";

export function fetchPost(Word){
    console.log(Word,"Word");
    return (dispatch)=>{
        
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${Word}`
        fetch(url)
        .then((response)=>{
          return response.json();
        }).then((data)=>{
            
             console.log("data",data[0].meanings[0].definitions[0].definition);
            dispatch(updatePosts({word: Word,meaning:data[0].meanings[0].definitions[0].definition}))
        })
    }
}


export function updatePosts(posts){
    return {
        type : ADD_TEXT,
        posts,
    }
}
