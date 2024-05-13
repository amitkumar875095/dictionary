import {createStore} from 'redux';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger'
import {thunk} from 'redux-thunk'
import reducer from '../reducer';
import { ADD_TEXT } from '../action/actionTypes';
import app from '../firebase/firebaseConfig';
import { getFirestore,addDoc,collection } from 'firebase/firestore';


let store;
 const newMiddleWare = (obj)=>(next)=>  (action)=>{
    if(action.type==ADD_TEXT){
      const db = getFirestore(app);
      const collectionREf = collection(db,'Dictanary');
    console.log("actionWord",collectionREf);

     addDoc(collectionREf,{
        word : action.posts.word,
        meaning : action.posts.meaning,
     }).then((docRef)=>{
        console.log("succesful added")
     }).catch((error)=>{
        console.log("error",error);
     })
     
    console.log("wait over")
     next(action);
    }
 }


export function configureStore(){
    store = createStore(reducer,applyMiddleware(logger,thunk,newMiddleWare));

    console.log("store",store.posts);
    return store;
}