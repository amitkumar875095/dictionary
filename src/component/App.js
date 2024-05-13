
import React, { Component ,} from 'react'
import { connect } from 'react-redux'
import { fetchPost, updatePosts } from '../action/posts';
import Search from './search';
import Posts from './posts';
import app from '../firebase/firebaseConfig';
import {collection, getFirestore, onSnapshot } from 'firebase/firestore'
import { addData } from '../action/addData';
 class App extends Component {
constructor(){
  super();
  this.state = {
    back_post : [],
  }
  this.collectionREf = 'NULL';
}


  componentDidMount(){
    const {posts} = this.props;
   const db = getFirestore(app);
   this.collectionREf = collection(db,'Dictanary');
   this.unsubscribe = onSnapshot(this.collectionREf,(snapshot)=>{
      console.log("snapshot",snapshot);
     const collect = snapshot.docs.map((doc)=>{
      const dataRef = doc.data();
      dataRef['id'] = doc.id;
      return dataRef;
     })
     this.setState({ back_post : collect });
  })
      
   }
  


  render() {
    console.log("props",this.props)
    const {posts} = this.props;
    return (
     <div className='dict'>
      <Search  dispatch = {this.props.dispatch}/>
   
     <Posts posts = {this.state.back_post} />
     </div>
   
    )
  }
}

function mapStateToProps(state){
  return {
    posts : state.posts
  }
}
export default connect(mapStateToProps)(App);

